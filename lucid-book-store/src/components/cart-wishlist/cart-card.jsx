import React from "react";
import { RemoveFromCart } from "./remove-from-cart";

const CartCard = ({ product }) => {
  const { title, price, image, _id } = product;
  return (
    <div className="card cart-card width-80 center-x card-horizontal elevated shadow">
      <div className="card-head">
        <span className="card-icon">
          <i className="fas fa-heart" />
        </span>
        <span className="card-badge">Top seller</span>
        <div className="card-image">
          <img src={image} alt="card image" className="card-image-img" />
        </div>
      </div>
      <div className="card-body">
        <div className="textbox">
          <div className="title">{title}</div>
          <div className="subtitle">Stock</div>
        </div>
        <div className="textbox">
          <div className="counter-btn-div flex-row align-center">
            <button className="btn-counter is-3 bold">-</button>
            <input className="input-counter m-x-1 is-2 p-y-0" type="number" />
            <button className="btn-counter is-3 semibold">+</button>
          </div>
          <p className="CTA-text">{price}</p>
        </div>
        <div className="btn-vertical m-dw-1">
          <RemoveFromCart id={_id} />
          <button className="btn-secondary btn-small">Move to wishlist</button>
        </div>
      </div>
    </div>
  );
};

export { CartCard };
