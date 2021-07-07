import React, { useEffect } from 'react'
import { db } from './Firebase'
import { Paper } from '@material-ui/core'
import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import {Link} from 'react-router-dom'


const paperStyle={padding:30 , height:'80vh',width:"80%", margin:"40px auto"}
const heading={textAlign: ' center'}
const link={ textDecoration:'none', color:'black'}
function WinnerPopup() {
const [winnerData,getWinnerData] = React.useState([""])
    try {
        
        useEffect(() => {
            db.collection("Winner").onSnapshot(snapshot => getWinnerData(snapshot.doc.map (doc => doc.data())))
        }, [])


    } catch (error) {
        
    }
    console.log(winnerData)


    return (
        <div>
        <div>
            <Paper elevation={10} style={paperStyle}>
              <Link to='/Winner' style={link}> <ArrowBackIcon/></Link> 
           <h2 style={heading}>Showing the Winner People</h2>
            </Paper>
        </div> 
        </div>
    )
}

export default WinnerPopup
