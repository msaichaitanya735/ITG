import React from "react";
import "./css/template.css";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";

export default class Template extends React.Component {
  render(props) {
    const {  name } = this.props.template;

    return (
        <div>
           <h1>{name}</h1> 
           <h2></h2>
           

        </div>
    //   <div
    //     style={{ textAlign: "center" }}
    //     className="card mb-5 mt-5 mx-auto px-0"
    //     id="body"
    //   >
    //     <div class="cS-container">
    //       <div class="cS"></div>
    //     </div>
    //     <h2 class="h2">{name} </h2>
    //     <p class="p mx-auto px-1">
    //       From CodingStudio <br /> To {lat}
    //       <br /> Regarding {lng}
    //       In dist: {dist}
    //     </p>
    //     <div class="button">
          
    //         <Button className="button1">Go here</Button>
          
    //     </div>
    //   </div>
    );
  }
}
