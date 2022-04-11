import React, { useEffect } from "react";
import Mockman from "mockman-js";
import {
  Homepage,
  Navbar,
  Footer,
  ProductListing,
  Cart,
  Wishlist,
  SingleProductPage,
  SearchResult,
  Login,
  Signup,
} from "./components/components";
import { Route, Routes } from "react-router-dom";
import { getProductsData, Loader } from "./utility";
import "./App.css";
import { useData } from "./context/data-context";

function App() {
  const { dataState, dispatch } = useData();
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route
          path="/productListing/:productId"
          element={<SingleProductPage />}
        />
        <Route path="/search/:searchText" element={<SearchResult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/mock" element={<Mockman />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
