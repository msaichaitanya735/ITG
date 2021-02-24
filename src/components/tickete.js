import  React,{Fragment,useState} from 'react' 
import Barcode from './barcode.png'
import './css/ticket.css'
const Ticket=()=>{
	const start=localStorage.getItem('start')
	const destination=localStorage.getItem('destination')
	const name=localStorage.getItem('name')
	const age=localStorage.getItem('age')
	const token=localStorage.getItem('token')
	const bus=[
		{
			"id": "1",
			"name": "Uppal",
			"lat": "17.40097000",
			"lng": "78.55996700",
			"dist": "0"
		},
		{
			"id": "2",
			"name": "Ramanthapur",
			"lat": "17.40111800",
			"lng": "78.54550300",
			"dist": "1.5"
		},
		{
			"id": "4",
			"name": "Amberpet",
			"lat": "17.39250000",
			"lng": "78.51920000",
			"dist": "4.7"
		},
		{
			"id": "5",
			"name": "Tilak Nagar",
			"lat": "17.39420000",
			"lng": "78.50850000",
			"dist": "6.5"
		},
		{
			"id": "6",
			"name": "Barkatpura",
			"lat": "17.39200000",
			"lng": "78.49690000",
			"dist": "7.4"
		},
		{
			"id": "7",
			"name": "Narayanaguda",
			"lat": "17.39750000",
			"lng": "78.49220000",
			"dist": "8.8"
		},
		{
			"id": "8",
			"name": "HimayatNagar",
			"lat": "17.40210000",
			"lng": "78.48400000",
			"dist": "9.1"
		},
		{
			"id": "9",
			"name": "Masab Tank",
			"lat": "17.40330000",
			"lng": "78.45290000",
			"dist": "13"
		},
		{
			"id": "3",
			"name": "HPS",
			"lat": "17.39930000",
			"lng": "78.53730000",
			"dist": "3.4"
		},
		{
			"id": "10",
			"name": "Mehdipatnam",
			"lat": "17.39580000",
			"lng": "78.43120000",
			"dist": "16"
		}
	] 
	const startdist = bus.find(startdist=>startdist.name===start)
	const enddist =bus.find(enddist=>enddist.name===destination)
	console.log(startdist)
	console.log(enddist)
	console.log(destination)
	var distance=Math.abs( enddist.dist-startdist.dist)
	distance= distance.toPrecision(2); 
	const fare=localStorage.getItem('fare')

	var today = new Date();
	var year = today.getFullYear();
	var mes = today.getMonth()+1;
	var dia = today.getDate();
	var fecha =dia+"/"+mes+"/"+year;
	var h = today.getHours();
	var m = today.getMinutes();
	if(h>12)
	var time = (h-12)+":"+m+"pm";
	else
	var time=h+":"+m+"am"
	console.log(time)
	console.log(fecha);
		var minm = 100000000; 
		var maxm = 999999999; 
		
	const x=distance*4
    var d2 = new Date ( today );
d2.setMinutes ( today.getMinutes() + x );
var dh = d2.getHours();
	var dm = d2.getMinutes();
	if(h>12)
	var ft = (dh-12)+":"+dm+"pm";
	else
	var ft=dh+":"+dm+"am"
console.log(d2)

 
	
    return(
      <div class="main">
	

	<h3 class="th5" style={{textAlign:"center"}}>Ticket Pass</h3>
	<div class="pass">
	<div class="shipping-info-head">
		<h6 class="th6">Start</h6>
		<h6 class="th6">Destination</h6>
	</div>
	<div class="shipping-info-head1">
		<h2 class="th2">{start}	</h2>
		<h2 class="th2">{destination}</h2>
	</div>
<br/>

	<div class="shipping-info-head2">
		<p>{time}</p>
		<p>{ft}</p>
	</div>
		
	</div>
	
	<div class="circle"></div>
	<h1 class="th1">{name}</h1>
	
	<div class="shipping-info-head3">
		<p>Fare</p>
		<p>Distance</p>
	</div>
	
	<div class="shipping-info-head4">
		<p>RS {fare}/-</p>
		<p>{distance}Km</p>
	</div>
	
	<div class="shipping-info-head5">
		<p>Date</p>
		<p>Ticket Number</p>
	</div>
	
	<div class="shipping-info-head6">
		<p>{fecha}</p>
		<p>{token}</p>
	</div>
<br/>
<br/>
<br/>

	<div class="barcode"></div>
</div>
    )
}
export default Ticket;


