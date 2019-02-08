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
          <div className="headerTitle">ERIC OLAVESON</div>
          <div className="headerInfo">
            i design, build, and maintain websites
          </div>
          <button className="headerBtn" onClick={this.props.contactHandler}>
            CONTACT ME
          </button>
          {/* <div className="scroll">
            <div>scroll</div>
            <img
              src="https://www.iconsdb.com/icons/preview/white/arrow-208-xl.png"
              alt=""
            />
          </div> */}
        </div>
      </div>
    );
  }
}
export default Header;
