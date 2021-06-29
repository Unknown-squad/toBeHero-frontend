import React from "react";
import {
  BrowserRouter as Router,
  Redirect,
  Route,
  Switch,
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
  NotFound,
} from "./screens";
import BasicInfoMentorDashboardScreen from "./screens/BasicInfoMentorDashboardScreen";
import ExploreServiceScreen from "./screens/ExploreServiceScreen";
import MentorHomeScreen from "./screens/MentorHomeScreen";
import CoursesMentorDashboardScreen from "./screens/CoursesMentorDashboardScreen";
import BalanceMentorDashboardScreen from "./screens/BalanceMentorDashboardScreen";
import CreateCourseMentorDashboardScreen from "./screens/CoursesMentorDashboardScreen/EditCourseMentorDashboardScreen";
import MentorCourseControlScreen from "./screens/MentorCourseControlScreen";
import MentorCourseControlLiveScreen from "./screens/MentorCourseControlLiveScreen";
import EditCourseMentorDashboardScreen from "./screens/CoursesMentorDashboardScreen/EditCourseMentorDashboardScreen";
import MentorEmailConfirmScreen from "./screens/MentorEmailConfirmScreen";
// import NotFoundScreen from "./screens/NotFoundScreen";
import GuardianEmailConfirmScreen from "./screens/GuardianEmailConfirmScreen";
import MentorAnalyticsDashboardScreen from "./screens/MentorAnalyticsDashboardScreen";
import GuardianHomeScreen from "./screens/GuardianHomeScreen";
import GuardianSettingsScreen from "./screens/GuardianSettingsScreen";
import GuardianHomeAddNewChildScreen from "./screens/GuardianHomeAddNewChildScreen";
import GuardianHomeGetChildInfoScreen from "./screens/GuardianHomeGetChildInfoScreen";
import GuardianChildSubscriptionCourseScreen from "./screens/GuardianChildSubscriptionCourseScreen";
import GuardianCheckoutScreen from "./screens/GuardianCheckoutScreen";
import HeroHomeScreen from "./screens/HeroHomeScreen";
import { useSelector } from "react-redux";
import PrivateRoute from "./PrivateRoute";

function App() {
  const mentorLogin = useSelector((state) => state.mentorLogin);
  const { mentorInfo } = mentorLogin;
  return (
    <Router>
      <Switch>
        <Route
          path="/guardian/home"
          component={GuardianHomeScreen}
          exact
        ></Route>
        <Route
          path="/guardian/home/addchild"
          component={GuardianHomeAddNewChildScreen}
          exact
        ></Route>
        <Route path="/guardian/explore" component={ExploreScreen} exact></Route>
        <Route
          path="/guardian/checkout/:courseId"
          component={GuardianCheckoutScreen}
          exact
        ></Route>
        <Route
          path="/guardian/settings"
          component={GuardianSettingsScreen}
          exact
        ></Route>
        <Route
          path="/guardian/home/child/:childId"
          component={GuardianHomeGetChildInfoScreen}
          exact
        ></Route>
        <Route
          path="/guardian/home/child/:childId/course-subscription/:courseId"
          component={GuardianChildSubscriptionCourseScreen}
          exact
        ></Route>
        <Route
          path="/mentor/live"
          component={MentorCourseControlLiveScreen}
          exact
        ></Route>
        <Route path="/mentor/home" component={MentorHomeScreen} exact></Route>

        <Route
          path="/mentor/home/course"
          component={MentorCourseControlScreen}
          exact
        >
          <Redirect from="/mentor/home/course" to="/mentor/home"></Redirect>
        </Route>

        <Route
          path="/mentor/home/course/:id"
          component={MentorCourseControlScreen}
        ></Route>
        <Route
          path="/mentor/dashboard"
          component={BasicInfoMentorDashboardScreen}
          exact
        >
          <Redirect
            from="/mentor/dashboard"
            to="/mentor/dashboard/basicinfo"
          ></Redirect>
        </Route>
        <Route
          path="/mentor/dashboard/basicinfo"
          component={BasicInfoMentorDashboardScreen}
          exact
        ></Route>
        <Route
          path="/mentor/dashboard/balance"
          component={BalanceMentorDashboardScreen}
        ></Route>
        <Route
          path="/mentor/dashboard/courses"
          component={CoursesMentorDashboardScreen}
        ></Route>
        <Route
          path="/mentor/dashboard/course/create"
          component={CreateCourseMentorDashboardScreen}
          exact
        ></Route>
        <Route
          path="/mentor/dashboard/course/edit/:id"
          component={EditCourseMentorDashboardScreen}
          exact
        ></Route>
        <Route
          path="/mentor/dashboard/analytics"
          component={MentorAnalyticsDashboardScreen}
          exact
        ></Route>
        <Route path="/mentor/explore" component={ExploreScreen} exact></Route>
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
        <Route
          path="/mentor/email-confirm"
          component={MentorEmailConfirmScreen}
          exact
        ></Route>
        <Route
          path="/guardian/email-confirm"
          component={GuardianEmailConfirmScreen}
          exact
        ></Route>
        <Route path="/login/hero" component={HeroLoginScreen} exact></Route>

        <Route path="/hero/home" component={HeroHomeScreen} exact></Route>

        <Route
          path="/login/guardian"
          component={GuardianLoginScreen}
          exact
        ></Route>
        <Route path="/login/mentor" component={MentorLoginScreen} exact></Route>

        <Route path="/" component={LandingScreen} exact>
          {/* {mentorInfo ? <Redirect to="/mentor/home"></Redirect> : null} */}
        </Route>

        <Route from="/home" to="/" exact></Route>
        <Route path="*" component={NotFound}></Route>
      </Switch>
    </Router>
  );
}

export default App;
