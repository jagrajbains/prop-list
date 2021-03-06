import React from "react";
import PropertyList from "./PropertyList";
import PropertyListFilters from "./PropertyListFilters";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startSetProperties } from "../actions/properties";

class Dashboard extends React.Component {
  componentDidMount() {
    this.props.startSetProperties();
  }
  render() {
    return (
      <div className="container">
        {this.props.isAuthenticated && (
          <Link
            className="btn blue-grey darken-4"
            to={`/MyDashboard/${this.props.uid}`}
          >
            Go To Your Dashboard
          </Link>
        )}
        <div className="row">
          <div className="col s2" style={{ marginTop: "25px" }}>
            <PropertyListFilters />
          </div>
          <div className="col s10">
            <PropertyList />
          </div>
          <div className="fixed-action-btn">
            {this.props.isAuthenticated && (
              <Link to="/create" className="btn-floating btn-large red">
                <i className="material-icons">add</i>
              </Link>
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid,
  uid: state.auth.uid
});

const mapDispatchToProps = dispatch => {
  return {
    startSetProperties: () => dispatch(startSetProperties())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Dashboard);
