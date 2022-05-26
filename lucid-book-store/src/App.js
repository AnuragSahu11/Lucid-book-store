import React, { useEffect } from "react";
import { Route, Routes } from "react-router-dom";
import { Footer, Navbar } from "./components/index";
import {
  CartPage,
  ErrorPage,
  Homepage,
  LoginPage,
  ProductListingPage,
  SearchResultPage,
  SignupPage,
  WishlistPage,
  SingleProductPage,
} from "./pages";
import { useData } from "./context/data-context";
import "./App.css";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productListing" element={<ProductListingPage />} />
        <Route
          path="/productListing/:productId"
          element={<SingleProductPage />}
        />
        <Route path="/search/:searchText" element={<SearchResultPage />} />
        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<SignupPage />} />
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
