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
        <div className="navName">Eric Olaveson</div>
        <div className="navLinks">
          <Link className="link" to="/">
            Home
          </Link>
          <Link className="link" to="/resume">
            Skills
          </Link>
          {/* <Link className="link" to="/projects">
            Projects
          </Link> */}
          <Link className="link" to="/aboutme">
            About me
          </Link>
          <Link className="link" to="/contact">
            Contact
          </Link>
        </div>
      </div>
    );
  }
}

export default NavBar;
