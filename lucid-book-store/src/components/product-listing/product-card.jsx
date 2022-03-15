import React from "react";

const ProductCard = () => {
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
            src="../images/bookstock.webp"
            alt="card image"
            srcSet=""
            className="card-image-img product-img"
          />
        </div>
      </div>
      <div className="card-body">
        <div className="textbox">
          <div className="title">Stock Market for beginners</div>
          <div className="subtitle">Stock</div>
        </div>
        <div className="textbox">
          <p className="text">
            A great book by andrew garton for the absolute beginners.
          </p>
          <p className="CTA-text">$36</p>
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
