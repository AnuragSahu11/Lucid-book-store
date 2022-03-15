import React from "react";
import { useFilter } from "../../context/filter-context";
import { ProductCard } from "./product-card";

const ProductList = () => {
  const { filterState, dispatch } = useFilter();
  return (
    <div className="product-listing p-up-5 space-evenly flex-r-w">
      {filterState.products.map((item) => (
        <ProductCard product={item} />
      ))}
    </div>
  );
};

export { ProductList };
