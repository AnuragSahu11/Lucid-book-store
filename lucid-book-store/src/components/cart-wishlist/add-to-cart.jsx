import { useCart } from "../../context/cart-wishlist-context";

const AddToCart = ({ product }) => {
  const { cartState, cartDispatch } = useCart();

  const clickHandler = () => {
    console.log(product.quantity, product._id);
    if (product.quantity >= 1) {
      console.log(product.quantity, product._id);
      cartDispatch({ type: "INCREASE_QUANTITY", value: product._id });
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

const IncreaseProductQuantity = ({ id }) => {
  const { cartDispatch } = useCart();
  console.log(id);
  return (
    <button
      onClick={() => cartDispatch({ type: "INCREASE_QUANTITY", value: id })}
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
    <button onClick={clickHandler} className="btn-counter is-3 bold">
      -
    </button>
  );
};

export { AddToCart, IncreaseProductQuantity, DecreaseProductQuantity };