import { CartProducts, CartSummary } from "./components";
import "./cart.css";
import { SelectAddressCard } from "../../components";
import { useData } from "../../context";

const CartPage = () => {
  const {
    dataState: { cart },
  } = useData();
  return (
    <>
      <div className="title text-center m-up-4 is-5">My Cart</div>
      <SelectAddressCard />
      <div className="cart m-y-6 p-x-2 grid-2">
        <div className="card-products m-dw-6 child-m-xl flex-c-w">
          <div className="is-4 margin-left semibold">Order Summary</div>
          <CartProducts />
        </div>
        {cart.length > 0 && <CartSummary />}
      </div>
    </>
  );
};

export { CartPage };
