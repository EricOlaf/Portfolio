import React, { Component } from "react";

import "./Projects.css";

class Projects extends Component {
  render() {
    return (
      <div>
        <h1>Recent Work</h1>
        <div className="allSites">
          <div className="site">
            <img
              className="sitePic"
              src="https://user-images.githubusercontent.com/41210242/47841519-dba2c080-dd87-11e8-9eaa-956e9b776a3e.png"
              alt=""
            />
            <div className="siteExp">explanation</div>
          </div>
          <div className="site">
            <div className="siteExp">explanation</div>
            <img
              className="sitePic"
              src="https://res.cloudinary.com/rawtrails801/image/upload/v1548807359/Screen_Shot_2019-01-29_at_6.09.41_PM.png"
              alt=""
            />
          </div>
          <div className="site">
            <img
              className="sitePic"
              src="https://user-images.githubusercontent.com/41210242/47841519-dba2c080-dd87-11e8-9eaa-956e9b776a3e.png"
              alt=""
            />
            <div className="siteExp">explanation</div>
          </div>
        </div>
      </div>
    );
  }
}

export default Projects;
