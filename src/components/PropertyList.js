import React from "react";
import { connect } from "react-redux";
import PropertyListItem from "./PropertyListItem";
import selectProperties from "../selectors/properties";

const PropertyList = props => (
  <div>
    <h1>Property List</h1>
    {props.properties.map(property => (
      <PropertyListItem key={property.id} {...property} />
    ))}
  </div>
);

const mapStateToProps = state => ({
  properties: selectProperties(state.properties, state.filters)
});

export default connect(mapStateToProps)(PropertyList);
