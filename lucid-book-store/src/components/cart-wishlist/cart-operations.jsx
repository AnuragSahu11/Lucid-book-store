import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { checkInList } from "../../utility";
import {
  addToCartApiMethod,
  decreaseQtyApiMethod,
  increaseQtyApiMethod,
  removeFromCartApiMethod,
} from "../Auth/api-methods";

const AddToCartProductListing = ({ product, classes }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { dataState, dispatch } = useData();
  const [buttonText, setButtonText] = useState(null);
  const addToCartclickHandler = async () => {
    if (!token) {
      navigate("/login");
    }
    if (token && !checkInList(dataState.cart, product.id)) {
      addToCartApiMethod(product, token, dispatch);
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
    <button
      onClick={(e) => {
        e.stopPropagation();
        addToCartclickHandler();
      }}
      className={classes}
    >
      <i className="fas fa-shopping-cart" />
      {buttonText}
    </button>
  );
};

const IncreaseProductQuantity = ({ id }) => {
  const { token } = useAuth();
  const { dispatch } = useData();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        increaseQtyApiMethod(id, token, dispatch);
      }}
      className="btn-counter is-3 semibold"
    >
      +
    </button>
  );
};

const DecreaseProductQuantity = ({ id, quantity }) => {
  const { token } = useAuth();
  const { dispatch } = useData();
  const decreaseQtyclickHandler = () => {
    decreaseQtyApiMethod(id, token, dispatch);
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        decreaseQtyclickHandler();
      }}
      className="btn-counter is-3 bold"
    >
      -
    </button>
  );
};

const RemoveFromCart = ({ id }) => {
  const { dispatch } = useData();
  const { token } = useAuth();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        removeFromCartApiMethod(id, token, dispatch);
      }}
      className="btn-grey btn-small btn-w-icon"
    >
      Remove from cart
    </button>
  );
};

export {
  AddToCartProductListing,
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  RemoveFromCart,
};
