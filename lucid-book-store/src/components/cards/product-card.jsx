import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import {
  discountPercentageCalc,
  ratingStarColor,
  showRatingStars,
} from "../../utility";
import { AddToCartProductListing } from "../buttons/cart-buttons";
import { AddToWishlistSmall } from "../buttons/wishlist-buttons";
import { Loader } from "../loader/loader";
import "./card.css";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
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
  const [isLoading, setLoading] = useState(false);
  return (
    <>
      <div className="card product-card m-x-3 elevated m-dw-5 li-shadow">
        <Loader isLoading={isLoading} size="medium" />
        <div className="card-head">
          <AddToWishlistSmall product={product} setLoading={setLoading} />
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
          <div className="btn-vertical product-card-button">
            <AddToCartProductListing
              classes={"btn-primary width-100 btn-w-icon btn-small"}
              product={product}
              setLoading={setLoading}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export { ProductCard };
