import React from "react";
import PropertyForm from "./PropertyForm";
import { connect } from "react-redux";
import { startAddProperty } from "../actions/properties";

export class AddPropertyPage extends React.Component {
  onSubmit = property => {
    this.props.startAddProperty(property);
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <h1>Add New Property</h1>
        <PropertyForm onSubmit={this.onSubmit} />
      </div>
    );
  }
}

const mapDispatchToProps = dispatch => ({
  startAddProperty: property => dispatch(startAddProperty(property))
});

export default connect(
  undefined,
  mapDispatchToProps
)(AddPropertyPage);
