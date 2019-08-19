import React from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";

const ViewPropertyPage = props => (
  <div className="card large">
    <div className="card-image">
      <img src={props.property.url} alt="Property" />
      <h4 className="card-title">{props.property.title}</h4>
    </div>
    <div className="card-content">
      <p>{props.property.description}</p>
      <p>Amount: ₹{props.property.amount}</p>
      <p>Rating: {props.property.rating}</p>
    </div>
    <Link className="btn" to="/">
      Back
    </Link>
  </div>
);

const mapStateToProps = (state, props) => {
  return {
    property: state.properties.find(
      property => property.id === props.match.params.id
    )
  };
};

export default connect(mapStateToProps)(ViewPropertyPage);
