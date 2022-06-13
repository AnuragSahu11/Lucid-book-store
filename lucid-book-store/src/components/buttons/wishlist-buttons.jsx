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
import { toast } from "react-toastify";

const AddToWishlistLarge = ({ product, setLoading }) => {
  const { dataState, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const addToWishlistClick = async () => {
    if (!token) {
      navigate("/login");
      toast.info("Login required");
    }
    if (token && !checkInList(dataState.wishlist, product.id)) {
      setLoading(true);
      await addToWishlistApiMethod(product, token, dispatch);
      setLoading(false);
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
  const { token, setPageLoading } = useAuth();
  const navigate = useNavigate();
  const addToWishlistClick = async () => {
    if (!token) {
      navigate("/login");
      toast.info("Login required");
    }
    if (token && !checkInList(dataState.wishlist, product.id)) {
      setPageLoading(true);
      await addToWishlistApiMethod(product, token, dispatch);
      setPageLoading(false);
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

const AddToWishlistSmall = ({ product, setLoading }) => {
  const { dataState, dispatch } = useData();
  const { token } = useAuth();
  const navigate = useNavigate();
  const AddToWishlistClick = async () => {
    if (!token) {
      navigate("/login");
      toast.info("Login required");
    } else if (checkInList(dataState.wishlist, product.id)) {
      setLoading(true);
      await removeFromWishlistApiMethod(product._id, token, dispatch);
      setLoading(false);
    } else if (token) {
      setLoading(true);
      await addToWishlistApiMethod(product, token, dispatch);
      setLoading(false);
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

const RemoveFromWishlist = ({ id, setLoading }) => {
  const { dispatch } = useData();
  const { token } = useAuth();
  const removeButtonClick = async () => {
    setLoading(true);
    await removeFromWishlistApiMethod(id, token, dispatch);
    setLoading(false);
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

const AddToCartWishlist = ({ product, setLoading }) => {
  const {
    dataState,
    dataState: { cart },
    dispatch,
  } = useData();

  const currProduct = cart.find(({ id }) => product.id === id);


  const { token } = useAuth();
  const { _id } = product;
  const addToWishlistClick = async () => {
    if (checkInList(dataState.cart, product.id)) {
      setLoading(true);
      await increaseQtyApiMethod(_id, token, dispatch);
      setLoading(false);
    } else {
      setLoading(true);
      await addToCartApiMethod(product, token, dispatch);
      setLoading(false);
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
        {checkInList(dataState.cart, product.id)
          ? `In cart ${currProduct.qty}`
          : " Add to Cart"}
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
