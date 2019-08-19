const propertyReducerDefaultState = [];
export default (state = propertyReducerDefaultState, action) => {
  switch (action.type) {
    case "ADD_PROPERTY":
      return [...state, action.property];
    case "REMOVE_PROPERTY":
      return state.filter(({ id }) => id !== action.id);
    case "EDIT_PROPERTY":
      return state.map(property => {
        if (property.id === action.id) {
          return { ...property, ...action.updates };
        } else {
          return property;
        }
      });
    case "SET_PROPERTIES":
      return action.properties;
    case "SET_DASHBOARD":
      return action.properties;
    default:
      return state;
  }
};
