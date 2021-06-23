import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { courseListReducer } from "./reducers/courseListReducers";
import { guardianRegisterReducer } from "./reducers/guardianRegisterReducers";
import { mentorRegisterReducer } from "./reducers/mentorRegisterReducers";
import { mentorProfileDetailsReducer } from "./reducers/mentorProfileDetailsReducers";
import { mentorProfileCoursesReducer } from "./reducers/mentorProfileCoursesReducers";
import { courseDetailsReducer } from "./reducers/courseDetailsReducers";
import { guardianLoginReducer } from "./reducers/guardianLoginReducers";
import { mentorLoginReducer } from "./reducers/mentorLoginReducers";
import { heroLoginReducer } from "./reducers/heroLoginReducers";
import { serviceListReducer } from "./reducers/serviceListReducers";
import { mentorStatusAvailabilityReducer } from "./reducers/mentorStatusAvailabilityReducers";
import { mentorBalanceReducer } from "./reducers/mentorBalanceReducers";
import { mentorBasicInfoReducer } from "./reducers/mentorBasicInfoReducers";
import { mentorUpdateBasicInfoReducer } from "./reducers/mentorUpdateBasicInfoReducers";
import { mentorCoursesDashboardReducer } from "./reducers/mentorCoursesDashboardReducers";
import { mentorUpdateEditCourseDashboardReducer } from "./reducers/mentorUpdateEditCourseDashboardReducers";
import { mentorEditCourseDashboardReducer } from "./reducers/mentorEditCourseDashboardReducers";
import { mentorAddNewCourseDashboardReducer } from "./reducers/mentorAddNewCourseDashboardReducers";
import { getReviewsForExploreServiceReducer } from "./reducers/getReviewsForExploreServiceReducers";
// import { mentorStatusUpdateAvailabilityReducer } from "./reducers/mentorStatusUpdateAvailabilityReducers";
import { mentorGetControlCourseDetailsReducer } from "./reducers/mentorGetControlCourseDetailsReducers";
import { mentorCancelAppointmentReducer } from "./reducers/mentorCancelAppointmentReducers";
import { mentorAddNewAppointmentReducer } from "./reducers/mentorAddNewAppointmentReducers";
import { guardianGetChildrenReducer } from "./reducers/guardianGetChildrenReducers";
import { getBasicInfoForChildReducer } from "./reducers/getBasicInfoForChildReducers";
import { updateBasicInfoForChildReducer } from "./reducers/updateBasicInfoForChildReducers";
import { heroRegisterReducer } from "./reducers/heroRegisterReducers";
import { getSubscriptionsForChildReducer } from "./reducers/getSubscriptionsForChildReducers";
import { mentorDeleteAppointmentReducer } from "./reducers/mentorDeleteAppointmentReducers";
import { guardianGetBasicInfoReducer } from "./reducers/guardianGetBasicInfoReducers";
import { guardianUpdateBasicInfoReducer } from "./reducers/guardianUpdateBasicInfoReducers";

const rootReducer = combineReducers({
  courseList: courseListReducer,
  guardianRegister: guardianRegisterReducer,
  mentorRegister: mentorRegisterReducer,
  mentorDetails: mentorProfileDetailsReducer,
  mentorProfileCourses: mentorProfileCoursesReducer,
  courseDetails: courseDetailsReducer,
  guardianLogin: guardianLoginReducer,
  mentorLogin: mentorLoginReducer,
  heroLogin: heroLoginReducer,
  serviceList: serviceListReducer,
  mentorStatus: mentorStatusAvailabilityReducer,
  mentorBalance: mentorBalanceReducer,
  mentorBasicInfo: mentorBasicInfoReducer,
  mentorUpdateBasicInfo: mentorUpdateBasicInfoReducer,
  mentorCoursesDashboard: mentorCoursesDashboardReducer,
  mentorEditCourseDashboard: mentorEditCourseDashboardReducer,
  mentorUpdateEditCourseDashboard: mentorUpdateEditCourseDashboardReducer,
  mentorAddNewCourse: mentorAddNewCourseDashboardReducer,
  getReviews: getReviewsForExploreServiceReducer,
  // mentorStatusUpdate: mentorStatusUpdateAvailabilityReducer,
  mentorGetControlCourse: mentorGetControlCourseDetailsReducer,
  mentorCancelAppointment: mentorCancelAppointmentReducer,
  mentorAddNewAppointment: mentorAddNewAppointmentReducer,
  guardianGetChildren: guardianGetChildrenReducer,
  getBasicInfoForChild: getBasicInfoForChildReducer,
  updateBasicInfoForChild: updateBasicInfoForChildReducer,
  heroRegister: heroRegisterReducer,
  getSubscriptionsForChild: getSubscriptionsForChildReducer,
  mentorDeleteAppointment: mentorDeleteAppointmentReducer,
  guardianGetBasicInfo: guardianGetBasicInfoReducer,
  guardianUpdateBasicInfo: guardianUpdateBasicInfoReducer,
});

const guardianInfoFromStorage = localStorage.getItem("guardianInfo")
  ? JSON.parse(localStorage.getItem("guardianInfo"))
  : null;

const mentorInfoFromStorage = localStorage.getItem("mentorInfo")
  ? JSON.parse(localStorage.getItem("mentorInfo"))
  : null;

// const heroInfoFromStorage = localStorage.getItem("heroInfo")
//   ? JSON.parse(localStorage.getItem("heroInfo"))
//   : null;
const initialState = {
  guardianLogin: { guardianInfo: guardianInfoFromStorage },
  mentorLogin: { mentorInfo: mentorInfoFromStorage },
  // heroLogin: { heroInfo: heroInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
