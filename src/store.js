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
});

const guardianInfoFromStorage = localStorage.getItem("guardianInfo")
  ? JSON.parse(localStorage.getItem("guardianInfo"))
  : null;

const mentorInfoFromStorage = localStorage.getItem("mentorInfo")
  ? JSON.parse(localStorage.getItem("mentorInfo"))
  : null;

const heroInfoFromStorage = localStorage.getItem("heroInfo")
  ? JSON.parse(localStorage.getItem("heroInfo"))
  : null;
const initialState = {
  guardianLogin: { guardianInfo: guardianInfoFromStorage },
  mentorLogin: { mentorInfo: mentorInfoFromStorage },
  heroLogin: { heroInfo: heroInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;
