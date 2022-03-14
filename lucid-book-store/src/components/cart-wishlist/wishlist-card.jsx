import React from "react";

const WishlistCard = () => {
  return (
    <>
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
            <div className="title">Stock market for beginners</div>
            <div className="subtitle">Stock</div>
          </div>
          <div className="textbox">
            <p className="text">
              50% off <span className="strike">$600</span>
            </p>
            <p className="CTA-text">$300</p>
          </div>
          <div className="btn-vertical">
            <button className="btn-primary btn-w-icon btn-small">
              <i className="fas fa-shopping-cart" />
              Add to Cart
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export { WishlistCard };
