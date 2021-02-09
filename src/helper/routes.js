import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

//login components

//component
import LandingPage from "../components/landingpage";
import ListOfUsers from "../components/ListOfUsers";
import Register from "../components/Register";

const Loginroutes =()=>{
    return(
        <div>
        <Route exact path="/" component={LandingPage}/>
        <Route path="/register" component={Register}/>
        <Route path="/users" component={ListOfUsers}/>
        </div>
    )
}
export default Loginroutes;