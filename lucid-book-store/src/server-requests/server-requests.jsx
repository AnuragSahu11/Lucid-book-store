import { getHeader } from "../utility";
import axios from "axios";
import { reducerAction } from "../utility/constants";

const addToWishlistApiMethod = async (product, token, dispatch) => {
  const response = await axios.post(
    "/api/user/wishlist",
    { product: product },
    getHeader(token)
  );
  dispatch({ type: reducerAction.updateWishlist, value: response.data.wishlist });
};

const addToCartApiMethod = async (product, token, dispatch) => {
  const response = await axios.post(
    "/api/user/cart",
    { product: product },
    getHeader(token)
  );
  dispatch({ type: reducerAction.updateCart, value: response.data.cart });
};

const removeFromWishlistApiMethod = async (id, token, dispatch) => {
  const response = await axios.delete(
    `/api/user/wishlist/${id}`,
    getHeader(token)
  );
  dispatch({ type: reducerAction.updateWishlist, value: response.data.wishlist });
};

const removeFromCartApiMethod = async (id, token, dispatch) => {
  const response = await axios.delete(`/api/user/cart/${id}`, getHeader(token));
  dispatch({ type: reducerAction.updateCart, value: response.data.cart });
};

const increaseQtyApiMethod = async (id, token, dispatch) => {
  const response = await axios.post(
    `/api/user/cart/${id}`,
    {
      action: { type: "increment" },
    },
    getHeader(token)
  );
  dispatch({ type: reducerAction.updateCart, value: response.data.cart });
};

const decreaseQtyApiMethod = async (id, token, dispatch) => {
  const response = await axios.post(
    `/api/user/cart/${id}`,
    {
      action: { type: "decrement" },
    },
    getHeader(token)
  );
  dispatch({ type: reducerAction.updateCart, value: response.data.cart });
};

const getProductsData = async (dispatch) => {
  try {
    const response = await axios.get("/api/products");
    dispatch({ type: reducerAction.apiData, value: response.data.products });
  } catch (err) {
    console.log(err);
  }
};

export {
  addToWishlistApiMethod,
  addToCartApiMethod,
  removeFromCartApiMethod,
  removeFromWishlistApiMethod,
  increaseQtyApiMethod,
  decreaseQtyApiMethod,
  getProductsData
};
