import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, redirectRoute, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("mentorInfo") ? (
          <Redirect to={redirectRoute} />
        ) : (
          <Component {...props} />
        )
      }
    />
  );
};
export default PrivateRoute;
