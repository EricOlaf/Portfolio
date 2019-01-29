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
        <div>Brief Description</div>
        <div>Why I love coding</div>
        <div>Hobbies</div>
      </div>
    );
  }
}

export default About;
