import React from 'react';
import './App.css';
import {Link} from 'react-router-dom';
import routes from './routes';

const App = () => {

  return (
    <div className="App">
      <h1>Light Life Wellness</h1>
      <Link to="/about">About</Link>
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;