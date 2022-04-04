const showRatingStars = (rating) => {
  return [...Array(rating)].map((item, i) => (
    <i key={i} className="fas is-3 fa-star"></i>
  ));
};
const ratingStarColor = (rating) => {
  switch (rating) {
    case 5:
      return { color: "#26b539" };
    case 4:
      return { color: "#87d44a" };
    case 3:
      return { color: "#fead37" };
    case 2:
      return { color: "#fa6837" };
    case 1:
      return { color: "#ea2126" };
  }
};

export { showRatingStars, ratingStarColor };
