const compose =
  (...functions) =>
  (filters, products) => {
    return functions.reduce((acc, curr) => curr(filters, acc), products);
  };

export { compose };
