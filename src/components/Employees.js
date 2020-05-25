import React, { useState, useEffect } from 'react';
import axios from 'axios';
//material imports
import { makeStyles } from '@material-ui/core/styles';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Employees = () => {

    const [data, setData] = useState([]);
    const classes = useStyles();

    useEffect(() => {
        axios({
            url: 'http://dummy.restapiexample.com/api/v1/employees',
            method: 'get',
        }).then(
            res => {
                if (res.data && res.data.data.length > 0) {
                    setData(res.data.data);
                    console.log(res.data.data);
                }
            }
        ).catch(err => {
            console.log(err);
        })
    }, []);

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="employee table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell >Age</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {data.map((value) => (
                        <TableRow key={value.id}>
                            <TableCell>{value.employee_name}</TableCell>
                            <TableCell >{value.employee_salary}</TableCell>
                            <TableCell>{value.employee_age}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    )
};
export default Employees;