import React, { Component } from "react";
import Header from "../Header/Header";

import "./Home.css";

class Home extends Component {
  render() {
    return (
      <div>
        <Header />
        <div className="homeAll">
          {/* <h1>Skills</h1>
        <div className="allSkills">
          <div className="indSkill">
            <img
              className="skillPic"
              src="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/21-web_essential-128.png"
              alt=""
            />
            <h3>Communication</h3>
            <div>
              Years in the sales industry have taught me to love talking to
              people with intent. I ask questions to understand and most
              carefully listen.
            </div>
          </div>
          {/* <div className="indSkill">
            <img
              src="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/42-web_essential-128.png"
              alt=""
            />
            <div>Intentional</div>
            <div>explanation</div>
          </div> 
          <div className="indSkill">
            <img
              className="skillPic"
              src="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/03-web_essential-128.png"
              alt=""
            />
            <h2>Attitude</h2>
            <div>
              As a naturally positive upbeat person I love to transmit my
              enthusiam to others. Web developemtn is challenging and I strive
              to always look on the bright side and continue working hard
              through challenges.{" "}
            </div>
          </div>
          <div className="indSkill">
            <img
              className="skillPic"
              src="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/01-web_essential-128.png"
              alt=""
            />
            <h2>Leader</h2>
            <div>
              Having many opportunities to lead I enjoy responsibility and
              helping other achieve their potential as well as being a good team
              player doing his part to help achieve a common goal.
            </div>
          </div>
          <div className="indSkill">
            <img
              className="skillPic"
              src="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/32-web_essential-128.png"
              alt=""
            />
            <h2>Time Keeping</h2>
            <div>
              I value my time as well as those who I work with. I schedule my
              time and am intentional in my activities.
            </div>
          </div>
          <div className="indSkill">
            <img
              className="skillPic"
              src="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/49-web_essential-128.png"
              alt=""
            />
            <h2>Organization</h2>
            <div>
              I use apps such as Trello and MinimaList to help me stay on top of
              my projects all alocate resources accordingly.
            </div>
          </div>
          <div className="indSkill">
            <img
              className="skillPic"
              src="https://cdn4.iconfinder.com/data/icons/web-essential-4/64/14-web_essential-128.png"
              alt=""
            />
            <h2>Teachable</h2>
            <div>
              I love to learn. I deliberately put myself in situations and
              around people that push me outside of my comfort zone.
            </div>
          </div>
        </div> */}

          <div className="allSites">
            <div className="sitesTitle">Recent Work</div>
            <div className="site">
              <div className="siteExp seone">
                <div className="siteName">Raw Trails</div>
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
                <div className="siteName">Appy</div>
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
          </div>
        </div>
      </div>
    );
  }
}

export default Home;
