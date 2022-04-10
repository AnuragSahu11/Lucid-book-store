import { getHeader } from "../../utility";
import axios from "axios";

const AddToWishlistApiMethod = async (product, token) => {
  const response = await axios.post(
    "/api/user/wishlist",
    { product: product },
    getHeader(token)
  );
};

const AddToCartApiMethod = async (product, token) => {
  const response = await axios.post(
    "/api/user/cart",
    { product: product },
    getHeader(token)
  );
};

const removeFromCartApiMethod = async (id, token) => {
  const response = await axios.delete(`/api/user/cart/${id}`, getHeader(token));
};

export { AddToWishlistApiMethod, AddToCartApiMethod, removeFromCartApiMethod };
