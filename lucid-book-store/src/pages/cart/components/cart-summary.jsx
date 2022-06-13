import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { useData } from "../../../context";
import { changeTitle, getTodaysDate, paymentGateway } from "../../../utility";
import { reducerAction } from "../../../utility/constants";
const short = require("short-uuid");

const CartSummary = () => {
  const {
    dataState: { cart, address, defaultAddress },
    dispatch,
  } = useData();
  let totalPrice =
    cart.length === 0
      ? 0
      : cart.reduce((acc, curr) => (acc = acc + curr.price * curr.qty), 0) + 50;

  const cartSummaryProductName = (word) => {
    return word.split("").slice(0, 15).join("");
  };

  const productPrice = (price, quantity) => {
    return price * quantity;
  };

  const initialisePayment = async () => {
    if (address.length > 0) {
      dispatch({
        type: reducerAction.ADD_ORDER,
        value: {
          orderID: short.generate(),
          totalAmount: totalPrice,
          orderProducts: cart.map(
            ({ title, author, price, image, id, qty }) => {
              return { title, author, price, image, id, qty };
            }
          ),
          date: getTodaysDate(),
          address: address.filter(({ _id }) => _id === defaultAddress)[0],
        },
      });
      toast.success("Your Order has been Placed");
      await paymentGateway(totalPrice * 100);
    } else {
      toast.warn("Select a address");
    }
  };

  useEffect(() => changeTitle(`Cart - ${cart.length} items`), []);

  return (
    <div className="cart-summary p-x-3 p-dw-3 p-up-3 width-70 elevated li-shadow br-3 center-x">
      <div className="textbox">
        <div className="title m-dw-2">Your Order</div>
        <hr />
        {cart.map((item) => (
          <div
            key={item.id}
            className="subtitle m-up-1 width-100 flex-row regular space-between"
          >
            <p className="m-y-0">
              {cartSummaryProductName(item.title) + "..."}({item.qty} x)
            </p>
            <p className="m-y-0">${productPrice(item.price, item.qty)}</p>
          </div>
        ))}

        <div className="subtitle width-100 flex-row regular space-between">
          <p className="m-y-0">Delivery Charge</p>
          <p className="m-y-0">$50</p>
        </div>
        <hr />
        <div className="subtitle width-100 flex-row space-between is-3 m-y-1 is-dark">
          <p className="m-y-0">Total {cart.length} items</p>
          <p className="m-y-0">${totalPrice}</p>
        </div>
        <hr />
        <div className="subtitle width-100 flex-row regular space-between is-dark">
          <p className="m-y-0">You will save $150 on this order</p>
        </div>
      </div>
      <button
        onClick={initialisePayment}
        className="btn-primary btn-small m-up-1 width-100 has-green"
      >
        Place order
      </button>
    </div>
  );
};

export { CartSummary };
