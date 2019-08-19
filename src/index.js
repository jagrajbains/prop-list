import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import configureStore from "./store/configureStore";
import AppRouter, { history } from "./routers/AppRouter";
import { startSetProperties } from "./actions/properties";
import "materialize-css"; // It installs the JS asset only
import "materialize-css/dist/css/materialize.min.css";
import { firebase } from "./firebase/firebase";
import { login, logout } from "./actions/auth";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

let hasRendered = false;
const renderApp = () => {
  if (!hasRendered) {
    ReactDOM.render(jsx, document.getElementById("root"));
    hasRendered = true;
  }
};

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

firebase.auth().onAuthStateChanged(user => {
  if (user) {
    store.dispatch(login(user.uid));
    store.dispatch(startSetProperties()).then(() => {
      renderApp();
    });
  } else {
    store.dispatch(logout());
    store.dispatch(startSetProperties()).then(() => {
      renderApp();
    });
    history.push("/");
  }
});
