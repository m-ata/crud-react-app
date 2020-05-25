import React from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEmployee from './components/CreateEmployee';
import Employees from './components/Employees';

function App() {
  return (
    <React.Fragment>
      <div className="App">
        Welcome to Employee CRUD App
    </div>
      <CreateEmployee />
      <Employees />
    </React.Fragment>
  );
}

export default App;
