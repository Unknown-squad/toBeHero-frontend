import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomeScreen from "./screens/HomeScreen";
import LoginScreen from "./screens/LoginScreen";
import HeroLoginScreen from "./screens/HeroLoginScreen";
function App() {
  return (
    <Router>
      <Route path="/login" component={LoginScreen} exact></Route>
      <Route path="/login/hero" component={HeroLoginScreen} exact></Route>
      <Route path="/login/guardian" component={LoginScreen} exact></Route>
      <Route path="/login/mentor" component={LoginScreen} exact></Route>
      <Route path="/" component={HomeScreen} exact></Route>
    </Router>
  );
}

export default App;
