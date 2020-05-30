const express = require('express')
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = 4000;

// Where we will keep books
let employees = [
    {
        "id": 0,
        "name": "Muhammad Ata",
        "salary": 10000,
        "age": 24
    },
    {
        "id": 1,
        "name": "Muhammad Usama Qureshi",
        "salary": 4000,
        "age": 24
    },
    {
        "id": 2,
        "name": "Abdur Rehman Khan",
        "salary": 8000,
        "age": 24
    }
];

app.use(cors());

// Configuring body parser middleware
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.post('/create', (req, res) => {
    const employee = req.body;
    employee.id = employees.length;
    employees.push(employee);
});

app.get('/employees', (req, res) => {
    res.json(employees);;
});

app.listen(port, () => console.log(`Hello world app listening on port ${port}!`));