import React from "react";

export default (props) => (
  <div className={`figure${props.type} figure`}>
    <img src={props.img} alt={props.text} style={{width: '100px'}} />
    <span style={{color: 'white', position: 'absolute', bottom: '0px', left: '105px', width: '150px' }} >{props.text}</span>
  </div>
);
