import { CartCard } from "./cart-card";
import { useData } from "../../context";

const CartProducts = () => {
  const { dataState } = useData();

  return dataState.cart.length > 0 ? (
    dataState.cart.map((item) => <CartCard key={item.id} product={item} />)
  ) : (
    <>loading</>
  );
};

export { CartProducts };
