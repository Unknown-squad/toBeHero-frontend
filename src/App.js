import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Footer from "./components/Footer";
import Header from "./components/Header";
function App() {
  return (
    <Router>
      <Header></Header>
      <Footer></Footer>
    </Router>
  );
}

export default App;
