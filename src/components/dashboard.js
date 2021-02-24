import  React,{Fragment,Component,useState} from 'react' 
import {useHistory} from 'react-router-dom'
import axios from "axios";
import Stoplist from "./stoplist"
import { render } from '@testing-library/react';
import GoogleMap from 'react-google-maps'
import GoogleMapReact from 'google-map-react';


const Dashboard=()=>{
  const n=localStorage.getItem('name');
  console.log(n)
  render(
    console.log("hello")
  )
  return(
    <div class="lbody">
    <div class="dcontainer">
    <h1 style={{textAlign:"center"}}> Welcome {n}!</h1>
      <Stoplist/>
    </div>
    </div>
  )
}

export default Dashboard;

