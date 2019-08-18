//SET_TEXT_FILTER
export const setTextFilter = (text = "") => ({
  type: "SET_TEXT_FILTER",
  text
});
//SORT_BY_AMOUNT
export const sortByAmount = () => ({
  type: "SORT_BY_AMOUNT"
});
//SORT_BY_RATING
export const sortByRating = () => ({
  type: "SORT_BY_RATING"
});
