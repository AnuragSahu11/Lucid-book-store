import React from "react";

const Cart = () => {
  return (
    <>
      <>
        <div className="title text-center m-up-4 is-5">My Cart</div>
        <div className="cart m-y-6 p-x-2 grid-2">
          <div className="card-products m-dw-6 child-m-xl flex-c-w">
            <div className="card cart-card width-80 center-x card-horizontal elevated shadow">
              <div className="card-head">
                <span className="card-icon">
                  <i className="fas fa-heart" />
                </span>
                <span className="card-badge">Top seller</span>
                <div className="card-image">
                  <img
                    src="../images/bookstock.webp"
                    alt="card image"
                    className="card-image-img"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">
                    Stock Market Investing for Beginners
                  </div>
                  <div className="subtitle">Stock</div>
                </div>
                <div className="textbox">
                  <div className="counter-btn-div flex-row align-center">
                    <button className="btn-counter is-3 bold">-</button>
                    <input
                      className="input-counter m-x-1 is-2 p-y-0"
                      type="number"
                    />
                    <button className="btn-counter is-3 semibold">+</button>
                  </div>
                  <p className="CTA-text">$300</p>
                </div>
                <div className="btn-vertical m-dw-1">
                  <button className="btn-grey btn-small btn-w-icon">
                    Remove from cart
                  </button>
                  <button className="btn-secondary btn-small">
                    Move to wishlist
                  </button>
                </div>
              </div>
            </div>
            {/* 2nd card */}
            <div className="card cart-card width-80 center-x card-horizontal elevated shadow">
              <div className="card-head">
                <span className="card-icon">
                  <i className="fas fa-heart" />
                </span>
                <span className="card-badge">new</span>
                <div className="card-image">
                  <img
                    src="../images/bookstock2.webp"
                    alt="card image"
                    srcSet=""
                    className="card-image-img"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Cart Title</div>
                  <div className="subtitle">Subtitle</div>
                </div>
                <div className="textbox">
                  <div className="counter-btn-div flex-row align-center">
                    <button className="btn-counter is-3 bold">-</button>
                    <input
                      className="input-counter m-x-1 is-2 p-y-0"
                      type="number"
                    />
                    <button className="btn-counter is-3 semibold">+</button>
                  </div>
                  <p className="CTA-text">$376</p>
                </div>
                <div className="btn-vertical m-dw-1">
                  <button className="btn-grey btn-small btn-w-icon">
                    Remove from cart
                  </button>
                  <button className="btn-secondary btn-small">
                    Move to wishlist
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div className="cart-summary p-x-3 p-dw-3 p-up-3 width-50 elevated li-shadow br-3 center-x">
            <div className="textbox">
              <div className="title m-dw-2">Your Order</div>
              <hr />
              <div className="subtitle m-up-1 width-100 flex-row regular space-between">
                <p className="m-y-0">Price(2 item)</p>
                <p className="m-y-0">$1000</p>
              </div>
              <div className="subtitle width-100 flex-row regular space-between">
                <p className="m-y-0">Price(1 item)</p>
                <p className="m-y-0">$500</p>
              </div>
              <div className="subtitle width-100 flex-row regular space-between">
                <p className="m-y-0">Discount</p>
                <p className="m-y-0">-$100</p>
              </div>
              <div className="subtitle width-100 flex-row regular space-between">
                <p className="m-y-0">Dilivery Charge</p>
                <p className="m-y-0">-$50</p>
              </div>
              <hr />
              <div className="subtitle width-100 flex-row space-between is-3 m-y-1 is-dark">
                <p className="m-y-0">Total</p>
                <p className="m-y-0">-$2350</p>
              </div>
              <hr />
              <div className="subtitle width-100 flex-row regular space-between is-dark">
                <p className="m-y-0">You will save $150 on this order</p>
              </div>
            </div>
            <button className="btn-primary btn-small m-up-1 width-100 has-green">
              Place order
            </button>
          </div>
        </div>
      </>
    </>
  );
};

export { Cart };
