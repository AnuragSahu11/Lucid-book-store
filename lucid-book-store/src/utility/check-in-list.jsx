const checkInList = (arr, id) => {
  return arr.reduce((acc, curr) => {
    if (!acc) {
      return curr.id === id;
    }
    return acc;
  }, false);
};

export { checkInList };


