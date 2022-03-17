import { CartCard } from "./cart-card";
import { useCart } from "../../context/cart-wishlist-context";

const CartProducts = () => {
  const { cartState } = useCart();
  return cartState.cart.map((item) => <CartCard product={item} />);
};

export { CartProducts };
