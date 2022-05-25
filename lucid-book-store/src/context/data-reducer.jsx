import { reducerAction } from "../utility/constants";

const dataReducer = (dataState, action) => {
  switch (action.type) {
    case reducerAction.apiData:
      return { ...dataState, products: action.value };
    case reducerAction.sortLowToHigh:
      return {
        ...dataState,
        filters: { ...dataState.filters, sort: "LOW_TO_HIGH" },
      };
    case reducerAction.sortHighToLow:
      return {
        ...dataState,
        filters: { ...dataState.filters, sort: "HIGH_TO_LOW" },
      };
    case reducerAction.categoryStocks:
      return categoryFilter(action.value, dataState, "Stocks");
    case reducerAction.categoryForex:
      return categoryFilter(action.value, dataState, "Forex");
    case reducerAction.categoryCrypto:
      return categoryFilter(action.value, dataState, "Crypto");
    case reducerAction.categoryCharting:
      return categoryFilter(action.value, dataState, "Charting");
    case reducerAction.categoryInvestment:
      return categoryFilter(action.value, dataState, "Investment");
    case reducerAction.selectRange:
      return {
        ...dataState,
        filters: { ...dataState.filters, range: action.value },
      };
    case reducerAction.selectRating:
      return {
        ...dataState,
        filters: { ...dataState.filters, rating: action.value },
      };
    case reducerAction.clearFilter:
      return {
        ...dataState,
        filters: {
          sort: "",
          category: [],
          range: 0,
          rating: 0,
        },
      };
    case reducerAction.updateCart:
      return { ...dataState, cart: [...action.value] };
    case reducerAction.updateWishlist:
      return { ...dataState, wishlist: [...action.value] };
    case reducerAction.clearCartWishlist:
      return { ...dataState, wishlist: [], cart: [] };
    case reducerAction.cartAndWishlistData:
      return {
        ...dataState,
        wishlist: [...action.value.wishlist],
        cart: [...action.value.cart],
      };
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
