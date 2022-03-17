import { useCart } from "../../context/cart-wishlist-context";

const RemoveFromCart = (id) => {
  const { cartDispatch } = useCart();
  return (
    <button
      onClick={() => cartDispatch({ type: "REMOVE_FROM_CART", value: id })}
      className="btn-grey btn-small btn-w-icon"
    >
      Remove from cart
    </button>
  );
};

export { RemoveFromCart };
