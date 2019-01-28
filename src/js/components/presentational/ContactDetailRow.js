import React, { Component } from "react";
import ReactDOM from "react-dom";

const ContactDetailRow = (props) => {
	if(props.targetLink.includes("@")) {
		return (
			<div className="contact-detail-row">
	      <a href={props.targetLink} target="_blank"><i className={props.iconClassName}></i></a>
	      <a href={"mailto:" + props.targetLink} target="_blank"><p>{props.nameOfLink}</p></a>
	    </div>
			)
	} else {
		return(
	    <div className="contact-detail-row">
	      <a href={props.targetLink} target="_blank"><i className={props.iconClassName}></i></a>
	      <a href={props.targetLink} target="_blank"><p>{props.nameOfLink}</p></a>
	    </div>
	    )
	}
  
}

export default ContactDetailRow