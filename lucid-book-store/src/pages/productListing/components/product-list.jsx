import React from "react";
import { useData } from "../../../context";
import { ProductCard } from "../../../components/cards/product-card";
import {
  sortProducts,
  filterByCategory,
  filterByRating,
  filterByPrice,
  compose,
} from "../../../utility";

const ProductList = () => {
  const { dataState } = useData();
  const filteredProducts = compose(
    sortProducts,
    filterByCategory,
    filterByRating,
    filterByPrice
  )(dataState, [...dataState.products]);

  return (
    <div className="product-listing p-up-5 flex-r-w">
      {filteredProducts.map((item) => (
        <ProductCard key={item.id} product={item} />
      ))}
    </div>
  );
};

export { ProductList };
