import React from "react";
import { WishlistCard } from "./wishlist-card";

const Wishlist = () => {
  return (
    <>
      <div className="wishlist p-x-3">
        <div className="textbox m-y-3">
          <div className="title bold is-5 center-text">Wishlist</div>
        </div>
        <div className="wishlist-cards flex-r-w space-evenly">
          <WishlistCard />
        </div>
      </div>
    </>
  );
};

export { Wishlist };
