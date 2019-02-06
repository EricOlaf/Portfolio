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
          src="https://res.cloudinary.com/rawtrails801/image/upload/v1549427681/RawTrails/IMG_1963.JPG.jpg"
          alt=""
        />
        <div className="headerText">
          <div className="headerTitle">Looking for a web developer?</div>
          <div className="headerInfo">
            I design, build, and maintian websites.
          </div>
          <button className="headerBtn">Send me an email</button>
          <div className="scroll">
            <div>scroll</div>
            <img
              src="https://www.iconsdb.com/icons/preview/white/arrow-208-xl.png"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Header;
