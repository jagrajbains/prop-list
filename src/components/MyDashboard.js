import React from "react";
import PropertyListFilters from "./PropertyListFilters";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startSetMyDashboard } from "../actions/properties";
import PropertyListDashboard from "./PropertyListDashboard";

class MyDashboard extends React.Component {
  componentDidMount() {
    this.props.startSetMyDashboard();
  }
  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col s2" style={{ marginTop: "25px" }}>
            <PropertyListFilters />
          </div>
          <div className="col s10">
            <PropertyListDashboard />
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
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = dispatch => {
  return {
    startSetMyDashboard: () => dispatch(startSetMyDashboard())
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(MyDashboard);
