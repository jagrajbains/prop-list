import database from "../firebase/firebase";
//ADD_PROPERTY
export const addProperty = property => ({
  type: "ADD_PROPERTY",
  property
});
export const startAddProperty = (propertyData = {}) => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    const {
      title = "",
      description = "",
      amount = 0,
      rating = 0,
      url = ""
    } = propertyData;
    const property = { title, description, amount, rating, url };
    return database
      .ref(`users/${uid}/properties`)
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
      .ref("users")
      .once("value")
      .then(snapshot => {
        const arr = [];
        snapshot.forEach(childSnapshot => {
          arr.push(childSnapshot.val());
        });
        const objArr = [];
        arr.forEach(obj => {
          Object.entries(obj).forEach(([key, value]) => {
            objArr.push(value);
          });
        });
        const properties = [];
        objArr.forEach(obj => {
          Object.entries(obj).forEach(([key, value]) => {
            properties.push({
              id: key,
              ...value
            });
          });
        });
        dispatch(setProperties(properties));
      });
    // return database
    //   .ref("properties")
    //   .once("value")
    //   .then(snapshot => {
    //     const properties = [];
    //     snapshot.forEach(childSnapshot => {
    //       properties.push({
    //         id: childSnapshot.key,
    //         ...childSnapshot.val()
    //       });
    //     });
    //     dispatch(setProperties(properties));
    //   });
  };
};

//SET_MYDASHBOARD
export const setMyDashboard = properties => ({
  type: "SET_DASHBOARD",
  properties
});

//START_SET_MYDASHBOARD
export const startSetMyDashboard = () => {
  return (dispatch, getState) => {
    const uid = getState().auth.uid;
    return database
      .ref(`users/${uid}/properties`)
      .once("value")
      .then(snapshot => {
        const properties = [];
        snapshot.forEach(childSnapshot => {
          properties.push({
            id: childSnapshot.key,
            ...childSnapshot.val()
          });
        });
        dispatch(setMyDashboard(properties));
      });
  };
};
