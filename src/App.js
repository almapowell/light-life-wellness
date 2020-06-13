import React from 'react';
import './App.css';
import routes from './routes';
import Header from './components/Header';

const App = () => {

  return (
    <div className="App">
      <Header />
      <div>
        {routes}
      </div>
    </div>
  );
}

export default App;