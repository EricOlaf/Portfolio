import React, { Component } from "react";
import "./Header.css";

class Header extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div className="headerAll">
        <img
          className="headerPic"
          src="https://deskhunt-master.s3.amazonaws.com/posts/interviews/sven-lenaerts/sven-lenaerts-01.jpg"
          alt=""
        />
        <div className="headerText">
          <h1 className="headerTitle">Looking for a web developer?</h1>
          <div>I design, build, and maintian websites.</div>
          <button>Send me an email</button>
        </div>
      </div>
    );
  }
}
export default Header;
