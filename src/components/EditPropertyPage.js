import React from "react";
import { connect } from "react-redux";
import PropertyForm from "./PropertyForm";
import {
  editProperty,
  startRemoveProperty,
  startEditProperty
} from "../actions/properties";
import { Link } from "react-router-dom";

class EditPropertyPage extends React.Component {
  onSubmit = property => {
    this.props.startEditProperty(this.props.property.id, property);
    this.props.history.push(`/MyDashboard/${this.props.uid}`);
  };
  onRemove = () => {
    this.props.startRemoveProperty({ id: this.props.property.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div className="container">
        <PropertyForm property={this.props.property} onSubmit={this.onSubmit} />
        <button className="btn red" onClick={this.onRemove}>
          Remove
        </button>
        <Link
          className="btn orange right"
          to={`/MyDashboard/${this.props.uid}`}
        >
          Back
        </Link>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    property: state.properties.find(
      property => property.id === props.match.params.id
    ),
    uid: state.auth.uid
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRemoveProperty: data => dispatch(startRemoveProperty(data)),
    startEditProperty: (id, property) =>
      dispatch(startEditProperty(id, property))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPropertyPage);
