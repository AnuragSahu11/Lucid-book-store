import React, { useEffect } from "react";
import { Navigate } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { changeTitle } from "../../utility";
import { WishlistCard } from "./wishlist-card";

const Wishlist = () => {
  const { dataState } = useData();
  const { token } = useAuth();
  useEffect(() => {
    changeTitle(`Wishlist -${dataState.wishlist.length} items`);
  }, []);

  return token ? (
    <div className="wishlist p-x-3">
      <div className="textbox m-y-3">
        <div className="title bold is-5 center-text">Wishlist</div>
      </div>
      <div className="wishlist-cards flex-r-w space-evenly">
        {dataState.wishlist.length > 0 &&
          dataState.wishlist.map((item) => (
            <WishlistCard key={item.id} product={item} />
          ))}
      </div>
      {dataState.wishlist.length === 0 && (
        <div className="empty-wishlist width-100">
          <div className="empty-wishlist-wrapper center-x">
            <p className="is-4 has-grey br-1 center-x regular text-center width-70 is-light">
              Your wishlist is empty{" "}
            </p>
            <div className="empty-wishlist-image">
              <img src="./images/empty-wishlist.svg" alt="" />
            </div>
          </div>
        </div>
      )}
    </div>
  ) : (
    <Navigate to={"/login"} />
  );
};

export { Wishlist };
