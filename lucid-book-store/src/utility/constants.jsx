import { getYesterdaysDate } from "./check-in-list";
const short = require("short-uuid");

export const demoCredentials = {
  email: "anurag@gmail.com",
  password: "anurag",
};

export const reducerAction = {
  API_DATA: "API_DATA",
  SORT_LOW_TO_HIGH: "LOW_TO_HIGH",
  SORT_HIGH_TO_LOW: "HIGH_TO_LOW",
  CATEGORY_STOCKS: "CATEGORY_STOCKS",
  CATEGORY_FOREX: "CATEGORY_FOREX",
  CATEGORY_CRYPTO: "CATEGORY_CRYPTO",
  CATEGORY_CHARTING: "CATEGORY_CHARTING",
  CATEGORY_INVESTMENT: "CATEGORY_INVESTMENT",
  SELECT_RANGE: "RANGE",
  SELECT_RATING: "RATING",
  CLEAR_FILTER: "CLEAR_FILTER",
  UPDATE_CART: "UPDATE_CART",
  UPDATE_WISHLIST: "UPDATE_WISHLIST",
  CLEAR_CART_WISHLIST: "CLEAR_CART_WISHLIST",
  LOGIN_USER_DATA: "LOGIN_API_DATA",
  UPDATE_ADDRESS: "UPDATE_ADDRESS",
  CHANGE_DEFAULT_ADDRESS: "CHANGE_DEFAULT_ADDRESS",
  ADD_ORDER: "ADD_ORDER",
};

export const demoOrder = {
  orderID: short.generate(),
  totalAmount: 3131,
  orderProducts: [
    {
      id: "stock3",
      qty: 1,
      title: "The Beginner's Stock",
      author: "Akash Patel ",
      price: "99",
      image:
        "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376991/Lucid%20book%20store/bookstock3_de3jig.jpg",
    },
    {
      id: "forex2",
      qty: 2,
      title: "Forex Trading",
      author: "Anderson Richard",
      price: "1516",
      image:
        "https://res.cloudinary.com/lucidui-cl-a/image/upload/v1648376989/Lucid%20book%20store/bookforex2_jgdaj1.webp",
    },
  ],
  date: getYesterdaysDate(),
  address: {
    _id: 1,
    name: "Anurag Sahu",
    street: "Block-7/B, street-22",
    city: "Raipur",
    state: "Chhattisgarh",
    country: "India",
    zipCode: "490002",
    mobile: "8962730146",
  },
};

export const initialInputFieldAddAddress = {
  street: "",
  city: "",
  state: "",
  zipCode: "",
  country: "India",
  name: "",
  mobile: "",
};

export const dummyAddress = {
  street: "Chandni Chowk, gali no. 12",
  city: "North Delhi",
  state: "New Delhi",
  zipCode: "110006",
  country: "India",
  name: "Sidhu Sharma",
  mobile: "9211138899",
};

export const largeLoader = {
  width: "42px",
  height: "42px",
};

export const mediumLoader = {
  width: "32px",
  height: "32px",
};

export const toastProps = {
  autoClose: 2000,
  hideProgressBar: true,
  closeOnClick: true,
  style: { fontSize: "1.5rem" },
  position: "top-center",
};
