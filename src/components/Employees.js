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
import DeleteIcon from "@material-ui/icons/Delete";
import IconButton from '@material-ui/core/IconButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Employees = (props) => {

    const {
        data
    } = props;

    const classes = useStyles();

    const handleDelete = (id) => {
        axios({
            url: `http://dummy.restapiexample.com/api/v1/delete/${id}`,
            method: 'delete',
        }).then(
            res => {
                debugger;
                if (res.data) {
                    toast.success(res.data.message)
                }
            }
        ).catch(err => {
            console.log(err);
        })
    }

    return (
        <TableContainer component={Paper}>
            <Table className={classes.table} aria-label="employee table">
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Salary</TableCell>
                        <TableCell >Age</TableCell>
                        <TableCell >Delete</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        data && data.map((value) => (
                            <TableRow key={value.id}>
                                <TableCell>{value.name}</TableCell>
                                <TableCell >{value.salary}</TableCell>
                                <TableCell>{value.age}</TableCell>
                                <TableCell>
                                    <IconButton
                                        onClick={() => handleDelete(Number(value.id))}
                                    >
                                        <DeleteIcon />
                                    </IconButton>
                                </TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
};
export default Employees;