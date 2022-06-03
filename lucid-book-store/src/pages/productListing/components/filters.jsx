import React, { useState } from "react";
import { useData } from "../../../context";
import { reducerAction } from "../../../utility/constants";

const Filters = () => {
  const {
    dataState: {
      filters: { range, category, rating, sort },
    },
    dispatch,
  } = useData();
  const [hideFilter, setHideFilter] = useState(true);
  const showFilterClick = () => {
    setHideFilter((prevState) => !prevState);
  };
  const filterClickHandler = (dispatchArguments) => {
    dispatch(dispatchArguments);
  };
  const clearFilters = () => {
    dispatch({ type: reducerAction.CLEAR_FILTER });
  };
  return (
    <div
      className={`filter-menu ${
        hideFilter && "hide-filter-menu"
      } p-x-4 p-up-2  dk-shadow`}
    >
      <div className="filter-menu-responsive flex-row align-center pointer space-between">
        <div onClick={showFilterClick} className="title is-dark">
          Filters
        </div>
        <p onClick={clearFilters} className="link-secondary m-up-1 is-2">
          Clear all
        </p>
      </div>
      <div className="quantity-slider">
        <div className="title semibold">Price Range</div>
        <div className="slider-range">
          <span className="slider-range-min">200</span>
          <span className="slider-range-mid">1000</span>
          <span className="slider-range-max">2000</span>
        </div>
        <input
          type="range"
          step={200}
          min={200}
          max={2000}
          className="slider"
          list="tickmarks"
          value={range}
          onChange={(e) =>
            filterClickHandler({
              type: reducerAction.SELECT_RANGE,
              value: Number(e.target.value),
            })
          }
        />
        <datalist id="tickmarks">
          <option value="200"></option>
          <option value="400"></option>
          <option value="600"></option>
          <option value="800"></option>
          <option value="1000"></option>
          <option value="1200"></option>
          <option value="1400"></option>
          <option value="1600"></option>
          <option value="1800"></option>
          <option value="2000"></option>
        </datalist>
      </div>
      <div className="list-container">
        <div className="title semibold">Category</div>
        <ol className="list list-none">
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input
                type="checkbox"
                checked={category.includes("Stocks")}
                onChange={(e) =>
                  filterClickHandler({
                    type: reducerAction.CATEGORY_STOCKS,
                    value: e.target.checked,
                  })
                }
              />
              Stocks
            </label>
          </li>
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input
                type="checkbox"
                checked={category.includes("Forex")}
                onChange={(e) =>
                  filterClickHandler({
                    type: reducerAction.CATEGORY_FOREX,
                    value: e.target.checked,
                  })
                }
              />
              Forex
            </label>
          </li>
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input
                type="checkbox"
                checked={category.includes("Crypto")}
                onChange={(e) =>
                  filterClickHandler({
                    type: reducerAction.CATEGORY_CRYPTO,
                    value: e.target.checked,
                  })
                }
              />
              Crypto
            </label>
          </li>
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input
                type="checkbox"
                checked={category.includes("Charting")}
                onChange={(e) =>
                  filterClickHandler({
                    type: reducerAction.CATEGORY_CHARTING,
                    value: e.target.checked,
                  })
                }
              />
              Charting
            </label>
          </li>
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input
                type="checkbox"
                checked={category.includes("Investment")}
                onChange={(e) =>
                  filterClickHandler({
                    type: reducerAction.CATEGORY_INVESTMENT,
                    value: e.target.checked,
                  })
                }
              />
              Investment
            </label>
          </li>
        </ol>
      </div>
      <div className="list-container">
        <div className="title semibold">Rating</div>
        <ol className="list list-none">
          <li className="list-items">
            <label className="form-radio-label">
              <input
                type="radio"
                checked={rating === 4}
                onChange={() =>
                  filterClickHandler({
                    type: reducerAction.SELECT_RATING,
                    value: 4,
                  })
                }
                name="opinion"
              />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                4 Star &amp; above
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input
                type="radio"
                checked={rating === 3}
                onChange={() =>
                  filterClickHandler({
                    type: reducerAction.SELECT_RATING,
                    value: 3,
                  })
                }
                name="opinion"
              />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                3 Star &amp; above
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input
                type="radio"
                checked={rating === 2}
                onChange={() =>
                  filterClickHandler({
                    type: reducerAction.SELECT_RATING,
                    value: 2,
                  })
                }
                name="opinion"
              />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                2 Star &amp; above
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input
                type="radio"
                checked={rating === 1}
                onChange={() =>
                  filterClickHandler({
                    type: reducerAction.SELECT_RATING,
                    value: 1,
                  })
                }
                name="opinion"
              />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                1 Star &amp; above
              </span>
            </label>
          </li>
        </ol>
      </div>
      <div className="list-container">
        <div className="title semibold">Sort By</div>
        <ol className="list list-none">
          <li className="list-items">
            <label className="form-radio-label">
              <input
                type="radio"
                name="sort"
                checked={sort === reducerAction.SORT_LOW_TO_HIGH}
                onChange={() =>
                  filterClickHandler({ type: reducerAction.SORT_LOW_TO_HIGH })
                }
              />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Price low to high
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input
                type="radio"
                name="sort"
                checked={sort === reducerAction.SORT_HIGH_TO_LOW}
                onChange={() =>
                  filterClickHandler({ type: reducerAction.SORT_HIGH_TO_LOW })
                }
              />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Price high to low
              </span>
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export { Filters };
