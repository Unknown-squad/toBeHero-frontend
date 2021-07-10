import { Route, Redirect } from "react-router-dom";

const GuardianPrivateRoute = ({
  component: Component,
  redirectRoute,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("guardianInfo") ? (
          <Component {...rest} />
        ) : (
          <Redirect to={redirectRoute} />
        )
      }
    />
  );
};
export default GuardianPrivateRoute;
