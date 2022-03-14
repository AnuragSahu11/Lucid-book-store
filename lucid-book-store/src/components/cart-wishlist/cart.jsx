import React from "react";
import { CartCard } from "./cart-card";
import { CartSummary } from "./cart-summary";
import "./cart.css";

const Cart = () => {
  return (
    <>
      <>
        <div className="title text-center m-up-4 is-5">My Cart</div>
        <div className="cart m-y-6 p-x-2 grid-2">
          <div className="card-products m-dw-6 child-m-xl flex-c-w">
            <CartCard />
          </div>
          <CartSummary />
        </div>
      </>
    </>
  );
};

export { Cart };
