import React, { Component } from "react";
import { Link } from "react-router-dom";

import "./NavBar.css";

class NavBar extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="navbarAll">
        <div className="navName" onClick={this.props.contactHandler}>
          ERIC OLAVESON
        </div>
        {/* <div className="navLinks">
          <Link className="link" to="/">
            HOME
          </Link>
          <Link className="link" to="/resume">
            SKILLS
          </Link>
          <Link className="link" to="/aboutme">
            ABOUT
          </Link>
          <a className="link" href="#contactMe">
            CONTACT ME
          </a>
        </div> */}
      </div>
    );
  }
}

export default NavBar;
