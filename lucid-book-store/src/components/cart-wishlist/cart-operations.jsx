import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../../context/cart-wishlist-context";
import { checkInList } from "../../utility/check-in-list";

const AddToCartProductListing = ({ product, classes }) => {
  const { cartState, cartDispatch } = useCart();
  const navigate = useNavigate();
  const [buttonText, setButtonText] = useState("Add to Cart");
  const clickHandler = () => {
    if (checkInList(cartState.cart, product.id)) {
      navigate("/cart");
    } else {
      cartDispatch({
        type: "ADD_TO_CART",
        value: { ...product, quantity: 1 },
      });
      setButtonText("Go to Cart");
    }
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        clickHandler();
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
  const clickHandler = () => {
    quantity > 1 && cartDispatch({ type: "DECREASE_QUANTITY", value: id });
  };
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        clickHandler();
      }}
      className="btn-counter is-3 bold"
    >
      -
    </button>
  );
};

const RemoveFromCart = ({ id }) => {
  const { cartDispatch } = useCart();
  return (
    <button
      onClick={(e) => {
        e.stopPropagation();
        cartDispatch({ type: "REMOVE_FROM_CART", value: id });
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
