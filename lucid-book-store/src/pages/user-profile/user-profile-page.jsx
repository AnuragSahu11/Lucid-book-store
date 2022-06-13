import { Link } from "react-router-dom";
import { OrderCard } from "../../components/cards/order-card";
import { useAuth, useData } from "../../context";

const UserProfilePage = () => {
  const {
    dataState: { orders },
  } = useData();
  const { logoutHandler } = useAuth();
  return (
    <main>
      <div className="profile grid-30-70 m-up-4 width-80 center-x">
        <div className="profile-links m-r-4 m-dw-4">
          <div className="textbox br-3 p-y-2 flex-col width-100 elevated dk-shadow">
            <div className="title semibold m-l-5 m-y-0">Manage Account</div>
            <Link
              to="/address"
              className="link m-l-5 semibold is-light m-up-1 is-3"
            >
              <i className="m-r-1 fa-solid fa-address-book" />
              Manage Address
            </Link>
            <Link
              to="/wishlist"
              className="link m-l-5 semibold is-3 is-light m-up-1"
            >
              <i className="m-r-1 fa-solid fa-heart" />
              Wishlist
            </Link>
            <Link
              to="/cart"
              className="link m-l-5 semibold is-3 is-light m-up-1"
            >
              <i className="m-r-1 fa-solid fa-bag-shopping" />
              Cart
            </Link>
            <a
              onClick={logoutHandler}
              className="pointer link m-l-5 semibold is-3 is-red m-up-1"
            >
              <i className="m-r-1 fa-solid fa-right-from-bracket" />
              Log out
            </a>
          </div>
        </div>
        <div className="profile-info p-dw-4 elevated dk-shadow br-3">
          <div className="subtitle p-l-3 semibold is-dark is-4 m-up-2 m-dw-3">
            Your Orders
          </div>
          <div className="order-card-wrapper">
            {orders.map((order) => (
              <OrderCard orderData={order} />
            ))}
          </div>
        </div>
      </div>
    </main>
  );
};

export { UserProfilePage };
