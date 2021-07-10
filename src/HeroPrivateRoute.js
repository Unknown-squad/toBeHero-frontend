import { Route, Redirect } from "react-router-dom";

const HeroPrivateRoute = ({ component: Component, redirectRoute, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("heroInfo") ? (
          <Component {...rest} />
        ) : (
          <Redirect to={redirectRoute} />
        )
      }
    />
  );
};
export default HeroPrivateRoute;
