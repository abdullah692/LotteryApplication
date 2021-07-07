import React from 'react'
import {Grid, Paper,Avatar,TextField,Button} from '@material-ui/core'
import ArrowForwardIosIcon from '@material-ui/icons/ArrowForwardIos';
import {Link} from 'react-router-dom'

export default function LoginScreen() {

    const paperStyle={padding:30 , height:'75vh',width:280, margin:"40px auto" }
    const text={ padding:'5px 0', margin: '25px 0'}
    const heading={fontFamily:'Sans-serif' , color: ""}
    const link={ textDecoration:'none'}
    return (
        <div>
             <Grid className="grid">
       <Paper elevation={10} style={paperStyle}>
<Grid align='center'>
    <h2 style={heading}>LOTTERY APP</h2>

    <TextField style={text} label="Username" variant="outlined" placeholder="Enter your Username" fullWidth required/>
 <TextField  style={text} label="Phone No " variant="outlined"  placeholder="Enter your Phone No" fullWidth required/>
<Link to='/Winner' style={link}>
<Button type="submit"  color="primary" variant="contained">CONTINUE <ArrowForwardIosIcon/></Button>
</Link>
</Grid>

</Paper>

</Grid>
        </div>
    )
}
