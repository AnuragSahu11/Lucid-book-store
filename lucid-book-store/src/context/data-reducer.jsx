import { reducerAction } from "../utility/constants";

const dataReducer = (dataState, action) => {
  switch (action.type) {
    case reducerAction.API_DATA:
      return { ...dataState, products: action.value };
    case reducerAction.SORT_LOW_TO_HIGH:
      return {
        ...dataState,
        filters: { ...dataState.filters, sort: "LOW_TO_HIGH" },
      };
    case reducerAction.SORT_HIGH_TO_LOW:
      return {
        ...dataState,
        filters: { ...dataState.filters, sort: "HIGH_TO_LOW" },
      };
    case reducerAction.CATEGORY_STOCKS:
      return categoryFilter(action.value, dataState, "Stocks");
    case reducerAction.CATEGORY_FOREX:
      return categoryFilter(action.value, dataState, "Forex");
    case reducerAction.CATEGORY_CRYPTO:
      return categoryFilter(action.value, dataState, "Crypto");
    case reducerAction.CATEGORY_CHARTING:
      return categoryFilter(action.value, dataState, "Charting");
    case reducerAction.CATEGORY_INVESTMENT:
      return categoryFilter(action.value, dataState, "Investment");
    case reducerAction.SELECT_RANGE:
      return {
        ...dataState,
        filters: { ...dataState.filters, range: action.value },
      };
    case reducerAction.SELECT_RATING:
      return {
        ...dataState,
        filters: { ...dataState.filters, rating: action.value },
      };
    case reducerAction.CLEAR_FILTER:
      return {
        ...dataState,
        filters: {
          sort: "",
          category: [],
          range: 0,
          rating: 0,
        },
      };
    case reducerAction.UPDATE_CART:
      return { ...dataState, cart: [...action.value] };
    case reducerAction.UPDATE_WISHLIST:
      return { ...dataState, wishlist: [...action.value] };
    case reducerAction.CLEAR_CART_WISHLIST:
      return { ...dataState, wishlist: [], cart: [] };
    case reducerAction.LOGIN_USER_DATA:
      return {
        ...dataState,
        wishlist: [...action.value.wishlist],
        cart: [...action.value.cart],
        address: [...action.value.address],
      };
    case reducerAction.UPDATE_ADDRESS:
      return {
        ...dataState,
        address: [...action.value],
      };
    case reducerAction.CHANGE_DEFAULT_ADDRESS:
      return {
        ...dataState,
        defaultAddress: action.value,
      };
    case reducerAction.ADD_ORDER:
      return { ...dataState, orders: [...dataState.orders, action.value] };
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
