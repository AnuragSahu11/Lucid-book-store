import { useData, useAuth } from "../../context";
import { checkInList } from "../../utility";
import { useNavigate } from "react-router-dom";
import {
  addToWishlistApiMethod,
  increaseQtyApiMethod,
  removeFromWishlistApiMethod,
  addToCartApiMethod,
  removeFromCartApiMethod,
} from "../../server-requests/server-requests";

const AddToWishlistLarge = ({ product }) => {
  const { dataState, dispatch } = useData();
  const { token, setIsLoading } = useAuth();
  const navigate = useNavigate();
  const addToWishlistClick = async () => {
    if (!token) {
      navigate("/login");
    }
    if (token && !checkInList(dataState.wishlist, product.id)) {
      setIsLoading(true);
      await addToWishlistApiMethod(product, token, dispatch);
      setIsLoading(false);
    }

    removeFromCartApiMethod(product._id, token, dispatch);
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToWishlistClick();
        }}
        className={"btn-secondary btn-small"}
      >
        Move to wishlist
      </button>
    </>
  );
};

const AddToWishlistSingleProductPage = ({ product }) => {
  const { dataState, dispatch } = useData();
  const { token, setIsLoading } = useAuth();
  const navigate = useNavigate();
  const addToWishlistClick = async () => {
    if (!token) {
      navigate("/login");
    }
    if (token && !checkInList(dataState.wishlist, product.id)) {
      setIsLoading(true);
      await addToWishlistApiMethod(product, token, dispatch);
      setIsLoading(false);
    }
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToWishlistClick();
        }}
        className={"btn-secondary width-50 btn-medium"}
      >
        Add to Wishlist
      </button>
    </>
  );
};

const AddToWishlistSmall = ({ product }) => {
  const { dataState, dispatch } = useData();
  const { token, setIsLoading } = useAuth();
  const navigate = useNavigate();
  const AddToWishlistClick = async () => {
    if (!token) {
      navigate("/login");
    } else if (checkInList(dataState.wishlist, product.id)) {
      setIsLoading(true);
      await removeFromWishlistApiMethod(product._id, token, dispatch);
      setIsLoading(false);
    } else if (token) {
      setIsLoading(true);
      await addToWishlistApiMethod(product, token, dispatch);
      setIsLoading(false);
    }
  };
  const isRed = checkInList(dataState.wishlist, product.id)
    ? { color: "red" }
    : {};
  return (
    <>
      <span
        onClick={(e) => AddToWishlistClick(e)}
        className="card-icon is-white"
      >
        <i style={isRed} className="fas is-5 fa-heart" />
      </span>
    </>
  );
};

const RemoveFromWishlist = ({ id }) => {
  const { dispatch } = useData();
  const { token, setIsLoading } = useAuth();
  const removeButtonClick = async () => {
    setIsLoading(true);
    await removeFromWishlistApiMethod(id, token, dispatch);
    setIsLoading(false);
  };
  return (
    <>
      <button
        onClick={() => {
          removeButtonClick();
        }}
        className="card-cross btn-close is-medium"
      >
        <i className="fas fa-times" />
      </button>
    </>
  );
};

const AddToCartWishlist = ({ product }) => {
  const { dataState, dispatch } = useData();
  const { token, setIsLoading } = useAuth();
  const { _id } = product;
  const addToWishlistClick = async () => {
    if (checkInList(dataState.cart, product.id)) {
      setIsLoading(true);
      await increaseQtyApiMethod(_id, token, dispatch);
      setIsLoading(false);
    } else {
      setIsLoading(true);
      await addToCartApiMethod(product, token, dispatch);
      setIsLoading(false);
    }
  };

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToWishlistClick();
        }}
        className="btn-primary width-100 btn-w-icon btn-small"
      >
        <i className="fas fa-shopping-cart" />
        Add to Cart
      </button>
    </>
  );
};

export {
  AddToWishlistLarge,
  AddToWishlistSmall,
  RemoveFromWishlist,
  AddToCartWishlist,
  AddToWishlistSingleProductPage,
};
