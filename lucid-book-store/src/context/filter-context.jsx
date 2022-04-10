import React, { createContext, useContext, useReducer } from "react";
import { filterReducer } from "./filter-reducer";

const FilterContext = createContext();

const useFilter = () => useContext(FilterContext);

const initialReducerObject = {
  cart: [],
  wishlist: [],
  filters: {
    sort: "",
    category: [],
    range: 0,
    rating: 0,
  },
  products: [],
};

const FilterProvider = ({ children }) => {
  const [filterState, dispatch] = useReducer(
    filterReducer,
    initialReducerObject
  );

  return (
    <FilterContext.Provider value={{ filterState, dispatch }}>
      {children}
    </FilterContext.Provider>
  );
};

export { useFilter, FilterProvider };
