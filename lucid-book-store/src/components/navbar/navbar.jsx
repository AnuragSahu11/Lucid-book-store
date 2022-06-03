import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { Loader, SwitchTheme } from "../../utility";
import { Search } from "./search";
import { useAuth, useData } from "../../context";
import logo from "./logo.png";
import "./navbar.css";
import { LogoutModal } from "../modal/logout-modal";
import {
  NavbarCartButton,
  NavbarWishlistButton,
  NavbarLoginButton,
} from "./components/navbar-buttons";

const Navbar = () => {
  const { token } = useAuth();
  const {
    dataState: { cart, wishlist },
  } = useData();
  const navigate = useNavigate();
  const [showNav, setShowNav] = useState(false);
  const [showLogout, setShowLogout] = useState(false);
  const toggleLogoutModal = () => {
    setShowLogout((prevState) => !prevState);
  };
  const hamburgerClickHandler = () => {
    setShowNav((prevState) => !prevState);
  };
  return (
    <div className="">
      <Loader />
      <nav className={`navbar li-shadow  ${showNav && "custom-nav"}`}>
        <div className="nav-head">
          <div className="nav-brand">
            <a href="" className="logo-a">
              <img className="logo-s" src={logo} alt="logo" />
            </a>
          </div>
          <div onClick={hamburgerClickHandler} className="nav-hamburger">
            <i className="fas fa-bars" />
          </div>
        </div>

        <div className="nav-menu">
          <div className="nav-start">
            <Link to="/">Home</Link>
            <Link to="/productListing">Shop</Link>
            <a className="nav-item link"></a>
          </div>
          <div className="nav-end">
            <Search />
            <SwitchTheme />
            <Link to="/cart">
              <NavbarCartButton cartNotification={cart.length} />
            </Link>

            <Link to="/Wishlist">
              <NavbarWishlistButton wishlistNotification={wishlist.length} />
            </Link>

            <button
              onClick={() => navigate("/userpage")}
              className="btn-icon nav-icons m-x-1"
            >
              <i className="fa-solid is-dark fa-user" />
            </button>

            <button
              onClick={() => navigate("/signup")}
              className="btn-secondary nav-btn btn-small"
              style={token && { display: "none" }}
            >
              Sign up
            </button>

            <NavbarLoginButton
              token={token}
              toggleLogoutModal={toggleLogoutModal}
            />
          </div>
        </div>
      </nav>
      <LogoutModal showLogout={showLogout} toggleLogout={toggleLogoutModal} />
    </div>
  );
};

export { Navbar };
