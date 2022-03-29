import "./navbar.css";
import { SwitchTheme } from "../../utility/switch-theme";
import { NavbarCartButton, NavbarWishlistButton } from "./navbar";
import { Link } from "react-router-dom";
import { useCart } from "../../context/cart-wishlist-context";
import { Search } from "./search";

const MobileNavbar = () => {
  const { cartState } = useCart();
  return (
    <div className="mobile-navbar width-100">
      <SwitchTheme />
      <Link to="/cart">
        <NavbarCartButton cartNotification={cartState.cart.length} />
      </Link>

      <Link to="/Wishlist">
        <NavbarWishlistButton
          wishlistNotification={cartState.wishlist.length}
        />
      </Link>
      <Search />
    </div>
  );
};

export { MobileNavbar };
