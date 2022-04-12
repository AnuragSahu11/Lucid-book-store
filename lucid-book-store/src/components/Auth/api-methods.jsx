import { getHeader } from "../../utility";
import axios from "axios";

const addToWishlistApiMethod = async (product, token, dispatch) => {
  const response = await axios.post(
    "/api/user/wishlist",
    { product: product },
    getHeader(token)
  );
  dispatch({ type: "UPDATE_WISHLIST", value: response.data.wishlist });
};

const addToCartApiMethod = async (product, token, dispatch) => {
  const response = await axios.post(
    "/api/user/cart",
    { product: product },
    getHeader(token)
  );
  dispatch({ type: "UPDATE_CART", value: response.data.cart });
};

const removeFromWishlistApiMethod = async (id, token, dispatch) => {
  const response = await axios.delete(
    `/api/user/wishlist/${id}`,
    getHeader(token)
  );
  dispatch({ type: "UPDATE_WISHLIST", value: response.data.wishlist });
};

const removeFromCartApiMethod = async (id, token, dispatch) => {
  const response = await axios.delete(`/api/user/cart/${id}`, getHeader(token));
  dispatch({ type: "UPDATE_CART", value: response.data.cart });
};

const increaseQtyApiMethod = async (id, token, dispatch) => {
  const response = await axios.post(
    `/api/user/cart/${id}`,
    {
      action: { type: "increment" },
    },
    getHeader(token)
  );
  dispatch({ type: "UPDATE_CART", value: response.data.cart });
};

const decreaseQtyApiMethod = async (id, token, dispatch) => {
  const response = await axios.post(
    `/api/user/cart/${id}`,
    {
      action: { type: "decrement" },
    },
    getHeader(token)
  );
  dispatch({ type: "UPDATE_CART", value: response.data.cart });
};

export {
  addToWishlistApiMethod,
  addToCartApiMethod,
  removeFromCartApiMethod,
  removeFromWishlistApiMethod,
  increaseQtyApiMethod,
  decreaseQtyApiMethod,
};
