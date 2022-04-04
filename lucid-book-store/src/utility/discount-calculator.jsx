const discountPercentateCalc = (price, originalPrice) => {
  return Math.round(100 - (price / originalPrice) * 100);
};

export { discountPercentateCalc };
