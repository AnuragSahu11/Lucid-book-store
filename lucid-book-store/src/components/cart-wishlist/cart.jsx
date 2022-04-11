import React, { useState } from "react";
import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";
import { CartProducts } from "./cart-products";
import { CartSummary } from "./cart-summary";
import "./cart.css";

const Cart = () => {
  const { token } = useAuth();
  return token ? (
    <>
      <div className="title text-center m-up-4 is-5">My Cart</div>
      <div className="cart m-y-6 p-x-2 grid-2">
        <div className="card-products m-dw-6 child-m-xl flex-c-w">
          <CartProducts />
        </div>
        <CartSummary />
      </div>
    </>
  ) : (
    <Navigate to={"/login"} />
  );
};

export { Cart };
