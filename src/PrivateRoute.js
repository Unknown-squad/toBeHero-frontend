import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component, handleChildFunc, ...rest }) => {
  return (
    <Route
      {...rest}
      render={(props) =>
        localStorage.getItem("mentorInfo") ? (
          <Redirect to="/explore" />
        ) : localStorage.getItem("guardianInfo") ? (
          <Redirect to="/explore" />
        ) : localStorage.getItem("heroInfo") ? (
          <Redirect to="/hero/home" />
        ) : (
          <Component {...props} handleChildFunc={handleChildFunc} />
        )
      }
    />
  );
};
export default PrivateRoute;
