import axios from "axios";

const getProductsData = async (dispatch) => {
  const response = await axios.get("/api/products");
  dispatch({ type: "API_DATA", value: response.data.products });
};

export { getProductsData };
