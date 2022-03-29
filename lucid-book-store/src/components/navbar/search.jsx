import { useState } from "react";
import { useFilter } from "../../context/filter-context";

const Search = () => {
  const { filterState } = useFilter();
  let [searchedProducts, setSearchedProducts] = useState();
  const searchInputHandler = (searchText) => {
    let matchingProducts = filterState.products.filter(({ title }) =>
      title.toLowerCase().includes(searchText.toLowerCase())
    );
    setSearchedProducts(matchingProducts.map((item) => <p>hello</p>));
    console.log(searchedProducts);
  };
  return (
    <div className="form-div nav-search m-x-3">
      <i className="fas fa-search is-blue" />
      <input
        onChange={(e) => searchInputHandler(e.target.value)}
        type="text"
        className="form-input br-3"
        placeholder="search"
      />
      <div className="search-results">{searchedProducts}</div>
    </div>
  );
};

export { Search };
