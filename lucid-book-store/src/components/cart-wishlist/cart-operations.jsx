import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useFilter } from "../../context/filter-context";
import { checkInList } from "../../utility";
import {
  AddToCartApiMethod,
  decreaseQtyApiMethod,
  increaseQtyApiMethod,
  removeFromCartApiMethod,
} from "../Auth/auth-methods";

const AddToCartProductListing = ({ product, classes }) => {
  const { token } = useAuth();
  const navigate = useNavigate();
  const { filterState, dispatch } = useFilter();
  const [buttonText, setButtonText] = useState(null);
  const addToCartclickHandler = async () => {
    if (!checkInList(filterState.cart, product.id)) {
      AddToCartApiMethod(product, token, dispatch);
    } else {
      navigate("/cart");
    }
  };

  useEffect(() => {
    checkInList(filterState.cart, product.id)
      ? setButtonText("Go to Cart")
      : setButtonText("Add to Cart");
  }, [filterState.cart]);

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
  const { dispatch } = useFilter();
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
  const { dispatch } = useFilter();
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
  const { dispatch } = useFilter();
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
