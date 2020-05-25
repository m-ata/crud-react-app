import React, { useState } from 'react';
// import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';
import { Typography, Button, Container, Grid } from '@material-ui/core';
import axios from 'axios';

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
        console.log(data);
        axios({
            url: 'http://dummy.restapiexample.com/api/v1/create',
            method: 'post',
            data: data
        }).then(
            res => {
                console.log(res);
            }
        ).catch(err => {
            console.log(err);
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
        </Container>
    )
}

export default CreateEmployee;