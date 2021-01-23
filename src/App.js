/** @format */
import "./App.css";
import React from "react";
import HeaderComponent from "./commonComponents/header";
import FooterComponent from "./commonComponents/footer";
import { Switch, Route, Link } from "react-router-dom";
import IfsServices from "./services/ifsServices";
import LandingPageComponent from "./landingPageComponent";

class App extends React.Component {
  render() {
    return (
      <div>
        <div>
          <HeaderComponent />
        </div>
        <Switch>
          <Route
            exact
            path={["/", "/#home"]}
            component={LandingPageComponent}
          />
          <Route exact path='/ifsservices' component={IfsServices} />
        </Switch>
        <FooterComponent />
      </div>
    );
  }
}
export default App;
