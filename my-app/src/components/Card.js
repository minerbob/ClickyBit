import React from "react";

function Card(props) {
        return (
   
                <img onClick={() => props.click (props.id)} alt={props.name} src={props.image} width="170" height="170"/>
         
 

        );
      }
      

export default Card;
