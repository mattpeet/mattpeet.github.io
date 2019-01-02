import React, { Component } from "react";
import ReactDOM from "react-dom";

const ProjectCaption = (props) => {


    if (props.closeable) {
      return (
      <div className="project-caption-container">
        <p className="caption-title">{props.captionText}</p>
        <i className="fas fa-times" onClick={props.clickHandler}></i>
        <p className="caption-description">{props.descriptionText}</p>
      </div>
      )
    } else {
      return (
        <div className="project-caption-container">
          <p className="caption-title">{props.captionText}</p>
          <p className="caption-description">{props.descriptionText}</p>
        </div>
        )
    }
}

export default ProjectCaption