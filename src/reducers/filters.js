const filterReducerDefaultState = {
  text: "",
  sortBy: "amount"
};

export default (state = filterReducerDefaultState, action) => {
  switch (action.type) {
    case "SET_TEXT_FILTER":
      return { ...state, text: action.text };
    case "SORT_BY_AMOUNT":
      return { ...state, sortBy: "amount" };
    case "SORT_BY_RATING":
      return { ...state, sortBy: "rating" };
    default:
      return state;
  }
};
