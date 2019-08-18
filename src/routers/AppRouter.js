import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import Dashboard from "../components/Dashboard";
import AddPropertyPage from "../components/AddPropertyPage";
import EditPropertyPage from "../components/EditPropertyPage";
import NotFoundPage from "../components/NotFoundPage";
import Header from "../components/Header";
import ViewPropertyPage from "../components/ViewPropertyPage";

const AppRouter = () => (
  <BrowserRouter>
    <div>
      <Header />
      <Switch>
        <Route path="/" component={Dashboard} exact={true} />
        <Route path="/create" component={AddPropertyPage} />
        <Route path="/view/:id" component={ViewPropertyPage} />
        <Route path="/edit/:id" component={EditPropertyPage} />
        <Route component={NotFoundPage} />
      </Switch>
    </div>
  </BrowserRouter>
);

export default AppRouter;
