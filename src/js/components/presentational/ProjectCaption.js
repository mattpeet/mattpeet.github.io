import React, { Component } from "react";
import ReactDOM from "react-dom";

const ProjectCaption = (props) => {

  return (
    <div className="project-caption-container" onClick={props.clickHandler}>
      <p>{props.captionText}</p>
      <i className="fas fa-times"></i>
    </div>
    )
}

export default ProjectCaption