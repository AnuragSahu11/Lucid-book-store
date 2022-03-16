import React from "react";

const categoryFilter = (actionValue, filterState, category) => {
  if (actionValue) {
    return {
      ...filterState,
      filters: {
        ...filterState.filters,
        category: [...filterState.filters.category, category],
      },
    };
  }
  if (!actionValue) {
    return {
      ...filterState,
      filters: {
        ...filterState.filters,
        category: [...filterState.filters.category].filter(
          (item) => !(item === category)
        ),
      },
    };
  }
};

const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "API_DATA":
      return { ...filterState, products: action.value };
    case "LOW_TO_HIGH":
      return {
        ...filterState,
        filters: { ...filterState.filters, sort: "LOW_TO_HIGH" },
      };
    case "HIGH_TO_LOW":
      return {
        ...filterState,
        filters: { ...filterState.filters, sort: "HIGH_TO_LOW" },
      };
    case "CATEGORY_STOCKS":
      return categoryFilter(action.value, filterState, "Stocks");
    case "CATEGORY_FOREX":
      return categoryFilter(action.value, filterState, "Forex");
    case "CATEGORY_CRYPTO":
      return categoryFilter(action.value, filterState, "Crypto");
    case "CATEGORY_CHARTING":
      return categoryFilter(action.value, filterState, "Charting");
    case "CATEGORY_BIOGRAPHY":
      return categoryFilter(action.value, filterState, "Biography");
    case "RANGE":
      return {
        ...filterState,
        filters: { ...filterState.filters, range: action.value },
      };
    case "RATING":
      return {
        ...filterState,
        filters: { ...filterState.filters, rating: action.value },
      };
    case "CLEAR_FILTER":
      return {
        ...filterState,
        filters: {
          sort: "",
          category: [],
          range: 0,
          rating: 0,
        },
      };
    default:
      return { ...filterState };
  }
};

export { filterReducer };
