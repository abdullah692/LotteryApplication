import React ,{useState} from 'react'
import {Grid, Paper,Avatar,TextField,Button,Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
import {Link} from 'react-router-dom'

const paperStyle={padding:30 , height:'75vh',width:280, margin:"40px auto" }
    const avatar={backgroundColor:'#7ec37e'}
    const btnstyle={margin:"40px 0"}
    const link={ textDecoration:'none'}
    
    export default function SignUp(){

    const [user,setUser]=useState('');
    const [password , setPassword]=useState('');

 const handleForm=(e)=>{
 e.preventDefault();
 }
    return (
        <div>
            <Grid>
       <Paper elevation={10} style={paperStyle}>

        <Grid align='center'>
            <Avatar style={avatar}><LockOutlinedIcon/></Avatar>
      <h2>Sign Up</h2> 
      </Grid>
      <TextField label="Username" name="username" value={user} type="text" placeholder="Enter your Username" autoComplete="off" fullWidth required/>
      <TextField label="Password" name="password" value={password} type="password" placeholder="Enter your Password"   autoComplete="off" fullWidth required/>
      
     
      <Button type="submit"  color="primary" variant="contained" 
       style={btnstyle} fullWidth onClick={handleForm} >SIGN UP</Button>
 
 
         
          <Typography> Already have an Account?
      <Link to='/' style={link}>
    <br/>SignIn
  </Link>
          </Typography>
      
</Paper>
        </Grid>

        </div>
    )
}
