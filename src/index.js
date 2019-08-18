import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import "./index.css";
import configureStore from "./store/configureStore";
import AppRouter from "./routers/AppRouter";
import { startSetProperties } from "./actions/properties";

const store = configureStore();

const jsx = (
  <Provider store={store}>
    <AppRouter />
  </Provider>
);

ReactDOM.render(<p>Loading...</p>, document.getElementById("root"));

store.dispatch(startSetProperties()).then(() => {
  ReactDOM.render(jsx, document.getElementById("root"));
});
