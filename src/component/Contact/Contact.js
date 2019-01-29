import React, { Component } from "react";

import "./Contact.css";

class Contact extends Component {
  render() {
    return (
      <div className="contact">
        <div className="contLeft">
          <h1>Let's work together!</h1>
          <div>
            I'm a Full Stack developer with a thirst for knowledge and
            oportunities fluent in English and Spanish.
          </div>
          <button>Contact me</button>
        </div>
        <div className="contRight">
          <h2>Social</h2>
          <div>
            <div>LinkedIn</div>
            <div>Github</div>
            <div>Instagram</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
