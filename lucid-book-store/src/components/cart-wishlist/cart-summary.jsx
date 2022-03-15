import React from "react";

const CartSummary = () => {
  return (
    <div className="cart-summary p-x-3 p-dw-3 p-up-3 width-50 elevated li-shadow br-3 center-x">
      <div className="textbox">
        <div className="title m-dw-2">Your Order</div>
        <hr />
        <div className="subtitle m-up-1 width-100 flex-row regular space-between">
          <p className="m-y-0">Price(2 item)</p>
          <p className="m-y-0">$1000</p>
        </div>
        <div className="subtitle width-100 flex-row regular space-between">
          <p className="m-y-0">Price(1 item)</p>
          <p className="m-y-0">$500</p>
        </div>
        <div className="subtitle width-100 flex-row regular space-between">
          <p className="m-y-0">Discount</p>
          <p className="m-y-0">-$100</p>
        </div>
        <div className="subtitle width-100 flex-row regular space-between">
          <p className="m-y-0">Dilivery Charge</p>
          <p className="m-y-0">-$50</p>
        </div>
        <hr />
        <div className="subtitle width-100 flex-row space-between is-3 m-y-1 is-dark">
          <p className="m-y-0">Total</p>
          <p className="m-y-0">-$2350</p>
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
