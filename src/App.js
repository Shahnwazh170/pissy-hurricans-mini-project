// CSS Files
import "./assets/css/App.css";
import "antd/dist/antd.css";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Register from "./pages/Register";

// ANTD Components
import { Component, useState } from "react";


// React Components
import { Link, Route, BrowserRouter as Router, Switch } from "react-router-dom";

// Custom Components
import Navbar from "./components/Navbar";


const App = () => {
  const [current, setCurrent] = useState("mail");

  const handleClick = (e) => {
    console.log("click ", e.key);
    setCurrent(e.key);
  };

  return (
    <Router>
      <div className="App">
        <Navbar />
       
        <div className="main">
          <Switch>
            <Route exact path="/" component={Home} />
            <Route exact path="/about" component={About} />
            <Route exact path="/register" component={Register} />
          </Switch>
        </div>
      </div>
    </Router>
  );
};

export default App;
