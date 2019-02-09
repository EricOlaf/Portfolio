import React, { Component } from "react";
import "./AboutMe.css";

class About extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        {/* <div className="aboutHeaderAll">
          <div className="aboutHeaderContainer">
            <div className="aboutHeaderTitle">
              <div className="aboutHeaderTextOne">Hello World,</div>
              <div className="aboutHeaderTextTwo">I'm Eric Olaveson</div>
            </div>
          </div>
          <img
            className="aboutHeaderPic"
            src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986431/RawTrails/DSC_5769.jpg"
            alt=""
          />
        </div> */}
        {/* <div className="aboutMainContainer"> */}
        <div className="aboutPage">
          <div className="aboutPageTextAll">
            <div className="aboutPageTitle">ABOUT ME</div>
            <div className="aboutPageText">
              <p>
                Urged by a friend who programs I started coding for fun and
                found a new passion. I shortly thereafter decided on a career
                change from sales and quickly enrolled at DevMountain. I love
                being extremely engaged in the whole development process and
                seeing the asthetic, functional outcome.
              </p>
              <p>
                When I'm not coding I like to spend time with my wife and
                friends in the outdoors, playing sports, and eating good food.
              </p>
            </div>
          </div>
          <img
            className="aboutHeaderPicMe"
            src="https://res.cloudinary.com/rawtrails801/image/upload/v1549578604/UNADJUSTEDNONRAW_thumb_1720.jpg"
            alt=""
          />
        </div>
        {/* </div> */}
      </div>
    );
  }
}

export default About;
