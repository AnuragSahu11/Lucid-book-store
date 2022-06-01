const checkInList = (arr, id) => {
  return arr.reduce((acc, curr) => {
    if (!acc) {
      return curr.id === id;
    }
    return acc;
  }, false);
};

const getYesterdaysDate = () => {
  let date = new Date();
  date.setDate(date.getDate() - 1);
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
};

const getTodaysDate = () => {
  let date = new Date();
  date.setDate(date.getDate());
  return (
    date.getDate() + "/" + (date.getMonth() + 1) + "/" + date.getFullYear()
  );
};

export { checkInList, getYesterdaysDate, getTodaysDate };
