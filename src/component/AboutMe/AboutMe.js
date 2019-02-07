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
        <div className="aboutHeaderAll">
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
        </div>
        <div className="aboutMainContainer">
          <div className="aboutPage">
            <div className="aboutPageTextAll">
              <div className="aboutPageTitle">About Me</div>
              <div className="aboutPageText">
                <p>
                  Born and raised in a small town in Idaho. I grew up enjoying
                  an active lifestyle, playing sports and loving the outdoors
                  which I love to this day. I lived for two years in Ecuador
                  where I learned selfless service and Spanish. I went to
                  BYU-Idaho where I studied Exercise Physology. After college I
                  continued a sales career so I could live, learn, and
                  experience life from the different corners of the country.
                </p>{" "}
                <p>
                  Urged by a friend in programming I started coding and found a
                  new passion. I shortly thereafter decided on a career change
                  and enrolled in the DevMountain WebDev bootcamp in Dallas,
                  Texas. Of course, there are challenging moments but I love
                  being extremely engaged in the whole web development process
                  and seeing the asthetic, functional outcome.
                </p>
                <p>
                  I enjoy making new friends and coding with friends. If you do
                  too send me an email.
                </p>
              </div>
            </div>
            <img
              className="aboutHeaderPicMe"
              src="https://res.cloudinary.com/rawtrails801/image/upload/v1549401716/_DSC5514.jpg"
              alt=""
            />
          </div>
        </div>
      </div>
    );
  }
}

export default About;
