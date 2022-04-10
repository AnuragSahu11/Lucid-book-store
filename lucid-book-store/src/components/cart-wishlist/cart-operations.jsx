import axios from "axios";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-wishlist-context";
import { checkInList } from "../../utility";
import {
  AddToCartApiMethod,
  removeFromCartApiMethod,
} from "../Auth/auth-methods";

const AddToCartProductListing = ({ product, classes }) => {
  const { token } = useAuth();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const addToCartclickHandler = async () => {
    AddToCartApiMethod(product, token);
  };
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
  const { cartDispatch } = useCart();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        cartDispatch({ type: "INCREASE_QUANTITY", value: id });
      }}
      className="btn-counter is-3 semibold"
    >
      +
    </button>
  );
};

const DecreaseProductQuantity = ({ id, quantity }) => {
  const { cartDispatch } = useCart();
  const decreaseQtyclickHandler = () => {
    quantity > 1 && cartDispatch({ type: "DECREASE_QUANTITY", value: id });
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
  const { token } = useAuth();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        removeFromCartApiMethod(id, token);
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
