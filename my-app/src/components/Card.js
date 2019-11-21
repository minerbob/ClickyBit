import React from "react";

function Card(props) {
        return (
          <div>
                <img onClick={() => props.click (props.id)} alt={props.name} src={props.image} width="100" height="100"/>
                </div>
 

        );
      }
      

export default Card;
