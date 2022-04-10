import { CartCard } from "./cart-card";
import { useCart } from "../../context/cart-wishlist-context";
import axios from "axios";
import { useAuth } from "../../context/auth-context";
import { useEffect, useState } from "react";
import { getHeader } from "../../utility";

const CartProducts = () => {
  const [products, setProducts] = useState(null);
  const { token } = useAuth();
  const getCartProducts = async () => {
    const response = await axios.get("api/user/cart", getHeader(token));
    setProducts(response.data.cart);
  };
  useEffect(() => {
    getCartProducts();
  }, []);
  return products ? (
    products.map((item) => <CartCard key={item.id} product={item} />)
  ) : (
    <>loading</>
  );
};

export { CartProducts };
