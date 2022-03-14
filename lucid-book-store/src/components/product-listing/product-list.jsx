import React from "react";
import { ProductCard } from "./product-card";

const ProductList = () => {
  return (
    <>
      <div className="product-listing p-up-5 space-evenly flex-r-w">
        <ProductCard />
      </div>
    </>
  );
};

export { ProductList };
