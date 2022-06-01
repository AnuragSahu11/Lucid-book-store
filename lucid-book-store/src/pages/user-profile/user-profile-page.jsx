import { Link } from "react-router-dom";

const UserProfilePage = () => {
  return (
    <main>
      <div className="profile grid-30-70 m-up-4 width-80 center-x">
        <div className="profile-links m-r-4">
          <div className="textbox br-2 p-y-2 p-l-2 dk-shadow elevated align-center flex-r-w">
            <div className="avatar-m">
              <img src="https://picsum.photos/200" alt="profile picture" />
            </div>
            <div className="m-l-1">
              <div className="subtitle is-3">Hello</div>
              <div className="m-y-0 is-3 title">Anurag Sahu</div>
            </div>
          </div>
          <div className="textbox br-3 m-y-2 p-y-2 flex-col width-100 elevated li-shadow">
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
              href="logout.html"
              className="link m-l-5 semibold is-3 is-red m-up-1"
            >
              <i className="m-r-1 fa-solid fa-right-from-bracket" />
              Log out
            </a>
          </div>
        </div>
        <div className="profile-info p-l-3 p-dw-4 elevated li-shadow br-3">
          <div className="subtitle semibold is-dark is-4 m-up-2">
            Your Orders
          </div>
          
        </div>
      </div>
    </main>
  );
};

export { UserProfilePage };
