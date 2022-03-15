import React from "react";
import { Filters } from "./filters";
import { ProductList } from "./product-list";
import "./product-listing.css";

const ProductListing = () => {
  return (
    <div class="grid-20-80 grid-product-listing width-100">
      <Filters />
      <ProductList />
    </div>
  );
};

export { ProductListing };
