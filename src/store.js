import { createStore, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import { courseListReducer } from "./reducers/courseListReducers";
import { guardianRegisterReducer } from "./reducers/guardianRegisterReducers";
import { mentorRegisterReducer } from "./reducers/mentorRegisterReducers";
const rootReducer = combineReducers({
  courseList: courseListReducer,
  guardianRegister: guardianRegisterReducer,
  mentorRegister: mentorRegisterReducer,
});

const guardianInfoFromStorage = localStorage.getItem("guardianInfo")
  ? JSON.parse(localStorage.getItem("guardianInfo"))
  : null;

const mentorInfoFromStorage = localStorage.getItem("mentorInfo")
  ? JSON.parse(localStorage.getItem("mentorInfo"))
  : null;

const initialState = {
  // guardianLogin: { guardianInfo: guardianInfoFromStorage },
  // mentorLogin: { mentorInfo: mentorInfoFromStorage },
};

const middleware = [thunk];
const store = createStore(
  rootReducer,
  initialState,
  composeWithDevTools(applyMiddleware(...middleware))
);

export default store;