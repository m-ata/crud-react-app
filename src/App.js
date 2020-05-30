import React, {useState, useEffect} from 'react';
import logo from './logo.svg';
import './App.css';
import CreateEmployee from './components/CreateEmployee';
import Employees from './components/Employees';
import axios from 'axios';

const App = () => {

  const [data, setData] = useState([]);

  useEffect(() => {
    axios({
        url: 'http://localhost:4000/employees',
        method: 'get',
    }).then(
        res => {
            if(res.status === 200 && res.data.length > 0) {
                setData(res.data);
            }
        }
    ).catch(err => {
        console.log(err);
    })
}, []);

  return (
    <React.Fragment>
      <div className="App">
        Welcome to Employee CRUD App
    </div>
      <CreateEmployee />
      <Employees data={data} />
    </React.Fragment>
  );
}

export default App;
