import { useParams } from "react-router-dom";
import { useAuth, useData } from "../../context";
import { useEffect, useState } from "react";
import {
  changeTitle,
  discountPercentageCalc,
  ratingStarColor,
  showRatingStars,
} from "../../utility";
import axios from "axios";
import {
  AddToCartProductListing,
  AddToWishlistSingleProductPage,
} from "../../components";

const SingleProductPage = () => {
  const { setPageLoading } = useAuth();
  const [productData, setProductData] = useState([]);
  let { productId } = useParams();
  const findProductData = (productId, data) => {
    return data.products.find(({ id }) => productId === id);
  };

  const getProductData = async () => {
    setPageLoading(true);
    const { data } = await axios.get("/api/products");
    setProductData(findProductData(productId, data));
    changeTitle(findProductData(productId, data).title);
    setPageLoading(false);
  };
  useEffect(() => {
    getProductData();
  }, []);

  const { title, author, price, originalPrice, rating, image, description } =
    productData;

  return !title ? (
    <></>
  ) : (
    <>
      <div className="product p-x-2 p-y-6 br-3 elevated li-shadow elevate-1 m-up-6 width-80 center-x grid-30-70">
        <div className="product-image width-80 center-x m-l-">
          <img src={image} alt="" className="img-responsive" />
        </div>
        <div className="product-details m-l-4">
          <div className="textbox">
            <div className="title is-3">
              <div className="m-dw-1 is-5">{title}</div>
            </div>
            <div className="semibold flex-row space-between align-center is-light is-3">
              <span className="m-r-4">{author}</span>
              <p
                className="br-1 m-y-0 product-listing-rating"
                style={ratingStarColor(rating)}
              >
                {rating} | {showRatingStars(rating)}
              </p>{" "}
            </div>

            <div className="CTA-text is-4 m-up-3">
              ₹{price}{" "}
              <span className="is-light is-3 regular strike">
                ₹{originalPrice}
              </span>
              <span className="is-blue m-l-1 is-3">
                ({discountPercentageCalc(price, originalPrice)}% off)
              </span>
            </div>
            <p className="text m-y-0">
              <i className="fa-solid fa-truck m-r-1" />
              Free delivery available
            </p>
            <p className="text m-y-0">
              <i className="fa-solid fa-calendar-check m-r-1" /> Currently in
              stock
            </p>
            <p className="text m-y-0">
              <i className="fa-solid fa-bag-shopping m-r-1" /> Pay on delivery
            </p>
            <p className="text is-dark">{description}</p>
            <div className="btn-horizontal btn-horizontal-responsive m-up-4 center- width-80">
              <AddToCartProductListing
                classes={"btn-primary m-r-2 width-50 btn-w-icon btn-medium"}
                product={productData}
                setLoading={setPageLoading}
              />
              <AddToWishlistSingleProductPage product={productData} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export { SingleProductPage };
