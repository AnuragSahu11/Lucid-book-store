import { OrderList } from "../list/order-list";

const OrderCard = ({ orderData }) => {
  const {
    address: { name },
    orderID,
    totalAmount,
    date,
    orderProducts,
  } = orderData;
  return (
    <div
      // onClick={goToProductPage}
      className="card order-card border-grey m-dw-2 center-x cart-card width-100 card-horizontal align-left elevated flex-r-w"
    >
      <div className="order-card-status width-100 is-green semibold is-3">
        Order Successfull
      </div>
      <div className="order-card-id width-100 is-light is-2">{date}</div>
      <div className="order-card-id width-100 is-light is-2">
        order ID - {orderID}
      </div>
      <div className="order-card-id width-100 semibold is-2">
        Total - {totalAmount}
      </div>
      <div className="order-card-address width-100 is-2">{}</div>
      <div className="cart-body width-100">
        {orderProducts.map((product) => (
          <OrderList productData={product} />
        ))}
      </div>
    </div>
  );
};

export { OrderCard };
