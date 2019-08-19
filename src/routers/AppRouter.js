import React from "react";
import { Router, Route, Switch } from "react-router-dom";
import createHistory from "history/createBrowserHistory";
import Dashboard from "../components/Dashboard";
import AddPropertyPage from "../components/AddPropertyPage";
import EditPropertyPage from "../components/EditPropertyPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import ViewPropertyPage from "../components/ViewPropertyPage";
import PrivateRoute from "./PrivateRoute";
import MyDashboard from "../components/MyDashboard";

export const history = createHistory();

const AppRouter = () => (
  <Router history={history}>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <PrivateRoute path="/create" component={AddPropertyPage} />
        <PrivateRoute path="/edit/:id" component={EditPropertyPage} />
        <PrivateRoute path="/myDashboard/:uid" component={MyDashboard} />
        <Route path="/view/:id" component={ViewPropertyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </Router>
);

export default AppRouter;
