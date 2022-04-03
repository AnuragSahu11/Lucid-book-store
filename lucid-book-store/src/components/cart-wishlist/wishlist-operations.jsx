import { useCart } from "../../context/cart-wishlist-context";
import { checkInList } from "../../utility/check-in-list";

const AddToWishlistLarge = ({ product }) => {
  const { cartState, cartDispatch } = useCart();
  const clickHandler = () => {
    if (!checkInList(cartState.wishlist, product.id)) {
      cartDispatch({ type: "ADD_TO_WISHLIST", value: product });
    }
    cartDispatch({ type: "REMOVE_FROM_CART", value: product.id });
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
    if (!checkInList(cartState.wishlist, product.id)) {
      cartDispatch({ type: "ADD_TO_WISHLIST", value: product });
    }
    if (checkInList(cartState.wishlist, product.id)) {
      cartDispatch({ type: "REMOVE_FROM_WISHLIST", value: product.id });
    }
  };
  const isRed = checkInList(cartState.wishlist, product.id)
    ? { color: "red" }
    : {};
  return (
    <span onClick={(e) => clickHandler(e)} className="card-icon is-white">
      <i style={isRed} className="fas is-5 fa-heart" />
    </span>
  );
};
const RemoveFromWishlist = ({ product }) => {
  const { cartDispatch } = useCart();
  return (
    <button
      onClick={() =>
        cartDispatch({ type: "REMOVE_FROM_WISHLIST", value: product.id })
      }
      className="card-cross btn-close is-medium"
    >
      <i className="fas fa-times" />
    </button>
  );
};
const AddToCartWishlist = ({ product }) => {
  const { cartState, cartDispatch } = useCart();

  const clickHandler = () => {
    if (checkInList(cartState.cart, product.id)) {
      cartDispatch({ type: "INCREASE_QUANTITY", value: product.id });
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        value: { ...product, quantity: 1 },
      });
    }
  };
  return (
    <button
      onClick={clickHandler}
      className="btn-primary width-100 btn-w-icon btn-small"
    >
      <i className="fas fa-shopping-cart" />
      Add to Cart
    </button>
  );
};

export {
  AddToWishlistLarge,
  AddToWishlistSmall,
  RemoveFromWishlist,
  AddToCartWishlist,
};
