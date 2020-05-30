import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button, Container, Grid } from '@material-ui/core';
import axios from 'axios';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const CreateEmployee = () => {

    const [name, setName] = useState('');
    const [salary, setSalary] = useState('');
    const [age, setAge] = useState('');

    const add = () => {
        const data = {
            name: name,
            salary: salary,
            age: age
        }
        axios({
            url: 'http://localhost:4000/create',
            method: 'post',
            data: data
        }).then(
            res => {
                console.log(res);
                toast.success('Employee added successfully')
            }
        ).catch(err => {
            console.log(err);
            toast.error('There is something went wrong while adding employee');
        })
    }

    return (
        <Container >
            <Grid container spacing={3} >
                <Grid item xs={4}>
                    <Typography component={'div'} >
                        <TextField label="Name" variant="outlined" onChange={(e) => setName(e.target.value)} />
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography component={'div'} >
                        <TextField label="Salary" variant="outlined" onChange={(e) => setSalary(e.target.value)} />
                    </Typography>
                </Grid>
                <Grid item xs={4}>
                    <Typography component={'div'} >
                        <TextField label="Age" variant="outlined" onChange={(e) => setAge(e.target.value)} />
                    </Typography>
                </Grid>
            </Grid>
            <Grid container>
                <Typography component={'div'} >
                    <Button color={'primary'} variant={'contained'} onClick={add} >Add</Button>
                </Typography>
            </Grid>
            <ToastContainer />
        </Container>
    )
}

export default CreateEmployee;