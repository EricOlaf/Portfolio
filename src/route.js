import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Home/Home";
import Projects from "./component/Projects/Projects";
import Resume from "./component/Resume/Resume";
import About from "./component/AboutMe/AboutMe";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/projects" component={Home} />
    <Route path="/resume" component={Home} />
    <Route path="/aboutme" component={Home} />
  </Switch>
);
