import React, { Component } from "react";
import ReactDOM from "react-dom";

const ContactDetailRow = (props) => {
  return(
    <div className="contact-detail-row">
      <a href={props.targetLink} target="_blank"><i className={props.iconClassName}></i></a>
      <a href={props.targetLink} target="_blank"><p>{props.targetLink}</p></a>
    </div>
    )
}

export default ContactDetailRow