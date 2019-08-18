import database from "../firebase/firebase";
//ADD_PROPERTY
export const addProperty = property => ({
  type: "ADD_PROPERTY",
  property
});
export const startAddProperty = (propertyData = {}) => {
  return dispatch => {
    const {
      title = "",
      description = "",
      amount = 0,
      rating = 0
    } = propertyData;
    const property = { title, description, amount, rating };
    database
      .ref("properties")
      .push(property)
      .then(ref => {
        dispatch(
          addProperty({
            id: ref.key,
            ...property
          })
        );
      });
  };
};
//EDIT_PROPERTY
export const editProperty = (id, updates) => ({
  type: "EDIT_PROPERTY",
  id,
  updates
});
//REMOVE_PROPERTY
export const removeProperty = ({ id } = {}) => ({
  type: "REMOVE_PROPERTY",
  id
});

//START_REMOVE_PROPERTY
export const startRemoveProperty = ({ id } = {}) => {
  return dispatch => {
    return database
      .ref(`properties/${id}`)
      .remove()
      .then(() => {
        dispatch(removeProperty({ id }));
      });
  };
};

//SET_PROPERTIES
export const setProperties = properties => ({
  type: "SET_PROPERTIES",
  properties
});

//START_SET_PROPERTIES
export const startSetProperties = () => {
  return dispatch => {
    return database
      .ref("properties")
      .once("value")
      .then(snapshot => {
        const properties = [];
        snapshot.forEach(childSnapshot => {
          properties.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setProperties(properties));
      });
  };
};
