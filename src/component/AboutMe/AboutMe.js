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
                Growing up in Idaho I enjoyed an active lifestyle, playing
                sports and loving the outdoors which I love to this day. I lived
                in Ecuador for two years and then studied Exercise Physiology at
                BYU-Idaho. After college I began a career in sales so I could
                live, learn, and experience life from the different corners of
                the country.
              </p>{" "}
              <p>
                Urged by a friend who programs I started coding for fun and
                found a new passion. I shortly thereafter decided on a career
                change and enrolled in the DevMountain WebDev bootcamp at their
                Dallas, Texas campus. Of course there are challenging moments
                but I love being extremely engaged in the whole web development
                process and seeing the asthetic, functional outcome.
              </p>
              <p>
                I enjoy making new friends and coding with friends. If you do
                too send me an email.
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
