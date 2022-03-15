import React from "react";

const Filters = () => {
  return (
    <div className="filter-menu p-x-4 p-up-2  dk-shadow flex-c-w">
      <div className="filter-menu-responsive flex-row align-center space-between">
        <a href="">
          <div className="title is-dark">Filters</div>
        </a>
        <a href="" className="link-secondary m-up-1 is-2">
          Clear all
        </a>
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
              <input type="checkbox" />
              Stocks
            </label>
          </li>
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input type="checkbox" />
              Forex
            </label>
          </li>
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input type="checkbox" />
              Crypto
            </label>
          </li>
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input type="checkbox" />
              Charting
            </label>
          </li>
          <li className="list-items">
            <label className="is-light form-checkbox is-2">
              <input type="checkbox" />
              Biography
            </label>
          </li>
        </ol>
      </div>
      <div className="list-container">
        <div className="title semibold">Rating</div>
        <ol className="list list-none">
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="opinion" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                4 Star &amp; above
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="opinion" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                3 Star &amp; above
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="opinion" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-2 is-medium">
                2 Star &amp; above
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="opinion" defaultChecked="" />
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
              <input type="radio" name="sort" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Price high to low
              </span>
            </label>
          </li>
          <li className="list-items">
            <label className="form-radio-label">
              <input type="radio" name="sort" defaultChecked="" />
              <i />
              <span className="form-radio-button-text is-light is-2">
                Price low to high
              </span>
            </label>
          </li>
        </ol>
      </div>
    </div>
  );
};

export { Filters };
