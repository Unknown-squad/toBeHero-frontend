import { Route, Redirect } from "react-router-dom";

const PublicRoute = ({ component: Component, redirectRoute, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        !localStorage.getItem("heroInfo") &&
        !localStorage.getItem("guardianInfo") &&
        !localStorage.getItem("mentorInfo") ? (
          <Redirect to={redirectRoute} />
        ) : null
      }
    />
  );
};
export default PublicRoute;
