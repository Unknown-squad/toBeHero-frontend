import React from "react";
import { BrowserRouter as Router, Redirect, Route } from "react-router-dom";
import {
  ContinueMentorRegister,
  ExploreScreen,
  GuardianLoginScreen,
  GuardianRegisterScreen,
  HeroLoginScreen,
  LandingScreen,
  MentorLoginScreen,
  MentorRegisterScreen,
} from "./screens";

function App() {
  return (
    <Router>
      <Route path="/explore" component={ExploreScreen} exact></Route>
      <Route
        path="/explore/page/:pageNumber"
        component={ExploreScreen}
        exact
      ></Route>
      <Route
        path="/explore/genre/:genre"
        component={ExploreScreen}
        exact
      ></Route>
      <Route
        path="/explore/sortby/:sortby"
        component={ExploreScreen}
        exact
      ></Route>
      <Route
        path="/explore/ratings/:ratings"
        component={ExploreScreen}
        exact
      ></Route>
      <Route path="/login" component={GuardianLoginScreen} exact>
        <Redirect from="/login" to="/login/guardian"></Redirect>
      </Route>

      <Route path="/register" component={GuardianRegisterScreen} exact>
        <Redirect from="/register" to="/register/guardian"></Redirect>
      </Route>
      <Route
        path="/register/guardian"
        component={GuardianRegisterScreen}
        exact
      ></Route>
      <Route
        path="/register/mentor"
        component={MentorRegisterScreen}
        exact
      ></Route>
      <Route
        path="/register/mentor/continue"
        component={ContinueMentorRegister}
        exact
      ></Route>
      <Route path="/login/hero" component={HeroLoginScreen} exact></Route>
      <Route
        path="/login/guardian"
        component={GuardianLoginScreen}
        exact
      ></Route>
      <Route path="/login/mentor" component={MentorLoginScreen} exact></Route>
      <Route path="/" component={LandingScreen} exact></Route>
    </Router>
  );
}

export default App;
