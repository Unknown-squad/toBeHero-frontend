import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectRoute, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.getItem("heroInfo") &&
        !localStorage.getItem("guardianInfo") &&
        !localStorage.getItem("mentorInfo") ? (
          <Component {...rest} />
        ) : (
          <Redirect to="/" />
        )
      }
    />
  );
};
export default PrivateRoute;
