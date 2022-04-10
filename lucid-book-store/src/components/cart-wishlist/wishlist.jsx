import axios from "axios";
import React, { useEffect, useState } from "react";
import { useAuth } from "../../context/auth-context";
import { useFilter } from "../../context/filter-context";
import { changeTitle, getHeader } from "../../utility";
import { WishlistCard } from "./wishlist-card";

const Wishlist = () => {
  const { filterState } = useFilter();
  useEffect(() => {
    changeTitle(`Wishlist -${filterState.wishlist.length} items`);
  }, []);

  return (
    <div className="wishlist p-x-3">
      <div className="textbox m-y-3">
        <div className="title bold is-5 center-text">Wishlist</div>
      </div>
      <div className="wishlist-cards flex-r-w space-evenly">
        {filterState.wishlist.length > 0 ? (
          filterState.wishlist.map((item) => (
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
