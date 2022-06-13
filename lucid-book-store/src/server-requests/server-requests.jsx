import axios from "axios";
import { toast } from "react-toastify";
import { reducerAction } from "../utility/constants";
import { getHeader } from "./request-header";

const addToWishlistApiMethod = async (product, token, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/wishlist",
      { product: product },
      getHeader(token)
    );
    dispatch({
      type: reducerAction.UPDATE_WISHLIST,
      value: response.data.wishlist,
    });
    toast.info("Added to wishlist");
  } catch (err) {
    toast.error("Add to wishlist failed");
  }
};

const addToCartApiMethod = async (product, token, dispatch) => {
  try {
    const response = await axios.post(
      "/api/user/cart",
      { product: product },
      getHeader(token)
    );
    dispatch({ type: reducerAction.UPDATE_CART, value: response.data.cart });
    toast.info("Added to Cart");
  } catch (err) {
    toast.error("Add to cart failed");
  }
};

const removeFromWishlistApiMethod = async (id, token, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/wishlist/${id}`,
      getHeader(token)
    );
    dispatch({
      type: reducerAction.UPDATE_WISHLIST,
      value: response.data.wishlist,
    });
    toast.info("Removed from wishlist");
  } catch (err) {
    toast.error("Failed to remove from wishlist");
  }
};

const removeFromCartApiMethod = async (id, token, dispatch) => {
  try {
    const response = await axios.delete(
      `/api/user/cart/${id}`,
      getHeader(token)
    );
    dispatch({ type: reducerAction.UPDATE_CART, value: response.data.cart });
    toast.info("Removed from Cart");
  } catch (err) {
    toast.error("Failed to remove from Cart");
  }
};

const increaseQtyApiMethod = async (id, token, dispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: { type: "increment" },
      },
      getHeader(token)
    );
    dispatch({ type: reducerAction.UPDATE_CART, value: response.data.cart });
    toast.info("Quantity Increased");
  } catch (err) {
    toast.error("Operation failed");
  }
};

const decreaseQtyApiMethod = async (id, token, dispatch) => {
  try {
    const response = await axios.post(
      `/api/user/cart/${id}`,
      {
        action: { type: "decrement" },
      },
      getHeader(token)
    );
    dispatch({ type: reducerAction.UPDATE_CART, value: response.data.cart });
    toast.info("Quantity Decreased");
  } catch (err) {
    toast.error("Operation failed");
  }
};

const getProductsData = async (dispatch) => {
  try {
    const response = await axios.get("/api/products");
    dispatch({ type: reducerAction.API_DATA, value: response.data.products });
  } catch (err) {
    console.error(err);
  }
};

const getUserAddress = async (token, dispatch) => {
  try {
    const { data } = await axios.get("/api/user/address", getHeader(token));
    dispatch({ type: reducerAction.UPDATE_ADDRESS, value: data.address });
  } catch (err) {}
};

const addAddress = async (addressData, token, dispatch) => {
  try {
    const { data } = await axios.post(
      "/api/user/address",
      {
        address: addressData,
      },
      getHeader(token)
    );
    dispatch({ type: reducerAction.UPDATE_ADDRESS, value: data.address });
    let addedAddress = data.address.filter((address) => {
      return (
        address.name === addressData.name &&
        address.street === addressData.street
      );
    })[0];
    dispatch({
      type: reducerAction.CHANGE_DEFAULT_ADDRESS,
      value: addedAddress._id,
    });
    toast.success("Address Added");
  } catch (err) {
    toast.error("Add Address failed");
  }
};

const deleteAddress = async (addressID, token, dispatch) => {
  try {
    const { data } = await axios.delete(
      `api/user/address/${addressID}`,
      getHeader(token)
    );
    dispatch({ type: reducerAction.UPDATE_ADDRESS, value: data.address });
    toast.info("Address Deleted");
  } catch (err) {
    toast.info("Address Delete Failed");
  }
};

const updateAddress = async (addressID, addressData, token, dispatch) => {
  try {
    const { data } = await axios.post(
      `api/user/address/${addressID}`,
      {
        address: addressData,
      },
      getHeader(token)
    );
    dispatch({ type: reducerAction.UPDATE_ADDRESS, value: data.address });
    toast.info("Address Updated");
  } catch (err) {
    toast.error("Address Update failed");
  }
};

export {
  addToWishlistApiMethod,
  addToCartApiMethod,
  removeFromCartApiMethod,
  removeFromWishlistApiMethod,
  increaseQtyApiMethod,
  decreaseQtyApiMethod,
  getProductsData,
  getUserAddress,
  addAddress,
  deleteAddress,
  updateAddress,
};
