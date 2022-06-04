import React from "react";
import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Footer, Navbar, PrivateRoute } from "./components/index";
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
  UserProfilePage,
  AddressPage,
} from "./pages";
import "./App.css";

function App() {
  return (
    <div className="App">
      <ToastContainer
        autoClose={3000}
        hideProgressBar={true}
        closeOnClick={true}
        style={{ fontSize: "1.5rem" }}
      />
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
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/wishlist"
          element={
            <PrivateRoute>
              <WishlistPage />
            </PrivateRoute>
          }
        />
        <Route
          path="/userpage"
          element={
            <PrivateRoute>
              <UserProfilePage />
            </PrivateRoute>
          }
        />
        <Route
          path="/address"
          element={
            <PrivateRoute>
              <AddressPage />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<ErrorPage />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
