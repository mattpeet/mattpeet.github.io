import React, { Component } from "react";
import ReactDOM from "react-dom";

const ProjectCaption = (props) => {

  return (
    <div className="project-caption-container">
      <p>{props.captionText}</p>
      <i className="fas fa-times" onClick={props.clickHandler}></i>
    </div>
    )
}

export default ProjectCaption