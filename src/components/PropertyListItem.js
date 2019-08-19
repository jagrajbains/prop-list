import React from "react";
import { Link } from "react-router-dom";

const PropertyListItem = ({ id, title, description, amount, rating, url }) => (
  <Link to={`/view/${id}`}>
    <div className="card small">
      <div className="card-image">
        <img src={url} alt="Property" height="200" width="300" />

        <h4 className="card-title">{title}</h4>
      </div>
      <div className="card-content">
        <p>{description}</p>
        <p>Amount: ₹{amount}</p>
        <p>Rating: {rating}</p>
      </div>
    </div>
  </Link>
);

export default PropertyListItem;
