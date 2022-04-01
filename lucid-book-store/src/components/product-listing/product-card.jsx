import React from "react";
import { useNavigate } from "react-router-dom";
import { AddToCartProductListing } from "../cart-wishlist/cart-operations";
import { AddToWishlistSmall } from "../cart-wishlist/wishlist-operations";

const ProductCard = ({ product }) => {
  const navigate = useNavigate();
  const { title, price, image, categoryName, author, rating, badge, id } =
    product;
  const showRatingStars = () => {
    return [...Array(rating)].map((item, i) => (
      <i key={i} className="fas is-3 fa-star"></i>
    ));
  };
  const cardImageHandler = () => {
    navigate(`/productListing/${id}`);
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
    <div className="card product-card m-x-3 elevated m-dw-5 li-shadow">
      <div onClick={cardImageHandler} className="card-head">
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
        <div className="textbox p-dw-0">
          <div className="title is-3 semibold">{title}</div>
          <div className="subtitle m-y-0 flex-row regular space-between align-center width-100">
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
          <p className="text semibold m-y-0">Author - {author}</p>
          <p className="CTA-text is-4 semibold">
            ${price} <span className="is-3 m-l-1 is-green">50% off</span>
          </p>
        </div>
        <div className="btn-vertical">
          <AddToCartProductListing product={product} />
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
