import React, { useEffect } from "react";
import { changeTitle } from "../../utility";
import { Filters } from "./filters";
import { ProductList } from "./product-list";
import "./product-listing.css";

const ProductListing = () => {
  useEffect(() => changeTitle("Buy Books"));
  return (
    <div className="grid-20-80 grid-product-listing width-100">
      <Filters />
      <ProductList />
    </div>
  );
};

export { ProductListing };
