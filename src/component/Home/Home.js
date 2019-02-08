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
      contact: false
    };
  }

  contactHandler = () => {
    this.setState({ contact: !this.state.contact });
  };

  render() {
    return (
      <div>
        <NavBar />
        <Header contactHandler={this.contactHandler} />
        <div className="homeAll">
          <div className="allSites">
            <Resume />
            <div className="sitesTitle">RECENT WORK</div>
            <div className="site">
              <div className="siteExp seone">
                <div className="siteName">RAW TRAILS</div>
                <div>
                  A website designed in React for adventure seekers to find and
                  scheule the perfect guided outdoor trip.
                </div>
                <div className="repo">
                  View GitHub Repo{" "}
                  <a href="https://github.com/EricOlaf/raw-trails">here.</a>
                </div>
                <div>Live example here.</div>
              </div>

              <img
                className="sitePic"
                src="https://res.cloudinary.com/rawtrails801/image/upload/v1548807359/Screen_Shot_2019-01-29_at_6.09.41_PM.png"
                alt=""
              />
            </div>
            <div className="site">
              <img
                className="sitePic"
                src="https://garrettyaworski.com/img/threeviews.jpg"
                alt=""
              />
              <div className="siteExp setwo">
                <div className="siteName">APPY</div>
                <div>
                  Social sedia app designed in React Native to uplift and
                  encourage users
                </div>
                <div className="repo">
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
        <Contact />
      </div>
    );
  }
}

export default Home;
