import React from 'react';
import './App.css';
import Employees from './components/Employees';

const App = () => {
  return (
    <React.Fragment>
      <div className="App">
        Welcome to Employee CRUD App
    </div>
      <Employees />
    </React.Fragment>
  );
}

export default App;
