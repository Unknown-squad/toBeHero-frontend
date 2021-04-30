import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
import HomeScreen from "./screens/HomeScreen";
function App() {
  return (
    <Router>
      <Header></Header>
      <main>
        <Route path="/" component={HomeScreen} exact></Route>
      </main>
      <Footer></Footer>
    </Router>
  );
}

export default App;
