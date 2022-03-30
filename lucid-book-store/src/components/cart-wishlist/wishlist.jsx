import React from "react";
import { useCart } from "../../context/cart-wishlist-context";
import { WishlistCard } from "./wishlist-card";

const Wishlist = () => {
  const { cartState } = useCart();
  return (
    <div className="wishlist p-x-3">
      <div className="textbox m-y-3">
        <div className="title bold is-5 center-text">Wishlist</div>
      </div>
      <div className="wishlist-cards flex-r-w space-evenly">
        {cartState.wishlist.length > 0 ? (
          cartState.wishlist.map((item) => (
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
