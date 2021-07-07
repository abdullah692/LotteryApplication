import React from 'react'
import {Grid, Paper,Avatar,TextField,Button,Typography} from '@material-ui/core'
import LockOutlinedIcon from '@material-ui/icons/LockOutlined';
export default function SignIn(props) {
    const paperStyle={padding:30 , height:'75vh',width:280, margin:"40px auto" }
    const avatar={backgroundColor:'#7ec37e'}
    const btnstyle={margin:"40px 0"}
    const {email,
        setEmail,
        password,
        setPassword,
        handleLogin,
        handleSignup,
        hasAccount,
        setHasAccount, 
        emailError, 
        passwordError}=props;

    return (
        <div>
            <Grid>
       <Paper elevation={10} style={paperStyle}>

        <Grid align='center'>
            <Avatar style={avatar}><LockOutlinedIcon/></Avatar>
      <h2>Sign In</h2> 
      </Grid>
      
    <TextField label="Username" type="text" value={email} onchange={(e)=>setEmail(e.target.value)}placeholder="Enter your Username" fullWidth required/>
    <p>{emailError}</p>
      <TextField label="Password" type="password"  value={password} onchange={(e)=>setPassword(e.target.value)} placeholder="Enter your Password" fullWidth required/>
     
     <div>
         {hasAccount ? (
<>
<Button type="submit"  color="primary"  variant="contained" style={btnstyle} fullWidth onclick={handleLogin} >SIGN IN</Button>
       <p>Don't have an Account <span onClick={()=>setHasAccount(!hasAccount)}>Sign Up</span></p>
        </>
         ):(
             <>
             <Button type="submit"  color="primary"  variant="contained" style={btnstyle} fullWidth onclick={handleSignup} >SIGN UP</Button>
             <p>Already have an Account <span onClick={()=>setHasAccount(!hasAccount)}>Sign In</span></p>

             </>
         )
})
     
      </div>
        
</Paper>
        </Grid>
        </div>
    )
}
