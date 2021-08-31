import "./App.css";
import Home from "./Home";
import About from "./About";
import { Link, Route, BrowserRouter as Router , Switch } from "react-router-dom";

const App = () => {
  return (
    <Router>
      <div className="App">
        <header className="App-header">
          <div>
            <h2>Welcome to React Router Tutorial</h2>
            <nav className="navbar navbar-expand-lg navbar-light bg-light">
              <ul className="navbar-nav mr-auto">
                <li>
                  <Link to={"/"} className="nav-link">
                    Home
                  </Link>
                </li>

                <li>
                  <Link to={"/about"} className="nav-link">
                    About
                  </Link>
                </li>
              </ul>
            </nav>
            <hr />
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/about" component={About} />
            </Switch>
          </div>
        </header>
      </div>
    </Router>
  );
};

export default App;
