import React from "react";

const ProductCard = ({ product }) => {
  const { title, price, image, categoryName, author } = product;
  return (
    <div className="card elevated m-dw-5 shadow">
      <div className="card-head">
        <button className="card-cross btn-close is-medium">
          <i className="fas fa-times" />
        </button>
        <span className="card-icon is-white">
          <i className="fas fa-heart" />
        </span>
        <span className="card-badge">Top Seller</span>
        <div className="card-image">
          <img
            src={image}
            alt="card image"
            srcSet=""
            className="card-image-img product-img"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="textbox">
          <div className="title">{title}</div>
          <div className="subtitle">{categoryName}</div>
        </div>
        <div className="textbox">
          <p className="text">{author}</p>
          <p className="CTA-text">${price}</p>
        </div>
        <div className="btn-vertical">
          <a href="productPage.html">
            <button className="btn-primary width-100 btn-w-icon btn-small">
              <i className="fas fa-shopping-cart" />
              Add to Cart
            </button>
          </a>
        </div>
      </div>
    </div>
  );
};

export { ProductCard };
