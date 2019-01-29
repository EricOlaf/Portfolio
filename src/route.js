import React from "react";
import { Switch, Route } from "react-router-dom";

import Home from "./component/Home/Home";
import Contact from "./component/Contact/Contact";
import Projects from "./component/Projects/Projects";
import Resume from "./component/Resume/Resume";
import About from "./component/AboutMe/AboutMe";

export default (
  <Switch>
    <Route exact path="/" component={Home} />
    <Route path="/contact" component={Contact} />
    <Route path="/projects" component={Projects} />
    <Route path="/resume" component={Resume} />
    <Route path="/aboutme" component={About} />
  </Switch>
);
