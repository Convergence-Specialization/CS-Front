import React from "react";
import About from "./About";
import Home from "./Home";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Proto from "./Proto";

function App() {
  return (
    <div>
      <ul>
        <li>
          <Link to="/">홈</Link>
        </li>
        <li>
          <Link to="/about">어바웃</Link>
        </li>
        <li>
          <Link to="/proto">Prototype</Link>
        </li>
      </ul>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/proto" component={Proto} />
    </div>
  );
}

export default App;
