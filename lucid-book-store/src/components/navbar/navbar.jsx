import React from "react";
import { Link } from "react-router-dom";

const NavbarWishlistButton = ({ wishlistNotification }) => (
  <button className="btn-icon nav-icons">
    <i className="fas is-dark fa-heart icon-badge">
      {wishlistNotification > 0 ? (
        <span className="">{wishlistNotification}</span>
      ) : (
        ""
      )}
    </i>
  </button>
);
const NavbarCartButton = ({ cartNotification }) => (
  <button className="btn-icon nav-icons m-x-1">
    <i className="fas is-dark fa-shopping-cart icon-badge">
      {cartNotification > 0 ? <span className="">{cartNotification}</span> : ""}
    </i>
  </button>
);

const Navbar = () => {
  return (
    <nav className="navbar li-shadow">
      <div className="nav-brand">
        <a href="" className="logo-a">
          <img
            className="logo-s"
            src="images/02 - Colorful - Icon Only.png"
            alt="Lucid logo"
          />
        </a>
      </div>
      <div className="nav-hamburger">
        <i className="dark-mode fas m-r-2 fas fa-moon" />
        <i className="fas fa-bars" />
      </div>
      <div className="nav-menu">
        <div className="nav-start">
          <Link to="/">Home</Link>
          <Link to="/productListing">Shop Now</Link>
          <a className="nav-item link"></a>
        </div>
        <div className="nav-end">
          <div className="form-div nav-search m-x-3">
            <i className="fas fa-search is-blue" />
            <input
              type="text"
              className="form-input br-3"
              placeholder="search"
            />
          </div>
          <button className="dark-mode btn-icon is-dark nav-icons m-x-1">
            <i className="fas is-dark fa-moon" />
          </button>
          <Link to="/cart">
            <NavbarCartButton />
          </Link>

          <Link to="/Wishlist">
            <NavbarWishlistButton />
          </Link>

          <a href="/Wishlist" className="">
            <button className="btn-icon nav-icons m-x-1">
              <i className="fas is-dark fa-sign-out-alt" />
            </button>
          </a>
          <a href="pages/profile.html" className="">
            <button className="btn-icon nav-icons m-x-1">
              <i className="fa-solid is-dark fa-user" />
            </button>
          </a>
          <a href="pages/sign-up.html">
            <button className="btn-secondary nav-btn btn-small">Sign up</button>
          </a>
          <a href="pages/login.html">
            <button className="btn-primary nav-btn btn-small">Log in</button>
          </a>
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
