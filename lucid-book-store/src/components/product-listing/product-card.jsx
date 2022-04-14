import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AddToCartProductListing } from "../cart-wishlist/cart-operations";
import { AddToWishlistSmall } from "../cart-wishlist/wishlist-operations";
import {
  discountPercentageCalc,
  ratingStarColor,
  showRatingStars,
  Alerts,
} from "../../utility";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const [alertData, setAlertData] = useState({
    showAlert: false,
    alertMsg: "",
    alertType: "",
  });
  const {
    title,
    price,
    image,
    categoryName,
    author,
    rating,
    badge,
    id,
    originalPrice,
  } = product;

  const cardImageHandler = () => {
    navigate(`/productListing/${id}`);
  };

  return (
    <>
      {<Alerts setAlertData={setAlertData} alertData={alertData} />}
      <div className="card product-card m-x-3 elevated m-dw-5 li-shadow">
        <div className="card-head">
          <AddToWishlistSmall product={product} setAlertData={setAlertData} />
          <span className="card-badge">{badge}</span>
          <div onClick={cardImageHandler} className="card-image">
            <img
              src={image}
              alt="card image"
              srcSet=""
              className="card-image-img product-img"
            />
          </div>
        </div>
        <div onClick={cardImageHandler} className="card-body width-100">
          <div className="textbox p-dw-0">
            <div className="title is-3 semibold">{title}</div>
            <div className="subtitle m-y-0 flex-row regular space-between align-center width-100">
              <p>{categoryName}</p>
              <p
                className="br-1 product-listing-rating"
                style={ratingStarColor(rating)}
              >
                {rating} | {showRatingStars(rating)}
              </p>
            </div>
          </div>
          <div className="textbox">
            <p className="text semibold m-y-0">Author - {author}</p>
            <p className="CTA-text is-4 semibold">
              ${price}{" "}
              <span className="is-3 m-l-1 is-green">
                {discountPercentageCalc(price, originalPrice)}% off
              </span>
            </p>
          </div>
          <div className="btn-vertical">
            <AddToCartProductListing
              classes={"btn-primary width-100 btn-w-icon btn-small"}
              product={product}
              setAlertData={setAlertData}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };
