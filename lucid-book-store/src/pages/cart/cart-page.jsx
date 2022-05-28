import { Navigate } from "react-router-dom";
import { useAuth } from "../../context";
import { CartProducts, CartSummary } from "./components";
import "./cart.css";

const CartPage = () => {
  return (
    <>
      <div className="title text-center m-up-4 is-5">My Cart</div>
      <div className="cart m-y-6 p-x-2 grid-2">
        <div className="card-products m-dw-6 child-m-xl flex-c-w">
          <CartProducts />
        </div>
        <CartSummary />
      </div>
    </>
  );
};

export { CartPage };
