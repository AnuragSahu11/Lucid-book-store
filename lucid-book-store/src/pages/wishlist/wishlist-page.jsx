import React, { useEffect } from "react";
import { WishlistCard } from "../../components";
import { useData } from "../../context";
import { changeTitle } from "../../utility";

const WishlistPage = () => {
  const {
    dataState: { wishlist },
  } = useData();
  useEffect(() => {
    changeTitle(`Wishlist -${wishlist.length} items`);
  }, []);

  return (
    <div className="wishlist p-x-3">
      <div className="textbox m-y-3">
        <div className="title bold is-5 center-text">Wishlist</div>
      </div>
      <div className="wishlist-cards flex-r-w space-evenly">
        {wishlist.length > 0 &&
          wishlist.map((item) => <WishlistCard key={item.id} product={item} />)}
      </div>
      {wishlist.length === 0 && (
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
  );
};

export { WishlistPage };
