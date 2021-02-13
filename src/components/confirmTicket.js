import  React,{Fragment,Component,useState} from 'react' 
import "./css/confirm.css"
import {useHistory} from 'react-router-dom'
import { render } from '@testing-library/react';


const ConfirmTicket=()=>{

  let history = useHistory();
	const routeChange=()=>{
		let path=`/ticket`;
		history.push(path)
	}
  const start=localStorage.getItem('start')
	const destination=localStorage.getItem('destination')
	const name=localStorage.getItem('name')
	const age=localStorage.getItem('age')
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
  const no_of_stops = Math.abs(enddist.id-startdist.id)
  console.log(no_of_stops)
	var distance=Math.abs( enddist.dist-startdist.dist)
	distance= distance.toPrecision(2); 
	var fare=distance*2.5;
	if(fare>30){
		fare=30
	}
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
		const token = Math.floor(Math 
		.random() * (maxm - minm + 1)) + minm; 
		console.log(token)
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
  const onSubmitForm= async e=>{
    try {
        const body={name,start,destination, fare, token}
        const response= await fetch("http://localhost:5000/ticket",{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(body)
        })
        console.log(response)
    } catch (err) {
        console.log(err.message)
    }
    let path='/ticket'
    history.push(path)

}



    return(

        <div class="c-mobile-view">
        
        <div class="c-mobile-view__inner">
          <div class="c-mobile__topbar">
          </div>
      
          <div class="c-cards__inner">
            <h2> From <h1>{ start}</h1> To <h1>{destination}</h1> </h2>
            <h2> Total Distance: {distance}Km </h2>
            <h2> Total Fare: Rs {fare}/-</h2>
            <div class="c-card c-card--back">
              <div class="c-card__details">
                <div class="c-card__details__top">
                  <h1>{destination}</h1>
                  <p></p>
                  <p>40.782093, -73.971731</p>
                </div>
                <div class="c-card__details__bottom">{ft}</div>
              </div>
            </div>
            <div class="c-card c-card--front">
              <div class="c-card__details">
                <div class="c-card__details__top">
                  <h1>Get Down After Stops: {no_of_stops}</h1>
                  <p>{start}</p>
                  <p>17.3853,78.5278</p>
                </div>
                <div class="c-card__details__bottom">{distance}<span>km</span></div>
              </div>
            </div>
      
            <div class="c-pin"></div>
          </div>
        </div>
      
        <div class="c-overlay">
          <div class="c-overay__inner">
            <label for="u-mobile__button" class="c-button">
                <span class="c-overlay-inner__button fa fa-star button__1"></span>
              </label>
            <label for="u-mobile__button" class="c-button">
                <span class="c-overlay-inner__button fa fa-search button__2"></span>
              </label>
          </div>
        </div>
      
        <label for="u-cards-switcher__button" class="c-button c-switcher__button">
            <span class="c-switcher__button--cards fa fa-refresh"></span>
        </label>
      
        <label for="u-cards-hide__button" class="c-button c-show__button">
            <span class="c-show__button--cards fa fa-eye"></span>
        </label>
        <label for="u-cards-hide__button" class="c-button c-hide__button">
            <span class="c-hide__button--cards fa fa-eye-slash"></span>
        </label>
      
        <label for="u-mobile__button" class="c-button c-mobile__button "onClick={onSubmitForm}>
            
                <span>BUY</span><span class="c-mobile__button__plus fa fa-plus">
            </span>
        </label>
        
       
      </div>

    )
 
}
 

export default ConfirmTicket