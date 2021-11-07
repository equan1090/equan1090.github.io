import React, {useState} from "react";
import Preview from "../views/Preview";
import HomeLight from "../views/all-home-version/HomeLight";
import HomeDark from "../views/all-home-version/HomeDark";
import NotFound from "../views/NotFound";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

const Routes = () => {




  return (
    <>
      <Router>
        <Switch>
          {/* <Route exact path="/" component={Preview} /> */}
          {/* <Route path="/home-light" component={HomeLight} /> */}
          <Route path="/" component={HomeDark} />
          {/* <Route path="/rtl-home-light" component={RtlHomeLight} />
          <Route path="/rtl-home-dark" component={RtlHomeDark} /> */}
          <Route component={NotFound} />
        </Switch>
      </Router>
    </>
  );
};

export default Routes;
