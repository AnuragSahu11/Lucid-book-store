const filterByCategory = ({ filters, products }, sortedProducts) => {
  const filteredProducts = [...sortedProducts];
  if (filters.category.length > 0)
    return filteredProducts.filter((item) =>
      filters.category.includes(item.categoryName)
    );
  return filteredProducts;
};
const filterByPrice = ({ filters, products }, sortedProducts) => {
  const filteredProducts = [...sortedProducts];
  if (filters.range > 0) {
    return filteredProducts.filter((item) => item.price < filters.range);
  }
  return filteredProducts;
};
const filterByRating = ({ filters, products }, sortedProducts) => {
  const filteredProducts = [...sortedProducts];
  if (filters.rating) {
    return filteredProducts.filter((item) => item.rating >= filters.rating);
  }
  return filteredProducts;
};
export { filterByCategory, filterByPrice, filterByRating };
