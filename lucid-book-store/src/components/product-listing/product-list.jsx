import React from "react";
import { useFilter } from "../../context/filter-context";
import { ProductCard } from "./product-card";
import { sortProducts } from "../../utility/sort-product";
import { filterCategory } from "../../utility/filter-product";

const ProductList = () => {
  const { filterState } = useFilter();
  const sortedProducts = sortProducts(filterState);
  const filteredProducts = filterCategory(filterState, [...sortedProducts]);
  return (
    <div className="product-listing p-up-5 space-evenly flex-r-w">
      {filteredProducts.map((item) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
};

export { ProductList };
