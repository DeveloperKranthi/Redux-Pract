import React, { Component } from "react";
import { Link } from "react-router-dom";

class Nav extends Component {
  render() {
    return (
      <div>
        <nav>
          <table>
            <div>
              <Link to="/">Home </Link>
              <Link to="/User/">User</Link>
              <Link to="/Post/">Post</Link>
            </div>
          </table>
        </nav>
      </div>
    );
  }
}

export default Nav;
