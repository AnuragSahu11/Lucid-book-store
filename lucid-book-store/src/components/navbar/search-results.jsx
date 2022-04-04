import { useParams } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
import { ProductCard } from "../product-listing/product-card";

const SearchResult = () => {
  const { searchText } = useParams();
  const { filterState } = useFilter();

  const matchingProducts = filterState.products.filter(({ title }) =>
    title.toLowerCase().includes(searchText.toLocaleLowerCase())
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

export { SearchResult };
