import React from "react";

const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "API_DATA":
      return { ...filterState, products: action.value };
    case "LOW_TO_HIGH":
      return { ...filterState, filters: { sort: "LOW_TO_HIGH" } };
    case "HIGH_TO_LOW":
      return { ...filterState, filters: { sort: "HIGH_TO_LOW" } };
  }
};

export { filterReducer };
