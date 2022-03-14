import React from "react";

const Wishlist = () => {
  return (
    <>
      <div className="wishlist p-x-3">
        <div className="textbox m-y-3">
          <div className="title bold is-5 center-text">Wishlist</div>
        </div>
        <div className="wishlist-cards flex-r-w space-evenly">
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
          {/* comment */}
          <div className="card elevated m-dw-5 shadow">
            <div className="card-head">
              <button className="card-cross btn-close is-medium">
                <i className="fas fa-times" />
              </button>
              <span className="card-icon is-white">
                <i className="fas fa-heart" />
              </span>
              <span className="card-badge">Trending</span>
              <div className="card-image">
                <img
                  src="../images/bookstock2.webp"
                  alt="card image"
                  srcSet=""
                  className="card-image-img product-img"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="textbox">
                <div className="title">Cart Title</div>
                <div className="subtitle">Subtitle</div>
              </div>
              <div className="textbox">
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, velit.
                </p>
                <p className="CTA-text">$376</p>
              </div>
              <div className="btn-vertical">
                <button className="btn-primary btn-w-icon btn-small">
                  <i className="fas fa-shopping-cart" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* comment */}
          <div className="card elevated m-dw-5 shadow">
            <div className="card-head">
              <button className="card-cross btn-close is-medium">
                <i className="fas fa-times" />
              </button>
              <span className="card-icon is-white">
                <i className="fas fa-heart" />
              </span>
              <span className="card-badge">new</span>
              <div className="card-image">
                <img
                  src="../images/bookstock3.jpg"
                  alt="card image"
                  srcSet=""
                  className="card-image-img product-img"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="textbox">
                <div className="title">Cart Title</div>
                <div className="subtitle">Subtitle</div>
              </div>
              <div className="textbox">
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, velit.
                </p>
                <p className="CTA-text">$376</p>
              </div>
              <div className="btn-vertical">
                <button className="btn-primary btn-w-icon btn-small">
                  <i className="fas fa-shopping-cart" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* comment */}
          <div className="card elevated m-dw-5 shadow">
            <div className="card-head">
              <button className="card-cross btn-close is-medium">
                <i className="fas fa-times" />
              </button>
              <span className="card-icon is-white">
                <i className="fas fa-heart" />
              </span>
              <span className="card-badge">new</span>
              <div className="card-image">
                <img
                  src="../images/bookstock5.jpg"
                  alt="card image"
                  srcSet=""
                  className="card-image-img product-img"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="textbox">
                <div className="title">Cart Title</div>
                <div className="subtitle">Subtitle</div>
              </div>
              <div className="textbox">
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, velit.
                </p>
                <p className="CTA-text">$376</p>
              </div>
              <div className="btn-vertical">
                <button className="btn-primary btn-w-icon btn-small">
                  <i className="fas fa-shopping-cart" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* comment */}
          <div className="card elevated m-dw-5 shadow">
            <div className="card-head">
              <button className="card-cross btn-close is-medium">
                <i className="fas fa-times" />
              </button>
              <span className="card-icon is-white">
                <i className="fas fa-heart" />
              </span>
              <span className="card-badge">new</span>
              <div className="card-image">
                <img
                  src="../images/bookstock4.jpg"
                  alt="card image"
                  srcSet=""
                  className="card-image-img product-img"
                />
              </div>
            </div>
            <div className="card-body">
              <div className="textbox">
                <div className="title">Cart Title</div>
                <div className="subtitle">Subtitle</div>
              </div>
              <div className="textbox">
                <p className="text">
                  Lorem ipsum dolor sit amet, consectetur adipisicing elit.
                  Quia, velit.
                </p>
                <p className="CTA-text">$376</p>
              </div>
              <div className="btn-vertical">
                <button className="btn-primary btn-w-icon btn-small">
                  <i className="fas fa-shopping-cart" />
                  Add to Cart
                </button>
              </div>
            </div>
          </div>
          {/* comment */}
        </div>
      </div>
    </>
  );
};

export { Wishlist };
