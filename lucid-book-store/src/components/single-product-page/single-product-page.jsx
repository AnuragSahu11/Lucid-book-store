import { useParams } from "react-router-dom";
import { useFilter } from "../../context/filter-context";
import { AddToCartProductListing } from "../cart-wishlist/cart-operations";
import { AddToWishlistLarge } from "../cart-wishlist/wishlist-operations";

const SingleProductPage = () => {
  const { filterState } = useFilter();
  let { productId } = useParams();
  const findProductData = (productId) => {
    return filterState.products.find(({ id }) => productId === id);
  };
  const productData = findProductData(productId);
  const { title, author, price, rating, image, description } =
    findProductData(productId);
  return (
    <div className="product p-x-2 p-y-6 br-3 elevated li-shadow elevate-1 m-up-6 width-80 center-x grid-30-70">
      <div className="product-image width-80 center-x m-l-">
        <img src={image} alt="" className="img-responsive" />
      </div>
      <div className="product-details m-l-4">
        <div className="textbox">
          <div className="title is-3">
            <div className="m-dw-1 is-5">{title}</div>
          </div>
          <div className="title semibold is-light is-3">{author}</div>

          <div className="CTA-text is-4 m-up-3">
            ₹{price} <span className="is-light is-3 regular strike">$50</span>
            <span className="is-blue is-3">(10% off)</span>
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
            {/* <button className="btn-primary m-r-2 width-50 btn-w-icon btn-medium">
              <i className="fas fa-shopping-cart" />
              Buy Now
            </button> */}
            <AddToCartProductListing
              classes={"btn-primary m-r-2 width-50 btn-w-icon btn-medium"}
              product={productData}
            />
            <AddToWishlistLarge
              classes={"btn-secondary width-50 btn-medium"}
              product={productData}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export { SingleProductPage };
