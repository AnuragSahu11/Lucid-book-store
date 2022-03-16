const compose =
  ({ ...functions }) =>
  (filters, products) => {
    return functions.reduce((acc, curr) => curr(filters, acc), []);
  };

export { compose };
