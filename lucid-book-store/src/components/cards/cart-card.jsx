import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  IncreaseProductQuantity,
  DecreaseProductQuantity,
  RemoveFromCart,
} from "../buttons/cart-buttons";
import { AddToWishlistLarge } from "../buttons/wishlist-buttons";
import { discountPercentageCalc } from "../../utility";
import { Loader } from "../loader/loader";

const CartCard = ({ product }) => {
  const navigate = useNavigate();
  const [isloading, setLoading] = useState(false);
  const {
    _id,
    title,
    price,
    originalPrice,
    image,
    id,
    qty,
    categoryName,
    author,
  } = product;
  const goToProductPage = () => {
    navigate(`/productListing/${id}`);
  };
  return (
    <>
      <div
        onClick={goToProductPage}
        className="card cart-card width-80 center-x card-horizontal elevated dk-shadow"
      >
        <Loader isLoading={isloading} />
        <div className="card-head">
          <div className="card-image">
            <img src={image} alt="card image" className="card-image-img" />
          </div>
        </div>
        <div className="card-body">
          <div className="textbox">
            <div className="title semibold is-3">{title}</div>
            <div className="subtitle m-y-0 flex-row regular space-between align-center width-100">
              <p>{categoryName}</p>
              <p className="semibold">Author - {author}</p>
            </div>
          </div>
          <div className="textbox">
            <div className="counter-btn-div flex-row align-center">
              <DecreaseProductQuantity
                id={_id}
                qty={qty}
                setLoading={setLoading}
              />
              <input
                value={qty}
                className="input-counter m-x-1 is-2 p-y-0"
                type="number"
                readOnly
              />
              <IncreaseProductQuantity id={_id} setLoading={setLoading} />
            </div>
            <p className="CTA-text m-up-1 is-4 semibold">
              ${price}{" "}
              <span className="is-3 m-l-1 is-green">
                {discountPercentageCalc(price, originalPrice)}% off
              </span>
            </p>
          </div>
          <div className="btn-vertical width-90 m-dw-1">
            <RemoveFromCart id={_id} setLoading={setLoading} />
            <AddToWishlistLarge product={product} setLoading={setLoading} />
          </div>
        </div>
      </div>
    </>
  );
};

export { CartCard };
