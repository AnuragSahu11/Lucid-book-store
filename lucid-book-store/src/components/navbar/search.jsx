import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../context";

const Search = () => {
  const navigate = useNavigate();
  const {
    dataState: { products },
  } = useData();
  const [searchedProducts, setSearchedProducts] = useState();
  const [searchText, setSearchText] = useState();

  const searchInputHandler = (searchText) => {
    if (searchText === "") {
      setSearchedProducts("");
    } else {
      let matchingProducts = products
        .filter(
          ({ title, author }) =>
            title.toLowerCase().includes(searchText.toLowerCase()) ||
            author.toLowerCase().includes(searchText.toLowerCase())
        )
        .slice(0, 15);
      setSearchedProducts(
        matchingProducts.map((item) => (
          <p className="search-result-p p-x-1 light is-3">{item.title}</p>
        ))
      );
    }
  };
  const goToSearchResultsPage = () => {
    setSearchedProducts("");
    navigate(`/search/${searchText}`);
  };
  return (
    <div className="form-div nav-search m-x-3">
      <i className="fas fa-search is-blue" />
      <input
        onChange={(e) => {
          setSearchText(e.target.value);
          searchInputHandler(e.target.value);
        }}
        value={searchText}
        type="text"
        className="form-input br-3"
        placeholder="Search by book, author"
      />
      <div onClick={goToSearchResultsPage} className="search-results">
        {searchedProducts}
      </div>
    </div>
  );
};

export { Search };
