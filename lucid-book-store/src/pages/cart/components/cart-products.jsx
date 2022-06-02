import { CartCard } from "../../../components";
import { useData } from "../../../context";

const CartProducts = () => {
  const {
    dataState: { cart },
  } = useData();

  return cart.length > 0 ? (
    cart.map((item) => <CartCard key={item.id} product={item} />)
  ) : (
    <div className="empty-cart-image width-100">
      <div className="cart-image-wrapper center-x">
        <p className="is-4 is-light width-70 has-grey br-1 text-center center-x">
          Your cart is empty
        </p>
        <img className="width-100" src="./images/empty-cart.svg" alt="" />
      </div>
    </div>
  );
};

export { CartProducts };
