import { Route, Redirect } from "react-router-dom";

const MentorPrivateRoute = ({
  component: Component,
  redirectRoute,
  ...rest
}) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("mentorInfo") ? (
          <Component {...rest} />
        ) : (
          <Redirect to={redirectRoute} />
        )
      }
    />
  );
};
export default MentorPrivateRoute;
