import { useNavigate } from "react-router-dom";

const OrderList = ({ productData }) => {
  const navigate = useNavigate();
  const { title, author, image, id, qty } = productData;
  const goToProductPage = () => {
    navigate(`/productListing/${id}`);
  };
  return (
    <div
      onClick={goToProductPage}
      className="card cart-card order-list card-horizontal elevated "
    >
      <div className="card-head">
        <div className="card-image">
          <img src={image} alt="card image" className="card-image-img" />
        </div>
      </div>
      <div className="card-body ">
        <div className="textbox">
          <div className="title semibold is-3">{title} </div>
          <div className="subtitle m-y-0 flex-row regular space-between align-center is-2 width-100">
            <p>{author}</p>
            <p className="semibold">Qty - {qty} </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export { OrderList };
