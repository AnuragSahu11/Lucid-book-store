import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useCart } from "../../context/cart-wishlist-context";
import { changeTitle, getHeader } from "../../utility";
import { WishlistCard } from "./wishlist-card";

const Wishlist = () => {
  const [wishlistProducts, setWishlistProducts] = useState(null);
  const { token } = useAuth();
  useEffect(() => {
    // changeTitle(`Wishlist -${cartState.wishlist.length} items`);
    getWishlistData();
  }, []);
  const getWishlistData = async () => {
    const response = await axios.get("/api/user/wishlist", getHeader(token));
    setWishlistProducts(response.data.wishlist);
  };
  return (
    <div className="wishlist p-x-3">
      <div className="textbox m-y-3">
        <div className="title bold is-5 center-text">Wishlist</div>
      </div>
      <div className="wishlist-cards flex-r-w space-evenly">
        {wishlistProducts ? (
          wishlistProducts.map((item) => (
            <WishlistCard key={item.id} product={item} />
          ))
        ) : (
          <></>
        )}
      </div>
    </div>
  );
};

export { Wishlist };
