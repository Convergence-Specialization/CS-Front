import React from "react";
import About from "./About";
import Home from "./Home";
import { Route } from "react-router-dom";
import { Link } from "react-router-dom";
import Proto from "./Proto";
import JunHa from "./Test_Branches/JunHa";


function App() {
  return (
    <div>
      <Route path="/" component={Home} exact />
      <Route path="/about" component={About} />
      <Route path="/proto" component={Proto} />
      <Route path="/test">
        <JunHa />
      </Route>
      
    </div>
  );
}

export default App;
