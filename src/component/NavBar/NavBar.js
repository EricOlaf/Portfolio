import React, { Component } from "react";
import { NavHashLink as Link } from "react-router-hash-link";

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
          Need a Web Developer?
        </div>
        {/* <div className="navLinks">
          <Link className="link" smooth to="/#header">
            HOME
          </Link>
          <Link className="link" to="/#skills">
            SKILLS
          </Link>
          <Link className="link" to="/#aboutme">
            ABOUT
          </Link>
        </div> */}
      </div>
    );
  }
}

export default NavBar;
