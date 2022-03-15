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
import { getApiData } from "./utility/api-call";
import "./App.css";
import { useFilter } from "./context/filter-context";

function App() {
  useEffect(() => {
    (async () => {
      console.log("hello");
      const { filterState, dispatch } = useFilter();
      const response = await axios.get("/api/products");
      dispatch({ type: "API_DATA", value: response.data.products });
      console.log(filterState);
    })();
  }, []);
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="/productListing" element={<ProductListing />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/wishlist" element={<Wishlist />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
