import React from "react";
import { NavLink, Switch, Route } from "react-router-dom";

/* 
https://blog.pusher.com/getting-started-with-react-router-v4/
https://stackoverflow.com/questions/41956465/how-to-create-multiple-page-app-using-react
*/

import About from "./About";
import Home from "./Home";
import Services from "./Services";
import Contact from "./Contact";
import "../styles.css";

const Main = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route exact path="/About" component={About}></Route>
      <Route exact path="/Services" component={Services}></Route>
      <Route exact path="/Contact" component={Contact}></Route>
    </Switch>
  );
};

export default Main;
