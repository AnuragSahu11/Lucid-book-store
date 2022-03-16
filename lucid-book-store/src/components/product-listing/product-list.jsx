import React from "react";
import { useFilter } from "../../context/filter-context";
import { ProductCard } from "./product-card";
import { sortProducts } from "../../utility/sort-product";
import {
  filterByCategory,
  filterByPrice,
  filterByRating,
} from "../../utility/filter-product";

const ProductList = () => {
  const { filterState } = useFilter();
  const sortedProducts = sortProducts(filterState);
  const filteredProducts1 = filterByCategory(filterState, [...sortedProducts]);
  const filteredProducts2 = filterByPrice(filterState, filteredProducts1);
  const filteredProducts3 = filterByRating(filterState, filteredProducts2);
  console.log(filterState);
  return (
    <div className="product-listing p-up-5 space-evenly flex-r-w">
      {filteredProducts3.map((item) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
};

export { ProductList };
