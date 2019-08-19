import React from "react";
import { connect } from "react-redux";
import { setTextFilter, sortByAmount, sortByRating } from "../actions/filters";

const PropertyListFilters = props => (
  <div>
    <input
      type="text"
      value={props.filters.text}
      onChange={e => {
        props.dispatch(setTextFilter(e.target.value));
      }}
    />
    <select
      value={props.filters.sortBy}
      onChange={e => {
        if (e.target.value === "amount") {
          props.dispatch(sortByAmount());
        } else if (e.target.value === "rating") {
          props.dispatch(sortByRating());
        }
      }}
      className="browser-default"
    >
      <option value="amount">Amount</option>
      <option value="rating">Rating</option>
    </select>
  </div>
);

const mapStateToProps = state => ({
  filters: state.filters
});

export default connect(mapStateToProps)(PropertyListFilters);
