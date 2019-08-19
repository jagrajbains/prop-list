import React from "react";
import { connect } from "react-redux";
import PropertyListItemDashboard from "./PropertyListItemDashboard";
import selectProperties from "../selectors/properties";

const PropertyListDashboard = props => (
  <div>
    <h1>Property List</h1>
    {props.properties.map(property => (
      <PropertyListItemDashboard key={property.id} {...property} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  properties: selectProperties(state.properties, state.filters)
});

export default connect(mapStateToProps)(PropertyListDashboard);
