import React, { createContext, useContext, useReducer, useEffect } from "react";
import { getProductsData } from "../utility";
import { dataReducer } from "./data-reducer";

const DataContext = createContext();

const useData = () => useContext(DataContext);

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

const DataProvider = ({ children }) => {
  const [dataState, dispatch] = useReducer(dataReducer, initialReducerObject);
  useEffect(() => {
    getProductsData(dispatch);
  }, []);
  return (
    <DataContext.Provider value={{ dataState, dispatch }}>
      {children}
    </DataContext.Provider>
  );
};

export { useData, DataProvider };
