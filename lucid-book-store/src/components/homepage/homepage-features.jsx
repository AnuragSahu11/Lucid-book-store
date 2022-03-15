import React from "react";

const HomepageFeatures = () => {
  return (
    <>
      <section className="product-showcase-homepage p-x-2">
        <div className="grid-2 m-y-6 product-grid-homepage">
          <div className="card-one m-dw-4 m-x-2">
            <div className="card has-light-blue card-horizontal dk-shadow">
              <div className="card-head">
                <div className="card-image has-transparent">
                  <img
                    src="images/muscle.png"
                    alt=""
                    className="img-responsive card-image-img width-80"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Improve Fundamentals</div>
                </div>
                <div className="textbox">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisic ingelit.
                    Quia,velit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
                <a href="pages/productListing.html">
                  <button className="btn-primary m-dw-1 btn-medium shadow btn-w-icon">
                    <i className="fas fa-shopping-cart" />
                    View Books
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card-two m-x-2">
            <div className="card has-light-blue card-horizontal dk-shadow">
              <div className="card-head center-text">
                <div className="card-image has-transparent">
                  <img
                    className="img-responsive width-80"
                    src="images/bitcoin.png"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Cryptocurrencies</div>
                </div>
                <div className="textbox">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisic ingelit.
                    Quia,velit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
                <a href="pages/productListing.html">
                  <button className="btn-primary m-dw-1 btn-medium shadow btn-w-icon">
                    <i className="fas fa-shopping-cart" />
                    View Books
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card-two m-dw-4 m-x-2">
            <div className="card has-light-blue card-horizontal dk-shadow">
              <div className="card-head center-text">
                <div className="card-image has-transparent">
                  <img
                    className="img-responsive width-80"
                    src="images/trader.png"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Learn from Professional</div>
                </div>
                <div className="textbox">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisic ingelit.
                    Quia,velit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
                <a href="pages/productListing.html">
                  <button className="btn-primary m-dw-1 btn-medium shadow btn-w-icon">
                    <i className="fas fa-shopping-cart" />
                    View Books
                  </button>
                </a>
              </div>
            </div>
          </div>
          <div className="card-two m-x-2">
            <div className="card has-light-blue card-horizontal dk-shadow">
              <div className="card-head center-text">
                <div className="card-image has-transparent">
                  <img
                    className="img-responsive width-80"
                    src="images/calm.png"
                  />
                </div>
              </div>
              <div className="card-body">
                <div className="textbox">
                  <div className="title">Trading Mindset</div>
                </div>
                <div className="textbox">
                  <p className="text">
                    Lorem ipsum dolor sit amet, consectetur adipisic ingelit.
                    Quia,velit. Lorem ipsum dolor sit amet consectetur
                    adipisicing elit.Lorem ipsum dolor sit amet. Lorem ipsum
                    dolor sit amet.
                  </p>
                </div>
                <a href="pages/productListing.html">
                  <button className="btn-primary m-dw-1 btn-medium shadow btn-w-icon">
                    <i className="fas fa-shopping-cart" />
                    View Books
                  </button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
      <div className="grid-4 p-up-2 has-accent">
        <div className="features center-x">
          <div className="card-image m-dw-1 has-transparent">
            <img src="images/100-percent.png" />
          </div>
          <div className="subtitle m-l-3 regular is-dark is-3">Original</div>
        </div>
        <div className="features center-x">
          <div className="card-image m-dw-1 has-transparent">
            <img src="images/delivery-truck.png" />
          </div>
          <div className="subtitle is-dark regular is-3">Fast delivery</div>
        </div>
        <div className="features center-x">
          <div className="card-image m-dw-1 has-transparent">
            <img src="images/delivery.png" />
          </div>
          <div className="subtitle is-dark regular is-3">COD available</div>
        </div>
        <div className="features center-x">
          <div className="card-image has-transparent">
            <img src="images/coupon.png" />
          </div>
          <div className="subtitle is-dark regular m-l-3 is-3">Discount</div>
        </div>
      </div>
    </>
  );
};

export { HomepageFeatures };