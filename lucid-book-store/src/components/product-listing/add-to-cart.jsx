import { useCart } from "../../context/cart-wishlist-context";

const AddToCart = ({product}) => {
  const { cartState, cartDispatch } = useCart();
  return (
    <button
      onClick={() =>
        cartDispatch({ type: "ADD_TO_CART", value: { ...product } })
      }
      className="btn-primary width-100 btn-w-icon btn-small"
    >
      <i className="fas fa-shopping-cart" />
      Add to Cart
    </button>
  );
};

export { AddToCart };
