import React from "react";
import { useCart } from "../../context/cart-wishlist-context";

const CartSummary = () => {
  const { cartState } = useCart();
  return (
    <div className="cart-summary p-x-3 p-dw-3 p-up-3 width-50 elevated li-shadow br-3 center-x">
      <div className="textbox">
        <div className="title m-dw-2">Your Order</div>
        <hr />
        {cartState.cart.map((item) => (
          <div className="subtitle m-up-1 width-100 flex-row regular space-between">
            <p className="m-y-0">{item.title}({item.quantity} x)</p>
            <p className="m-y-0">${item.price * item.quantity}</p>
          </div>
        ))}

        <div className="subtitle width-100 flex-row regular space-between">
          <p className="m-y-0">Dilivery Charge</p>
          <p className="m-y-0">$50</p>
        </div>
        <hr />
        <div className="subtitle width-100 flex-row space-between is-3 m-y-1 is-dark">
          <p className="m-y-0">Total {cartState.cart.length} items</p>
          <p className="m-y-0">
            {cartState.cart.reduce(
              (acc, curr) => (acc = acc + curr.price * curr.quantity),
              0
            ) + 50}
          </p>
        </div>
        <hr />
        <div className="subtitle width-100 flex-row regular space-between is-dark">
          <p className="m-y-0">You will save $150 on this order</p>
        </div>
      </div>
      <button className="btn-primary btn-small m-up-1 width-100 has-green">
        Place order
      </button>
    </div>
  );
};

export { CartSummary };
