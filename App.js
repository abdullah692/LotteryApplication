import logo from './logo.svg';
import './App.css';
import './Components/Background.css'
import SignUp from './Components/SignUp'
import Login from './Components/Login'
import LoginScreen from './Components/LoginScreen'
import Winner from './Components/Winnner'
import {BrowserRouter as Router, Switch,Route} from 'react-router-dom'
import LivePopup from './Components/LivePopup';
import WinnerPopup from './Components/WinnerPopup';
import React ,{useState,useEffect} from 'react'
import fire from './Components/Firebase'
import User from './Components/User' 
// import Firebase from './Components/Firebase'



function App() {
 
  return (
    <div className="App">
{/* <User/> */}
{/* <Login/>
<LoginScreen/>
<Winner/>
<SignUp/> */}
<Router>
  <Switch>
  <Route path='/' exact component={Login}/>
  <Route path='/SignUp'  component={SignUp}/>
  <Route path='/LoginScreen'  component={LoginScreen}/>
  <Route path='/Winner' component={Winner}/>
  <Route path='/Live' component={LivePopup}/>
  <Route path='/WinMonth'component={WinnerPopup}/>
  </Switch>
  </Router>

</div>
  );
}

export default App;
