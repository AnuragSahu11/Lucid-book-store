import React from "react";

const filterReducer = (filterState, action) => {
  switch (action.type) {
    case "API_DATA":
      return { ...filterState, products: action.value };
    case "LOW_TO_HIGH":
      return { ...filterState, filters: { sort: "LOW_TO_HIGH" } };
    case "HIGH_TO_LOW":
      return { ...filterState, filters: { sort: "HIGH_TO_LOW" } };
    case "CATEGORY_STOCK":
      if (action.value) {
        console.log(action.value);
        return {
          ...filterState,
          filters: {
            ...filterState.filters,
            category: [...filterState.filters.category, "Stocks"],
          },
        };
      }
      if (!action.value) {
        console.log("in here");
        return {
          ...filterState,
          filters: {
            ...filterState,
            category: [...filterState.filters.category].filter(
              (item) => !(item === "Stocks")
            ),
          },
        };
      }
  }
};

export { filterReducer };

// if (!action.value) {
//   return {
//     ...filterState,
//     filters: {
//       ...filterState.filters,
//       category: filterState.filters.category.filter(
//         (item) => !(item === "Stocks")
//       ),
//     },
//   };
// }
// if (action.value) {
//   return {
//     ...filterState,
//     filters: {
//       ...filterState.filters,
//       category: filterState.filters.category.push("Stocks"),
//     },
//   };
// }
