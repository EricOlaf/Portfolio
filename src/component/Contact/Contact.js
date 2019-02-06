import React, { Component } from "react";

import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contAll">
        <img
          className="contPic"
          src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986433/RawTrails/DSC_7434.jpg"
          alt=""
        />
        <div className="contText">
          <div className="contLeft">
            <div className="contTitle">Let's work together!</div>
            <div className="contAb">
              I'm a Full Stack developer with a thirst for knowledge and
              oportunities fluent in English and Spanish.
            </div>
            <button>Contact me</button>
            <img
              className="picEric"
              src="https://res.cloudinary.com/rawtrails801/image/upload/v1549401716/_DSC5514.jpg"
              alt=""
            />
          </div>
          <div className="contRight">
            <div className="contTitle">Find Me on:</div>
            <div className="socMed">
              <a href="https://www.linkedin.com/in/eric-olaveson-229b0a90">
                LinkedIn
              </a>
              <a href="https://github.com/EricOlaf?tab=repositories">Github</a>
              {/* <a href="https://www.instagram.com/ericolaf1223/">Instagram</a> */}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
