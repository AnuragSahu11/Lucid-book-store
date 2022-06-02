import React from "react";
import { useNavigate } from "react-router-dom";
import { useData } from "../../../context";

const HomepageCategories = () => {
  const { dataState, dispatch } = useData();
  let navigate = useNavigate();
  const categoryClickHandler = (category) => {
    dispatch({
      type: "CLEAR_FILTER",
    });
    if (category === "stock") {
      dispatch({
        type: "CATEGORY_STOCKS",
        value: true,
      });
    }
    if (category === "forex") {
      dispatch({
        type: "CATEGORY_FOREX",
        value: true,
      });
    }
    if (category === "crypto") {
      dispatch({
        type: "CATEGORY_CRYPTO",
        value: true,
      });
    }
    if (category === "charting") {
      dispatch({
        type: "CATEGORY_CHARTING",
        value: true,
      });
    }
    if (category === "investment") {
      dispatch({
        type: "CATEGORY_INVESTMENT",
        value: true,
      });
    }
    navigate(`/productListing`);
  };
  return (
    <>
      <section className="hero-section">
        <div className=" hero-grid">
          <div className="hero-img" />
          <div className="hero-text center-y">
            <div className="textbox m-up-6  center-text">
              <div className="center-text is-white semibold hero-heading">
                <span className="is-blue bold hero-lucid-span ">
                  <i className="fas fa-book-open hero-logo is-blue"></i> LUCID
                </span>{" "}
                Book Store
              </div>
              <div className="is-white is-4 m-y-1">
                Read From wide range of Books Tailored to<br></br> jumpstart
                your Trading Journey
              </div>
              <button
                onClick={() => navigate("/productListing")}
                className="btn-secondary is-white br-white m-up-2 btn-w-icon btn-medium"
              >
                {" "}
                <i className="fas fa-shopping-cart" />
                Shop Now
              </button>
            </div>
          </div>
        </div>
      </section>
      <div className="m-up-6 category-div">
        <div
          onClick={() => categoryClickHandler("stock")}
          className="scale-1 category-product m-l-1 dk-shadow"
        >
          <img src="images/stock.png" alt="" className="category-img" />
          <p className="is-3 m-y-1 m-l-1 semibold category-name">Stock</p>
        </div>
        <div
          onClick={() => categoryClickHandler("forex")}
          className="scale-1 category-product m-l-1 dk-shadow"
        >
          <img src="images/forex.png" alt="" className="category-img" />
          <p className="is-3 m-y-1 m-l-1 semibold category-name">Forex</p>
        </div>

        <div
          onClick={() => categoryClickHandler("crypto")}
          className="scale-1 category-product m-l-1 dk-shadow"
        >
          <img
            src="images/cryptocurrencies.png"
            alt=""
            className="category-img"
          />
          <p className="is-3 m-y-1 m-l-1 semibold category-name">Crypto</p>
        </div>
        <div
          onClick={() => categoryClickHandler("charting")}
          className="scale-1 category-product m-l-1 dk-shadow"
        >
          <img src="images/analytics.png" alt="" className="category-img" />
          <p className="is-3 m-y-1 m-l-1 semibold category-name">
            Chart analysis
          </p>
        </div>
        <div
          onClick={() => categoryClickHandler("investment")}
          className="scale-1 category-product m-l-1 dk-shadow"
        >
          <img src="images/biography.png" alt="" className="category-img" />
          <p className="is-3 m-y-1 m-l-1 semibold category-name">Investment</p>
        </div>
      </div>
    </>
  );
};

export { HomepageCategories };
