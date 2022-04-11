import { useData, useAuth } from "../../context";
import { checkInList } from "../../utility";
import { useNavigate } from "react-router-dom";
import {
  addToWishlistApiMethod,
  increaseQtyApiMethod,
  removeFromWishlistApiMethod,
  addToCartApiMethod,
  removeFromCartApiMethod,
} from "../Auth/api-methods";

const AddToWishlistLarge = ({ product }) => {
  const { dataState, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const addToWishlistClickHandler = () => {
    if (!token) {
      navigate("/login");
    }
    if (token && !checkInList(dataState.wishlist, product.id)) {
      addToWishlistApiMethod(product, token, dispatch);
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
  const { dataState, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const addToWishlistClickHandler = () => {
    if (!token) {
      navigate("/login");
    }
    if (token && !checkInList(dataState.wishlist, product.id)) {
      addToWishlistApiMethod(product, token, dispatch);
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
  const { dataState, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const AddToWishlistClickHandler = async () => {
    if (!token) {
      navigate("/login");
    }
    else if (checkInList(dataState.wishlist, product.id)) {
      removeFromWishlistApiMethod(product._id, token, dispatch);
    } else if(token) {
      addToWishlistApiMethod(product, token, dispatch);
    }
  };
  const isRed = checkInList(dataState.wishlist, product.id)
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
  const { dispatch } = useData();
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
  const { dataState, dispatch } = useData();
  const { token } = useAuth();
  const { _id } = product;
  const addToWishlistClickHandler = () => {
    if (checkInList(dataState.cart, product.id)) {
      increaseQtyApiMethod(_id, token, dispatch);
    } else {
      addToCartApiMethod(product, token, dispatch);
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
