import React from "react";
import { AddToCartProductListing } from "../cart-wishlist/cart-operations";
import { AddToWishlistSmall } from "../cart-wishlist/wishlist-operations";

const ProductCard = ({ product }) => {
  const { title, price, image, categoryName, author, rating, badge } = product;
  const showRatingStars = () => {
    return [...Array(rating)].map((item, i) => (
      <i key={i} className="fas is-3 fa-star"></i>
    ));
  };
  const ratingStarColor = () => {
    switch (rating) {
      case 5:
        return { color: "#26b539" };
      case 4:
        return { color: "#87d44a" };
      case 3:
        return { color: "#fead37" };
      case 2:
        return { color: "#fa6837" };
      case 1:
        return { color: "#ea2126" };
    }
  };
  return (
    <div className="card elevated m-dw-5 shadow">
      <div className="card-head">
        <AddToWishlistSmall product={product} />
        <span className="card-badge">{badge}</span>
        <div className="card-image">
          <img
            src={image}
            alt="card image"
            srcSet=""
            className="card-image-img product-img"
          />
        </div>
      </div>
      <div className="card-body width-100">
        <div className="textbox">
          <div className="title">{title}</div>
          <div className="subtitle flex-row space-between align-center width-100">
            <p>{categoryName}</p>
            <p
              className="br-1 product-listing-rating"
              style={ratingStarColor()}
            >
              {rating} | {showRatingStars()}
            </p>
          </div>
        </div>
        <div className="textbox">
          <p className="text">{author}</p>
          <p className="CTA-text">${price}</p>
        </div>
        <div className="btn-vertical">
          <AddToCartProductListing product={product} />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
