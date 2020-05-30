const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Where we will keep books
let employees = [
    // {
    //     "id": 0,
    //     "name": "Muhammad Ata",
    //     "salary": 10000,
    //     "age": 24
    // },
    // {
    //     "id": 1,
    //     "name": "Muhammad Usama Qureshi",
    //     "salary": 4000,
    //     "age": 24
    // },
    // {
    //     "id": 2,
    //     "name": "Abdur Rehman Khan",
    //     "salary": 8000,
    //     "age": 24
    // }
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/create', (req, res) => {
    const employee = {
        id: employees.length,
        name: req.body.name,
        salary: req.body.salary,
        age: req.body.age
    };
    employees.push(employee);
    res.json({
        data: employees,
        msg: 'Employee added successfully'
    });
});

app.get('/employees', (req, res) => {
    res.json(employees);;
});

app.delete('/delete/:id', (req, res) => {
    const employee = employees.find(emp => emp.id === Number(req.params.id));
    console.log(employee);
    const index = employees.indexOf(employee);
    console.log(index);
    employees.splice(index, 1);
    console.log(employees);
    res.json({
        data: employees,
        msg: 'Employee deleted successfully'
    });
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));