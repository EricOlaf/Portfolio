import React, { Component } from "react";
import "./Resume.css";
import pic from "../../pics";

class Resume extends Component {
  constructor() {
    super();
    this.state = {};
  }
  render() {
    return (
      <div>
        <div className="resHeaderAll">
          <div className="resumeHeaderContainer">
            <div className="resumeHeader">Technologies</div>
          </div>
          <img
            className="resumePic"
            src="https://res.cloudinary.com/rawtrails801/image/upload/v1532986406/RawTrails/DSC_0299.jpg"
            alt=""
          />
        </div>
        <div className="techAll">
          <div className="techSingle">
            <div className="">React</div>
            <img
              className="techImage"
              src="https://arcweb.co/wp-content/uploads/2016/10/react-logo-1000-transparent.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">React Native</div>
            <img
              className="techImage reactNative"
              src="https://www.inovex.de/blog/wp-content/uploads/2018/03/react-native.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">Redux</div>
            <img
              className="techImage redux"
              src="http://www.stickpng.com/assets/images/5848309bcef1014c0b5e4a9a.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">ES6+</div>
            <img
              className="techImage"
              src="https://miro.medium.com/max/1108/1*H-25KB7EbSHjv70HXrdl6w.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">Express.js</div>
            <img
              className="techImage"
              src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/359/landscape/expressjslogo.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">Git+GitHub</div>
            <img
              className="techImage"
              src="http://www.stickpng.com/assets/images/5847f981cef1014c0b5e48be.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">HTML5</div>
            <img
              className="techImage"
              src="https://kathleenhalme.com/images/html-clip-png-5.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">PostgresQL</div>
            <img
              className="techImage"
              src="http://www.stickpng.com/assets/images/584815fdcef1014c0b5e497a.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">CSS3</div>
            <img
              className="techImage"
              src="https://i.lensdump.com/i/8LCZ32.png"
              alt=""
            />
          </div>
          <div className="techSingle">
            <div className="">Node.js</div>
            <img
              className="techImage"
              src="https://d2eip9sf3oo6c2.cloudfront.net/tags/images/000/000/256/full/nodejslogo.png"
              alt=""
            />
          </div>
        </div>
        <div className="experience">
          <div className="insideRes">
            <div className="expTitle">Coding Experience</div>
            <div className="expBoth">
              <a href="https://devmountain.com/">
                <img
                  className="devMtnPic"
                  src="https://pbs.twimg.com/profile_images/648907414587072512/RSKdI5dQ.png"
                  alt=""
                />
              </a>
              <div className="expTextAll">
                <div className="expEachTitle">DevMountain</div>
                <div className="expTextInfo">
                  Completed 3-month intensive coursework to build foundation as
                  a SERN stack developer with a base in Javascipt based
                  programming.
                </div>
              </div>
            </div>
            <div className="expBoth">
              <a href="https://devmountain.com/">
                {" "}
                <img
                  className="devMtnPic"
                  src="https://pbs.twimg.com/profile_images/648907414587072512/RSKdI5dQ.png"
                  alt=""
                />
              </a>
              <div className="expTextAll">
                <div className="expEachTitle">DevMountain</div>
                <div className="expTextInfo">
                  Volunteer tutor at DevMountain. Time was spent discussing core
                  concepts in JavaScript, React, Express, Node, and SQL.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Resume;
