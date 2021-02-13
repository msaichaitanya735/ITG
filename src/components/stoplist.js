import React, { useState } from "react";
import './css/select.css'
import {useHistory} from 'react-router-dom'

import axios from "axios";
import {
  Button,
  Col,
  Row,
  Container,
  InputGroup,
  FormControl,
} from "react-bootstrap";

 const Stoplist=()=>{

  const[start,setStart]=useState("")
  const[dest,setDest]=useState("")
  let history = useHistory();
	const routeChange=()=>{
		let path=`/confirm`;
		history.push(path)
	}
const onStart=e=>{
  localStorage.setItem('start',e.target.value)
  setStart(e.target.value)
  
}
const a=localStorage.getItem("start")
console.log(a)

const onDestination=e=>{
  localStorage.setItem('destination',e.target.value)
  setDest(e.target.value)

}
const b=localStorage.getItem("destination")
console.log(b)

    return (

      <div>

 <h1 class="ip" style={{marginLeft:"5%"}}>Start</h1>
<div class="box">
<select class="linput" onChange={onStart}>
      <option >Select Start Point</option>
    <option>Uppal</option>
    <option>Ramanthapur</option>
    <option>HPS</option>
    <option> Amberpet </option>
    <option>Tilak Nagar</option>
    <option>Barkatpura</option>
    <option>Narayanaguda</option>
    <option>HimayatNagar</option>
    <option>Masab Tank</option>
    <option>Mehdipatnam</option>
  </select>
</div>
<h1 class="ip" style={{marginLeft:"5%"}}>Destination</h1>
<div class="box">
<select class="linput" onChange={onDestination} >
      <option>Select Destination</option>
      <option>Uppal</option>
    <option>Ramanthapur</option>
    <option>HPS</option>
    <option> Amberpet </option>
    <option>Tilak Nagar</option>
    <option>Barkatpura</option>
    <option>Narayanaguda</option>
    <option>HimayatNagar</option>
    <option>Masab Tank</option>
    <option>Mehdipatnam</option>
  </select>
</div>
<br/>
<br/>
			<button onClick={routeChange} class="lbutton" style={{marginLeft:"40%",marginRight:"40%"}}>Go Next</button>

      
      </div>
  )

}


export default Stoplist;
