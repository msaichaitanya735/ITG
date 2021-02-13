import React from 'react'
import {Route, BrowserRouter as Router} from 'react-router-dom'

//login components

//component
import LandingPage from "../components/landingpage";
import ListOfUsers from "../components/ListOfUsers";
import Register from "../components/Register";
import ConfirmTicket from "../components/confirmTicket";
import Dashboard from "../components/dashboard";
import Ticket from "../components/tickete"

const Loginroutes =()=>{
    return(
        <div>

        <Route exact path="/" component={LandingPage}/>
        <Route path="/register" component={Register}/>
        <Route path="/users" component={ListOfUsers}/>
        <Route path="/confirm" component={ConfirmTicket}/>
        <Route path="/dashboard" component={Dashboard}/>
        <Route path="/ticket" component={Ticket}/>
        </div>
    )
}
export default Loginroutes;