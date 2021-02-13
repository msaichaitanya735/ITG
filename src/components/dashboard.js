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


// class Dashboard extends React.Component {
//     async componentDidMount() {
//         try {
         
//           const result = await fetch('http://localhost:5000/dash');
//           const json = await result.json();
//           console.log(json);
         
//         } catch(ex) {
//           console.log(ex);
//         }
//       }
      

//     render(){
//         return (
//         <Stoplist/>
//       )
// }
// }
// export default Dashboard;


// import React,{Component} from 'react'
// import {useHistory} from 'react-router-dom'
// import GoogleMapReact from 'google-map-react';
// import "./css/dashboard.css"


// const AnyReactComponent = ({ text }) => <div>{text}</div>;
 
// class Dashboard extends Component {
//   static defaultProps = {
//     center: {
//       lat: 59.95,
//       lng: 30.33
//     },
//     zoom: 11
//   };
 
//   render() {
//     return (
//       <div style={{ height: '100vh', width: '100%' }}>
//         <GoogleMapReact
//           // bootstrapURLKeys={{ key: AIzaSyCi2iXETJYqtMJVLqEw8vqgKKnoNwJOOmU}}
//           defaultCenter={this.props.center}
//           defaultZoom={this.props.zoom}
//         >
//           <AnyReactComponent
//             lat={59.955413}
//             lng={30.337844}
//             text="My Marker"
//           />
//         </GoogleMapReact>
//       </div>
//     );
//   }
// }

 
export default Dashboard;
