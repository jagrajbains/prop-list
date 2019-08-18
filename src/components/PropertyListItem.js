import React from "react";
import { Link } from "react-router-dom";

const PropertyListItem = ({ id, title, description, amount, rating }) => (
  <div>
    <Link to={`/edit/${id}`}>
      <h4>{title}</h4>
    </Link>
    <p>{description}</p>
    <p>Amount: ₹{amount}</p>
    <p>Rating: {rating}</p>
  </div>
);

export default PropertyListItem;
