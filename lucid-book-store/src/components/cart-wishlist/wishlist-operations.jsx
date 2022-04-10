import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-wishlist-context";
import { useFilter } from "../../context/filter-context";
import { checkInList } from "../../utility";
import {
  AddToWishlistApiMethod,
  increaseQtyApiMethod,
  removeFromWishlistApiMethod,
  AddToCartApiMethod,
  removeFromCartApiMethod,
} from "../Auth/auth-methods";

const AddToWishlistLarge = ({ product }) => {
  const { filterState, dispatch } = useFilter();
  const { token } = useAuth();
  const addToWishlistClickHandler = () => {
    if (!checkInList(filterState.wishlist, product.id)) {
      AddToWishlistApiMethod(product, token, dispatch);
    }
    removeFromCartApiMethod(product._id, token, dispatch);
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToWishlistClickHandler();
      }}
      className={"btn-secondary btn-small"}
    >
      Move to wishlist
    </button>
  );
};

const AddToWishlistSingleProductPage = ({ product }) => {
  const { filterState, dispatch } = useFilter();
  const { token } = useAuth();
  const addToWishlistClickHandler = () => {
    if (!checkInList(filterState.wishlist, product.id)) {
      AddToWishlistApiMethod(product, token, dispatch);
    }
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToWishlistClickHandler();
      }}
      className={"btn-secondary width-50 btn-medium"}
    >
      Add to Wishlist
    </button>
  );
};

const AddToWishlistSmall = ({ product }) => {
  const { filterState, dispatch } = useFilter();
  const { token } = useAuth();
  const AddToWishlistClickHandler = async () => {
    if (checkInList(filterState.wishlist, product.id)) {
      removeFromWishlistApiMethod(product._id, token, dispatch);
    } else {
      AddToWishlistApiMethod(product, token, dispatch);
    }
  };
  const isRed = checkInList(filterState.wishlist, product.id)
    ? { color: "red" }
    : {};
  return (
    <span
      onClick={(e) => AddToWishlistClickHandler(e)}
      className="card-icon is-white"
    >
      <i style={isRed} className="fas is-5 fa-heart" />
    </span>
  );
};
const RemoveFromWishlist = ({ id }) => {
  const { dispatch } = useFilter();
  const { token } = useAuth();
  return (
    <button
      onClick={() => removeFromWishlistApiMethod(id, token, dispatch)}
      className="card-cross btn-close is-medium"
    >
      <i className="fas fa-times" />
    </button>
  );
};
const AddToCartWishlist = ({ product }) => {
  const { filterState, dispatch } = useFilter();
  const { token } = useAuth();
  const { _id } = product;
  const addToWishlistClickHandler = () => {
    if (checkInList(filterState.cart, product.id)) {
      increaseQtyApiMethod(_id, token, dispatch);
    } else {
      AddToCartApiMethod(product, token, dispatch);
    }
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToWishlistClickHandler();
      }}
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
  AddToWishlistSingleProductPage,
};
