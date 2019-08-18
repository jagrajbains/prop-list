import React from "react";
import { connect } from "react-redux";
import PropertyForm from "./PropertyForm";
import { editProperty, startRemoveProperty } from "../actions/properties";

class EditPropertyPage extends React.Component {
  onRemove = () => {
    this.props.startRemoveProperty({ id: this.props.property.id });
    this.props.history.push("/");
  };
  render() {
    return (
      <div>
        <PropertyForm
          property={this.props.property}
          onSubmit={property => {
            this.props.dispatch(editProperty(this.props.property.id, property));
            this.props.history.push("/");
          }}
        />
        <button onClick={this.onRemove}>Remove</button>
      </div>
    );
  }
}

const mapStateToProps = (state, props) => {
  return {
    property: state.properties.find(
      property => property.id === props.match.params.id
    )
  };
};

const mapDispatchToProps = dispatch => {
  return {
    startRemoveProperty: data => dispatch(startRemoveProperty(data))
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(EditPropertyPage);
