import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { startLogin, startLogout } from "../actions/auth";

const Header = ({ startLogin, startLogout, isAuthenticated }) => (
  <nav>
    <div className="nav-wrapper blue-grey darken-4">
      <Link to="/" className="left brand-logo" style={{ marginLeft: "10px" }}>
        Prop-List
      </Link>
      <ul className="right">
        <li>
          <button
            style={{
              background: "none",
              border: "none",
              marginRight: "10px",
              cursor: "pointer"
            }}
            className="white-text"
            onClick={isAuthenticated ? startLogout : startLogin}
          >
            {isAuthenticated ? "Logout" : "Login"}
          </button>
        </li>
      </ul>
    </div>
  </nav>
);

const mapStateToProps = state => ({
  isAuthenticated: !!state.auth.uid
});

const mapDispatchToProps = dispatch => {
  return {
    startLogin: () => dispatch(startLogin()),
    startLogout: () => dispatch(startLogout())
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);
