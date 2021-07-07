import React from 'react'
import { Grid, Paper, Avatar, TextField, Button, Typography } from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import { Link } from 'react-router-dom'
import { useState } from 'react'
import { db } from './Firebase';
import fire from './Firebase'


const Login = () => {

    const paperStyle = { padding: 30, height: '75vh', width: 280, margin: "40px auto" }
    const avatar = { backgroundColor: '#7ec37e' }
    const btnstyle = { margin: "40px 0" }
    const link = { textDecoration: 'none' }
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [allEntry, setallEntry] = useState([]);

    const formSubmit = (e) => {
        e.preventDefault();


        const newEntry = { user: user, password: password }
        setallEntry([...allEntry, newEntry])
        console.log(newEntry);

        db.collection("testing").add({
            test: "1"
        })





    }




    return (
        <Grid>
            <Paper elevation={10} style={paperStyle}>

                <Grid align='center'>
                    <Avatar style={avatar}><LockOutlinedIcon /></Avatar>
                    <h2>Sign In</h2>
                </Grid>
                <form onSubmit={formSubmit}>
                    <TextField label="Username" name="email" type="text"
                        onChange={(e) => setUser(e.target.value)} value={user}
                        autoComplete='off' placeholder="Enter your Username" fullWidth required />
                    <TextField label="Password" name="password" type="password" value={password} placeholder="Enter your Password"
                        onChange={(e) => setPassword(e.target.value)} fullWidth required autoComplete='off' />

                    {/* <Link to='/LoginScreen' style={link}> */}
                    <Button type="submit" color="primary" variant="contained" style={btnstyle} fullWidth  >SIGN IN</Button>
                    {/* </Link> */}
                    <Typography> Do you have an Account?
                        <Link to="/SignUp" style={link}>
                            <br />SignUp
                        </Link>
                    </Typography>
                </form>
            </Paper>
        </Grid>
    )
}
export default Login