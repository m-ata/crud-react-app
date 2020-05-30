import React, { useState, useEffect } from 'react';
import axios from 'axios';
//material imports
import { makeStyles } from '@material-ui/core/styles';
import Container from '@material-ui/core/Container';
import Grid from '@material-ui/core/Grid';
import TextField from '@material-ui/core/TextField';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import Table from '@material-ui/core/Table';
import TableBody from '@material-ui/core/TableBody';
import TableCell from '@material-ui/core/TableCell';
import TableContainer from '@material-ui/core/TableContainer';
import TableHead from '@material-ui/core/TableHead';
import TableRow from '@material-ui/core/TableRow';
import Paper from '@material-ui/core/Paper';
import DeleteIcon from "@material-ui/icons/Delete";
import BorderColorSharpIcon from '@material-ui/icons/BorderColorSharp';
import IconButton from '@material-ui/core/IconButton';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const useStyles = makeStyles({
    table: {
        minWidth: 650,
    },
});

const Employees = () => {

    const [data, setData] = useState([]);
    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');
    const [fetchData, setFetchData] = useState(true);

    const classes = useStyles();

    useEffect(() => {
        if(fetchData) {
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
        }
    }, [fetchData]);

    const handleDelete = (id) => {
        setFetchData(false);
        axios({
            url: `http://localhost:4000/delete/${id}`,
            method: 'delete',
        }).then(
            res => {
                if (res.status === 200 && res.data.data.length > 0) {
                    setFetchData(true);
                    toast.success(res.data.msg);
                }
            }
        ).catch(err => {
            console.log(err);
        })
    }

    const add = () => {
        const data = {
            name: name,
            salary: salary,
            age: age
        }
        setFetchData(false);
        axios({
            url: 'http://localhost:4000/create',
            method: 'post',
            data: data
        }).then(
            res => {
                if (res.status === 200 && res.data.data.length > 0) {
                    setFetchData(true);
                    initForm();
                    toast.success(res.data.msg);
                }
            }
        ).catch(err => {
            console.log(err);
            toast.error('There is something went wrong while adding employee');
        })
    }

    const initForm = () => {
        setName('');
        setAge('');
        setSalary('');
    }

    return (
        <Container>
            <Grid container spacing={3} >
                <Grid item xs={3}>
                    <Typography component={'div'} >
                        <TextField label="Name" variant="outlined" value={name} onChange={(e) => setName(e.target.value)} />
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component={'div'} >
                        <TextField label="Salary" variant="outlined" value={salary} onChange={(e) => setSalary(e.target.value)} />
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component={'div'} >
                        <TextField label="Age" variant="outlined" value={age} onChange={(e) => setAge(e.target.value)} />
                    </Typography>
                </Grid>
                <Grid item xs={3}>
                    <Typography component={'div'} >
                        <Button color={'primary'} variant={'contained'} onClick={add} >Add</Button>
                    </Typography>
                </Grid>
            </Grid>
            <Grid container >
                <TableContainer component={Paper}>
                    <Table className={classes.table} aria-label="employee table">
                        <TableHead>
                            <TableRow>
                                <TableCell>Name</TableCell>
                                <TableCell>Salary</TableCell>
                                <TableCell >Age</TableCell>
                                <TableCell >Update</TableCell>
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
                                            // onClick={() => handleDelete(Number(value.id))}
                                            >
                                                <BorderColorSharpIcon />
                                            </IconButton>
                                        </TableCell>
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
            </Grid>
            <ToastContainer />
        </Container>
    )
};
export default Employees;