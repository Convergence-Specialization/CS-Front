import React from 'react';
import About from './About';
import Home from './Home';
import { Route } from 'react-router-dom';
import {Link} from 'react-router-dom';

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
    </ul>
    <Route path="/" component={Home} exact />
    <Route path="/about" component={About} />
  </div>
  );
}

export default App;