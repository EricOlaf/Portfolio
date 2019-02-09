import React, { Component } from "react";
import Header from "../Header/Header";
import Resume from "../Resume/Resume";
import AboutMe from "../AboutMe/AboutMe";
import Contact from "../Contact/Contact";
import NavBar from "../NavBar/NavBar";

import "./Home.css";

class Home extends Component {
  constructor() {
    super();
    this.state = {
      contact: "noShow"
    };
  }

  contactHandlerOn = () => {
    this.setState({ contact: "show" });
  };

  contactHandlerOff = () => {
    this.setState({ contact: "noShow" });
  };

  render() {
    return (
      <div>
        <div className={this.state.contact}>
          <div className="overlayContainer">
            <div className="overlayContainerTwo">
              <div
                className="overlayExitContainer"
                onClick={() => {
                  this.contactHandlerOff();
                }}
              >
                X
              </div>
              <div className="overalyAllInfoContainer">
                <div className="olay email">
                  <img
                    src="https://cdn4.iconfinder.com/data/icons/ionicons/512/icon-ios7-email-outline-128.png"
                    alt=""
                    className="olayPic"
                  />
                  <div className="olayInfo">olavesoneric@gmail.com</div>
                </div>
                <div className="olay phone">
                  <img
                    src="https://cdn2.iconfinder.com/data/icons/pittogrammi/142/04-128.png"
                    alt=""
                    className="olayPic"
                  />
                  <div className="olayInfo">208-390-1971</div>
                </div>
              </div>
              <div className="overlayLinksContainer">
                <a href="https://www.linkedin.com/in/eric-olaveson-229b0a90">
                  <img
                    className="overlayImg linkedInOlay"
                    src="https://cdn3.iconfinder.com/data/icons/free-social-icons/67/linkedin_circle_black-128.png"
                    alt=""
                  />
                </a>
                <a href="https://github.com/EricOlaf?tab=repositories">
                  <img
                    className="overlayImg gitHubOlay"
                    src="https://image.flaticon.com/icons/svg/25/25231.svg"
                    alt=""
                  />
                </a>
              </div>
            </div>
          </div>
        </div>
        <NavBar contactHandler={this.contactHandlerOn} />
        <Header contactHandler={this.contactHandlerOn} />
        <div className="homeAll">
          <div className="allSites">
            <Resume />
            <div className="sitesTitle">RECENT WORK</div>
            <div className="site">
              <div className="siteExp seone">
                <div className="siteName">RAW TRAILS</div>
                <div className="infoOnMySite">
                  A website designed in React for adventure seekers to find and
                  scheule the perfect guided outdoor trip.
                </div>
                <div className="repo infoOnMySite">
                  View GitHub Repo{" "}
                  <a href="https://github.com/EricOlaf/raw-trails">here.</a>
                </div>
                <div className="repo infoOnMySite">
                  Live example <a href="http://206.189.220.112:3005">here.</a>
                </div>
              </div>

              <a href="https://github.com/EricOlaf/raw-trails">
                <img
                  className="sitePic"
                  src="https://res.cloudinary.com/rawtrails801/image/upload/v1548807359/Screen_Shot_2019-01-29_at_6.09.41_PM.png"
                  alt=""
                />
              </a>
            </div>
            <div className="site two">
              <a href="https://github.com/positivity-or-something/appy">
                <img
                  className="sitePic"
                  src="https://garrettyaworski.com/img/threeviews.jpg"
                  alt=""
                />
              </a>
              <div className="siteExp setwo">
                <div className="siteName">APPY</div>
                <div className="infoOnMySite">
                  Social sedia app designed in React Native to uplift and
                  encourage users
                </div>
                <div className="repo infoOnMySite">
                  View GitHub Repo{" "}
                  <a href="https://github.com/positivity-or-something/appy">
                    here.
                  </a>
                </div>
              </div>
            </div>
            <AboutMe />
          </div>
        </div>
        <Contact contactHandler={this.contactHandlerOn} />
      </div>
    );
  }
}

export default Home;
