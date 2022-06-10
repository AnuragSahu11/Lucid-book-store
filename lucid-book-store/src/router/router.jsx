import { Route, Routes } from "react-router-dom";
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
} from "../pages";
import { PrivateRoute } from "./private-route";

const Router = () => {
  return (
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

      <Route element={<PrivateRoute />}>
        <Route path="/cart" element={<CartPage />} />
        <Route path="/wishlist" element={<WishlistPage />} />
        <Route path="/userpage" element={<UserProfilePage />} />
        <Route path="/address" element={<AddressPage />} />
      </Route>
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  );
};

export { Router };
