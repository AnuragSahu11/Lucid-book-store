const getHeader = (token) => {
  return { headers: { authorization: token } };
};

export { getHeader };
