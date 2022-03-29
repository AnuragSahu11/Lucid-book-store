import { useCart } from "../../context/cart-wishlist-context";
import { checkInList } from "../../utility/check-in-list";

const AddToWishlistLarge = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const clickHandler = () => {
    if (!checkInList(cartState.wishlist, product._id)) {
      cartDispatch({ type: "ADD_TO_WISHLIST", value: product });
    }
    cartDispatch({ type: "REMOVE_FROM_CART", value: product._id });
  };
  return (
    <button onClick={() => clickHandler()} className="btn-secondary btn-small">
      Move to wishlist
    </button>
  );
};
const AddToWishlistSmall = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const clickHandler = () => {
    if (!checkInList(cartState.wishlist, product._id)) {
      cartDispatch({ type: "ADD_TO_WISHLIST", value: product });
    }
    if (checkInList(cartState.wishlist, product._id)) {
      cartDispatch({ type: "REMOVE_FROM_WISHLIST", value: product._id });
    }
  };
  const isRed = checkInList(cartState.wishlist, product._id)
    ? { color: "red" }
    : {};
  return (
    <span onClick={() => clickHandler()} className="card-icon is-white">
      <i style={isRed} className="fas fa-heart" />
    </span>
  );
};
const RemoveFromWishlist = ({ product }) => {
  const { cartDispatch } = useCart();
  return (
    <button
      onClick={() =>
        cartDispatch({ type: "REMOVE_FROM_WISHLIST", value: product._id })
      }
      className="card-cross btn-close is-medium"
    >
      <i className="fas fa-times" />
    </button>
  );
};

export { AddToWishlistLarge, AddToWishlistSmall, RemoveFromWishlist };
