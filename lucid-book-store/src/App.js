import React, { useEffect } from "react";
import {
  Homepage,
  Navbar,
  Footer,
  ProductListing,
  Cart,
  Wishlist,
} from "./components/components";
import { Route, Routes } from "react-router-dom";
import { getProductsData } from "./utility/api-call";
import "./App.css";
import { useFilter } from "./context/filter-context";
import { SingleProductPage } from "./components/single-product-page/single-product-page";

function App() {
  const { filterState, dispatch } = useFilter();
  useEffect(() => {
    getProductsData(dispatch);
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route
          path="/productListing/:productId"
          element={<SingleProductPage />}
        />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
