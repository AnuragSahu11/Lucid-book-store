const sortProducts = ({ filters, products }) => {
  const sortedProducts = [...products];
  filters.sort === "LOW_TO_HIGH" &&
    sortedProducts.sort((a, b) => a.price - b.price);
  filters.sort === "HIGH_TO_LOW" &&
    sortedProducts.sort((a, b) => b.price - a.price);
  return sortedProducts;
};
export { sortProducts };
