import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
function App() {
  return (
    <Router>
      <Route path="/login" component={LoginScreen}></Route>
      {/* <Route path="/register" component={RegisterScreen}></Route> */}
      <Route path="/" component={HomeScreen} exact></Route>
    </Router>
  );
}

export default App;
