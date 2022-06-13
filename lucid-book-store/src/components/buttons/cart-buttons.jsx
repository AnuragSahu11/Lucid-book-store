import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import {
  addToCartApiMethod,
  decreaseQtyApiMethod,
  increaseQtyApiMethod,
  removeFromCartApiMethod,
} from "../../server-requests/server-requests";
import { checkInList } from "../../utility";
import { toast } from "react-toastify";

const AddToCartProductListing = ({ product, classes, setLoading }) => {
  const navigate = useNavigate();
  const { token } = useAuth();
  const { dataState, dispatch } = useData();
  const [buttonText, setButtonText] = useState(null);

  const addToCartclick = async () => {
    if (!token) {
      navigate("/login");
      toast.info("Login required");
    }
    if (token && !checkInList(dataState.cart, product.id)) {
      setLoading(true);
      await addToCartApiMethod(product, token, dispatch);
      setLoading(false);
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    checkInList(dataState.cart, product.id)
      ? setButtonText("Go to Cart")
      : setButtonText("Add to Cart");
  }, [dataState.cart]);

  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          addToCartclick();
        }}
        className={classes}
      >
        <i className="fas fa-shopping-cart" />
        {buttonText}
      </button>
    </>
  );
};

const IncreaseProductQuantity = ({ id, setLoading }) => {
  const { token } = useAuth();
  const { dispatch } = useData();
  const increaseQtyButton = async () => {
    setLoading(true);
    await increaseQtyApiMethod(id, token, dispatch);
    setLoading(false);
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          increaseQtyButton();
        }}
        className="btn-counter is-3 semibold"
      >
        +
      </button>
    </>
  );
};

const DecreaseProductQuantity = ({ id, qty, setLoading }) => {
  const { token } = useAuth();
  const { dispatch } = useData();

  const decreaseQtyclick = async () => {
    setLoading(true);
    await decreaseQtyApiMethod(id, token, dispatch);
    setLoading(false);
  };
  return (
    <>
      <button
        disabled={qty === 1}
        onClick={(e) => {
          e.stopPropagation();
          decreaseQtyclick();
        }}
        className="btn-counter is-3 bold"
      >
        -
      </button>
    </>
  );
};

const RemoveFromCart = ({ id, setLoading }) => {
  const { dispatch } = useData();
  const { token } = useAuth();
  const removeItemClick = async () => {
    setLoading(true);
    await removeFromCartApiMethod(id, token, dispatch);
    setLoading(false);
  };
  return (
    <>
      <button
        onClick={(e) => {
          e.stopPropagation();
          removeItemClick();
        }}
        className="btn-grey btn-small btn-w-icon"
      >
        Remove from cart
      </button>
    </>
  );
};

export {
  AddToCartProductListing,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  RemoveFromCart,
};
