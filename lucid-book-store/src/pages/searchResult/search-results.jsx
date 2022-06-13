import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { ProductCard } from "../../components/cards/product-card";
import { useData } from "../../context";
import { changeTitle } from "../../utility";

const SearchResultPage = () => {
  const { searchText } = useParams();
  const {
    dataState: { products },
  } = useData();
  useEffect(() => changeTitle(`Search result for "${searchText}"`));
  const matchingProducts = products.filter(
    ({ title, author }) =>
      title.toLowerCase().includes(searchText.toLocaleLowerCase()) ||
      author.toLowerCase().includes(searchText.toLocaleLowerCase())
  );
  return (
    <div className="search-result-page">
      <div className="textbox">
        <div className="title text-center m-y-3 is-4">
          Search Results for "{searchText}"{" "}
          <span className="regular is-3">
            {" "}
            - {matchingProducts.length} items
          </span>{" "}
        </div>
      </div>
      <div className="flex-r-w space-evenly">
        {matchingProducts.map((item) => (
          <ProductCard product={item} />
        ))}
      </div>
    </div>
  );
};

export { SearchResultPage };
