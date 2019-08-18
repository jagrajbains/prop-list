import React from "react";
import { NavLink } from "react-router-dom";

const Header = () => (
  <div>
    <h1>Prop-List</h1>
    <NavLink activeClassName="is-active" exact={true} to="/">
      Home
    </NavLink>
    <NavLink activeClassName="is-active" to="/create">
      Create Property
    </NavLink>
  </div>
);

export default Header;
