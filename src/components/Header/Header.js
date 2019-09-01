import React, { Component } from "react";
import { Link } from "react-router-dom";

class Header extends Component {
  render() {
    return (
      <div>
        <header className="App-header">
          <nav>
            <Link to="/" activeClassName="active">
              Home
            </Link>
            {" | "}
            <Link to="/signin" activeClassName="active">
              Sign In
            </Link>
            {" | "}
            <Link to="/signout" activeClassName="active">
              Sign Out
            </Link>
          </nav>
        </header>
      </div>
    );
  }
}

export default Header;
