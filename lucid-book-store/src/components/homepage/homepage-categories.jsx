import React from "react";
import { useNavigate } from "react-router-dom";
import { useFilter } from "../../context/filter-context";

const HomepageCategories = () => {
  const { filterState, dispatch } = useFilter();
  let navigate = useNavigate();
  const clickHandler = (category) => {
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
    if (category === "biography") {
      dispatch({
        type: "CATEGORY_BIOGRAPHY",
        value: true,
      });
    }
    navigate(`/productListing`);
  };
  return (
    <>
      <div className="m-up-6 category-div">
        <div className="category-sub-div">
          <div
            onClick={() => clickHandler("stock")}
            className="scale-1 category-product m-l-1 dk-shadow"
          >
            <img src="images/stock.png" alt="" className="category-img" />
            <p className="is-3 m-y-1 m-l-1 semibold category-name">Stock</p>
          </div>
          <div
            onClick={() => clickHandler("forex")}
            className="scale-1 category-product m-l-1 dk-shadow"
          >
            <img src="images/forex.png" alt="" className="category-img" />
            <p className="is-3 m-y-1 m-l-1 semibold category-name">Forex</p>
          </div>
        </div>
        <div className="category-sub-div">
          <div
            onClick={() => clickHandler("crypto")}
            className="scale-1 category-product m-l-1 dk-shadow"
          >
            <img
              src="images/cryptocurrencies.png"
              alt=""
              className="category-img"
            />
            <p className="is-3 m-y-1 m-l-1 semibold category-name">Crypto</p>
          </div>
        </div>
        <div className="category-sub-div">
          <div
            onClick={() => clickHandler("charting")}
            className="scale-1 category-product m-l-1 dk-shadow"
          >
            <img src="images/analytics.png" alt="" className="category-img" />
            <p className="is-3 m-y-1 m-l-1 semibold category-name">
              Chart analysis
            </p>
          </div>
          <div
            onClick={() => clickHandler("biography")}
            className="scale-1 category-product m-l-1 dk-shadow"
          >
            <img src="images/biography.png" alt="" className="category-img" />
            <p className="is-3 m-y-1 m-l-1 semibold category-name">Biography</p>
          </div>
        </div>
      </div>
      <section className="hero-section p-x-2 m-up-6">
        <div className="grid-70-30 m-up-4 p-x-3 hero-grid">
          <div className="hero-img" />
          <div className="hero-text center-y">
            <div className="textbox center-text">
              <div className="title center-text is-blue is-6">
                Welcome to The <span className="is-6">Lucid</span> Book Sale
              </div>
              <button
                onClick={() => navigate("/productListing")}
                className="btn-primary m-up-2 shadow btn-medium"
              >
                View Books
              </button>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export { HomepageCategories };
