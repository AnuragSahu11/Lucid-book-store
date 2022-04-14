const dataReducer = (dataState, action) => {
  switch (action.type) {
    case "API_DATA":
      return { ...dataState, products: action.value };
    case "LOW_TO_HIGH":
      return {
        ...dataState,
        filters: { ...dataState.filters, sort: "LOW_TO_HIGH" },
      };
    case "HIGH_TO_LOW":
      return {
        ...dataState,
        filters: { ...dataState.filters, sort: "HIGH_TO_LOW" },
      };
    case "CATEGORY_STOCKS":
      return categoryFilter(action.value, dataState, "Stocks");
    case "CATEGORY_FOREX":
      return categoryFilter(action.value, dataState, "Forex");
    case "CATEGORY_CRYPTO":
      return categoryFilter(action.value, dataState, "Crypto");
    case "CATEGORY_CHARTING":
      return categoryFilter(action.value, dataState, "Charting");
    case "CATEGORY_INVESTMENT":
      return categoryFilter(action.value, dataState, "Investment");
    case "RANGE":
      return {
        ...dataState,
        filters: { ...dataState.filters, range: action.value },
      };
    case "RATING":
      return {
        ...dataState,
        filters: { ...dataState.filters, rating: action.value },
      };
    case "CLEAR_FILTER":
      return {
        ...dataState,
        filters: {
          sort: "",
          category: [],
          range: 0,
          rating: 0,
        },
      };
    case "UPDATE_CART":
      return { ...dataState, cart: [...action.value] };
    case "UPDATE_WISHLIST":
      return { ...dataState, wishlist: [...action.value] };
    case "CLEAR_CART_WISHLIST":
      return { ...dataState, wishlist: [], cart: [] };
    default:
      return { ...dataState };
  }
};

const categoryFilter = (actionValue, dataState, category) => {
  if (actionValue) {
    return {
      ...dataState,
      filters: {
        ...dataState.filters,
        category: [...dataState.filters.category, category],
      },
    };
  }
  if (!actionValue) {
    return {
      ...dataState,
      filters: {
        ...dataState.filters,
        category: [...dataState.filters.category].filter(
          (item) => !(item === category)
        ),
      },
    };
  }
};

export { dataReducer };
