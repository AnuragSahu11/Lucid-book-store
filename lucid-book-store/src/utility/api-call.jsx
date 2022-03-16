import axios from "axios";

const getProductsData = async (dispatch) => {
  try {
    const response = await axios.get("/api/products");
    dispatch({ type: "API_DATA", value: response.data.products });
  } catch (err) {
    console.log(err);
  }
};

export { getProductsData };
