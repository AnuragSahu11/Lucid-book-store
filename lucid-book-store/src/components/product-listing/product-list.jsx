import React from "react";
import { useFilter } from "../../context/filter-context";
import { ProductCard } from "./product-card";
import {
  sortProducts,
  filterByCategory,
  filterByRating,
  filterByPrice,
  compose,
} from "../../utility";

const ProductList = () => {
  const { filterState } = useFilter();
  const filteredProducts = compose(
    sortProducts,
    filterByCategory,
    filterByRating,
    filterByPrice
  )(filterState, [...filterState.products]);

  return (
    <div className="product-listing p-up-5 space-evenly flex-r-w">
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export { ProductList };
