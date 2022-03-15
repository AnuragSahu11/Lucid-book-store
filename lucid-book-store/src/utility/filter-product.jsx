const filterCategory = ({ filters, products }, sortedProducts) => {
  const filteredProducts = sortedProducts.filter((item) =>
    filters.category.includes(item.categoryName)
  );
  console.log(filteredProducts);
  return filteredProducts;
};

export { filterCategory };
