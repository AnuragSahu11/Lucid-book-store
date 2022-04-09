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
import { useFilter } from "./context/filter-context";

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
        <Route path="/mock" element={<Mockman />} />
        <Route path="/search/:searchText" element={<SearchResult />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
