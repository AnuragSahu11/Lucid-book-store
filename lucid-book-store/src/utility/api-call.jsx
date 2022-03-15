import React from "react";
import axios from "axios";
import { useFilter } from "../context/filter-context";

const getApiData = async () => {
  console.log("hello");
  const { filterState, dispatch } = useFilter();
  const response = await axios.get("/api/products");
  dispatch({ type: "API_DATA", value: response.data.products });
  console.log(filterState);
};

export { getApiData };
