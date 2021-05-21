import React from "react";
import {
  BrowserRouter as Router,
  NavLink,
  Redirect,
  Route,
} from "react-router-dom";
import {
  ContinueMentorRegister,
  ExploreScreen,
  GuardianLoginScreen,
  GuardianRegisterScreen,
  HeroLoginScreen,
  LandingScreen,
  MentorLoginScreen,
  MentorProfileExploreScreen,
  MentorRegisterScreen,
} from "./screens";
import BasicInfoMentorDashboardScreen from "./screens/BasicInfoMentorDashboardScreen";
import ExploreServiceScreen from "./screens/ExploreServiceScreen";
import MentorHomeScreen from "./screens/MentorHomeScreen";

function App() {
  return (
    <Router>
      <Route path="/mentor/home" component={MentorHomeScreen} exact></Route>

      <Route
        path="/mentor/dashboard"
        component={BasicInfoMentorDashboardScreen}
        exact
      >
        <Redirect
          from="/mentor/dashboard"
          to="/mentor/dashboard/basic-info"
        ></Redirect>
      </Route>

      <Route path="/explore" component={ExploreScreen} exact></Route>

      <Route
        path="/explore/profile/:id"
        component={MentorProfileExploreScreen}
      ></Route>
      <Route
        path="/explore/course/:id"
        component={ExploreServiceScreen}
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
