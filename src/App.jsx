import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import HomePage from "./pages/HomePage/HomePage";
import Projects from "./pages/Projects/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <Route exact path="/" component={HomePage} />
        <Route path="/Projects" component={Projects} />
      </Router>
    </div>
  );
}

export default App;
