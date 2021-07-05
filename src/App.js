import React, { lazy, Suspense } from "react";
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
import MentorPrivateRoute from "./MentorPrivateRoute";
import GuardianPrivateRoute from "./GuardianPrivateRoute";
import HeroPrivateRoute from "./HeroPrivateRoute";
import PrivateRoute from "./PrivateRoute";
import HeroLiveCallScreen from "./screens/HeroLiveCallScreen/HeroLiveCallScreen";
// const LandingScreen = lazy(() => import("./screens/LandingScreen"));
function App() {
  return (
    <Router>
      {/* <Suspense fallback={<div>Loading...</div>}> */}
      <Switch>
        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      ___________Guardian Private Route__________ 
      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
        <GuardianPrivateRoute
          path="/guardian/home"
          component={GuardianHomeScreen}
          exact
          redirectRoute="/"
        ></GuardianPrivateRoute>
        <PrivateRoute
          path="/guardian/email-confirm"
          component={GuardianEmailConfirmScreen}
          exact
        ></PrivateRoute>
        <GuardianPrivateRoute
          path="/guardian/home/addchild"
          component={GuardianHomeAddNewChildScreen}
          exact
          redirectRoute="/"
        ></GuardianPrivateRoute>
        {/* <Route path="/guardian/explore" component={ExploreScreen} exact></Route> */}
        <GuardianPrivateRoute
          path="/guardian/checkout/:courseId"
          component={GuardianCheckoutScreen}
          exact
          redirectRoute="/"
        ></GuardianPrivateRoute>
        <GuardianPrivateRoute
          path="/guardian/settings"
          component={GuardianSettingsScreen}
          exact
          redirectRoute="/"
        ></GuardianPrivateRoute>
        <GuardianPrivateRoute
          path="/guardian/home/child/:childId"
          component={GuardianHomeGetChildInfoScreen}
          exact
          redirectRoute="/"
        ></GuardianPrivateRoute>
        <GuardianPrivateRoute
          path="/guardian/home/child/:childId/course-subscription/:courseId"
          component={GuardianChildSubscriptionCourseScreen}
          exact
          redirectRoute="/"
        ></GuardianPrivateRoute>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      ___________Mentor Private Route__________ 
      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
        <PrivateRoute
          path="/mentor/email-confirm"
          component={MentorEmailConfirmScreen}
          exact
        ></PrivateRoute>
        <MentorPrivateRoute
          path="/mentor/live/:subscriptionId/:appointmentId/:appointmentTitle"
          component={MentorCourseControlLiveScreen}
          exact
          redirectRoute="/"
        ></MentorPrivateRoute>
        <MentorPrivateRoute
          path="/mentor/home"
          component={MentorHomeScreen}
          exact
          redirectRoute="/"
        ></MentorPrivateRoute>

        {/* <Route
          path="/mentor/home/course"
          component={MentorCourseControlScreen}
          exact
        >
          <Redirect from="/mentor/home/course" to="/mentor/home"></Redirect>
        </Route> */}

        <MentorPrivateRoute
          path="/mentor/home/course/:id"
          component={MentorCourseControlScreen}
          redirectRoute="/"
        ></MentorPrivateRoute>
        {/* <MentorPrivateRoute
          path="/mentor/dashboard"
          component={BasicInfoMentorDashboardScreen}
          exact
        >
          <Redirect
            from="/mentor/dashboard"
            to="/mentor/dashboard/basicinfo"
          ></Redirect>
        </MentorPrivateRoute> */}
        <MentorPrivateRoute
          path="/mentor/dashboard/basicinfo"
          component={BasicInfoMentorDashboardScreen}
          exact
          redirectRoute="/"
        ></MentorPrivateRoute>
        <MentorPrivateRoute
          path="/mentor/dashboard/balance"
          component={BalanceMentorDashboardScreen}
          redirectRoute="/"
        ></MentorPrivateRoute>
        <MentorPrivateRoute
          path="/mentor/dashboard/courses"
          component={CoursesMentorDashboardScreen}
          redirectRoute="/"
        ></MentorPrivateRoute>
        <MentorPrivateRoute
          path="/mentor/dashboard/course/create"
          component={CreateCourseMentorDashboardScreen}
          exact
          redirectRoute="/"
        ></MentorPrivateRoute>
        <MentorPrivateRoute
          path="/mentor/dashboard/course/edit/:id"
          component={EditCourseMentorDashboardScreen}
          exact
          redirectRoute="/"
        ></MentorPrivateRoute>
        <MentorPrivateRoute
          path="/mentor/dashboard/analytics"
          component={MentorAnalyticsDashboardScreen}
          exact
          redirectRoute="/"
        ></MentorPrivateRoute>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      ___________Hero Private Route__________ 
      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

        <HeroPrivateRoute
          path="/hero/home"
          component={HeroHomeScreen}
          exact
          redirectRoute="/"
        ></HeroPrivateRoute>
        <HeroPrivateRoute
          path="/hero/live/:subscriptionId/:appointmentId/:appointmentTitle"
          component={HeroLiveCallScreen}
          exact
          redirectRoute="/"
        ></HeroPrivateRoute>

        {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      __________Public Private Route__________ 
      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

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

        <Route
          path="/"
          component={
            localStorage.getItem("mentorInfo") ||
            localStorage.getItem("guardianInfo")
              ? ExploreScreen
              : LandingScreen
          }
          exact
        ></Route>
        <Redirect from="/home" to="/" exact></Redirect>
        <Route path="*" component={NotFound}></Route>
      </Switch>

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      ___________Mentor Private Route__________ 
      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      {/* <MentorPrivateRoute
        path="/"
        component={LandingScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/hero/home"
        component={HeroHomeScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/guardian/home"
        component={GuardianHomeScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/guardian/email-confirm"
        component={GuardianEmailConfirmScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/guardian/home/addchild"
        component={GuardianHomeAddNewChildScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/guardian/explore"
        component={ExploreScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/guardian/checkout/:courseId"
        component={GuardianCheckoutScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/guardian/settings"
        component={GuardianSettingsScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/guardian/home/child/:childId"
        component={GuardianHomeGetChildInfoScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/guardian/home/child/:childId/course-subscription/:courseId"
        component={GuardianChildSubscriptionCourseScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/register"
        component={GuardianRegisterScreen}
        exact
        redirectRoute="/explore"
      >
        <Redirect from="/register" to="/register/guardian"></Redirect>
      </MentorPrivateRoute>
      <MentorPrivateRoute
        path="/register/guardian"
        component={GuardianRegisterScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/register/mentor"
        component={MentorRegisterScreen}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute>
      <MentorPrivateRoute
        path="/register/mentor/continue"
        component={ContinueMentorRegister}
        exact
        redirectRoute="/explore"
      ></MentorPrivateRoute> */}

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      ___________Guardian Private Route__________ 
      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      {/* <GuardianPrivateRoute
        path="/"
        component={LandingScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/hero/home"
        component={HeroHomeScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/email-confirm"
        component={MentorEmailConfirmScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/live"
        component={MentorCourseControlLiveScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/home"
        component={MentorHomeScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>

      <GuardianPrivateRoute
        path="/mentor/home/course"
        component={MentorCourseControlScreen}
        exact
        redirectRoute="/explore"
      >
        <Redirect from="/mentor/home/course" to="/mentor/home"></Redirect>
      </GuardianPrivateRoute>

      <GuardianPrivateRoute
        path="/mentor/home/course/:id"
        component={MentorCourseControlScreen}
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/dashboard"
        component={BasicInfoMentorDashboardScreen}
        exact
        redirectRoute="/explore"
      >
        <Redirect
          from="/mentor/dashboard"
          to="/mentor/dashboard/basicinfo"
        ></Redirect>
      </GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/dashboard/basicinfo"
        component={BasicInfoMentorDashboardScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/dashboard/balance"
        component={BalanceMentorDashboardScreen}
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/dashboard/courses"
        component={CoursesMentorDashboardScreen}
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/dashboard/course/create"
        component={CreateCourseMentorDashboardScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/dashboard/course/edit/:id"
        component={EditCourseMentorDashboardScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/mentor/dashboard/analytics"
        component={MentorAnalyticsDashboardScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/register"
        component={GuardianRegisterScreen}
        exact
        redirectRoute="/explore"
      >
        <Redirect from="/register" to="/register/guardian"></Redirect>
      </GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/register/guardian"
        component={GuardianRegisterScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/register/mentor"
        component={MentorRegisterScreen}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute>
      <GuardianPrivateRoute
        path="/register/mentor/continue"
        component={ContinueMentorRegister}
        exact
        redirectRoute="/explore"
      ></GuardianPrivateRoute> */}

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      ___________Hero Private Route__________ 
      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}

      {/* <HeroPrivateRoute
        path="/"
        component={LandingScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/guardian/home"
        component={GuardianHomeScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/guardian/email-confirm"
        component={GuardianEmailConfirmScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/guardian/home/addchild"
        component={GuardianHomeAddNewChildScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/guardian/hero/home"
        component={ExploreScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/guardian/checkout/:courseId"
        component={GuardianCheckoutScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/guardian/settings"
        component={GuardianSettingsScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/guardian/home/child/:childId"
        component={GuardianHomeGetChildInfoScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/guardian/home/child/:childId/course-subscription/:courseId"
        component={GuardianChildSubscriptionCourseScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/email-confirm"
        component={MentorEmailConfirmScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/live"
        component={MentorCourseControlLiveScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/home"
        component={MentorHomeScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>

      <HeroPrivateRoute
        path="/mentor/home/course"
        component={MentorCourseControlScreen}
        exact
        redirectRoute="/hero/home"
      >
        <Redirect from="/mentor/home/course" to="/mentor/home"></Redirect>
      </HeroPrivateRoute>

      <HeroPrivateRoute
        path="/mentor/home/course/:id"
        component={MentorCourseControlScreen}
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/dashboard"
        component={BasicInfoMentorDashboardScreen}
        exact
        redirectRoute="/hero/home"
      >
        <Redirect
          from="/mentor/dashboard"
          to="/mentor/dashboard/basicinfo"
        ></Redirect>
      </HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/dashboard/basicinfo"
        component={BasicInfoMentorDashboardScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/dashboard/balance"
        component={BalanceMentorDashboardScreen}
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/dashboard/courses"
        component={CoursesMentorDashboardScreen}
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/dashboard/course/create"
        component={CreateCourseMentorDashboardScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/dashboard/course/edit/:id"
        component={EditCourseMentorDashboardScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/mentor/dashboard/analytics"
        component={MentorAnalyticsDashboardScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/register"
        component={GuardianRegisterScreen}
        exact
        redirectRoute="/hero/home"
      >
        <Redirect from="/register" to="/register/guardian"></Redirect>
      </HeroPrivateRoute>
      <HeroPrivateRoute
        path="/register/guardian"
        component={GuardianRegisterScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/register/mentor"
        component={MentorRegisterScreen}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute>
      <HeroPrivateRoute
        path="/register/mentor/continue"
        component={ContinueMentorRegister}
        exact
        redirectRoute="/hero/home"
      ></HeroPrivateRoute> */}

      {/* >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>
      ___________Public Route__________ 
      >>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>>*/}
      {/* <PublicRoute
        path="/hero/home"
        component={HeroHomeScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/guardian/home"
        component={GuardianHomeScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/guardian/email-confirm"
        component={GuardianEmailConfirmScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/guardian/home/addchild"
        component={GuardianHomeAddNewChildScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/guardian/"
        component={ExploreScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/guardian/checkout/:courseId"
        component={GuardianCheckoutScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/guardian/settings"
        component={GuardianSettingsScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/guardian/home/child/:childId"
        component={GuardianHomeGetChildInfoScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/guardian/home/child/:childId/course-subscription/:courseId"
        component={GuardianChildSubscriptionCourseScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/email-confirm"
        component={MentorEmailConfirmScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/live"
        component={MentorCourseControlLiveScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/home"
        component={MentorHomeScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>

      <PublicRoute
        path="/mentor/home/course"
        component={MentorCourseControlScreen}
        exact
        redirectRoute="/"
      >
        <Redirect from="/mentor/home/course" to="/mentor/home"></Redirect>
      </PublicRoute>

      <PublicRoute
        path="/mentor/home/course/:id"
        component={MentorCourseControlScreen}
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/dashboard"
        component={BasicInfoMentorDashboardScreen}
        exact
        redirectRoute="/"
      >
        <Redirect
          from="/mentor/dashboard"
          to="/mentor/dashboard/basicinfo"
        ></Redirect>
      </PublicRoute>
      <PublicRoute
        path="/mentor/dashboard/basicinfo"
        component={BasicInfoMentorDashboardScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/dashboard/balance"
        component={BalanceMentorDashboardScreen}
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/dashboard/courses"
        component={CoursesMentorDashboardScreen}
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/dashboard/course/create"
        component={CreateCourseMentorDashboardScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/dashboard/course/edit/:id"
        component={EditCourseMentorDashboardScreen}
        exact
        redirectRoute="/"
      ></PublicRoute>
      <PublicRoute
        path="/mentor/dashboard/analytics"
        component={MentorAnalyticsDashboardScreen}
        exact
        redirectRoute="/"
      ></PublicRoute> */}
      {/* </Suspense> */}
    </Router>
  );
}

export default App;
