import logo from "../components/navbar/logo.png";

const payment = async () => {
  const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

  const options = {
    key: "rzp_test_1DkvrVVAyqheiz",
    amount: 10000,
    currency: "INR",
    name: "Lucid Book Store",
    description: "Payment for your order",
    image: logo,
    handler: function (response) {
      //   const order = {
      //     paymentId: response?.razorpay_payment_id,
      //     orderId: uuid(),
      //     amountPaid: totalAmount,
      //     orderedProducts: [...productsInCart],
      //     deliveryAddress: {},
      //   };
    },
    prefill: {
      name: "Gaurav Kumar",
      email: "gaurav.kumar@example.com",
      contact: "9999999999",
    },
    theme: {
      color: "#3d53f6",
    },
  };

  const paymentObject = new window.Razorpay(options);
  paymentObject.open();
};

const loadScript = async (src) => {
  return new Promise((resolve) => {
    const script = document.createElement("script");
    script.src = src;
    script.onload = () => {
      resolve(true);
    };
    script.onerror = () => {
      resolve(false);
    };
    document.body.appendChild(script);
  });
};

export { payment };
