import React, { Component } from "react";
import ReactDOM from "react-dom";

const ProjectThumnail = (props) => {
  let background = "url(" + props.image + ")"
  return (
    <div className="project-thumbnail" style={{backgroundImage: background, backgroundSize: 'cover'}}>
    </div>
    )
}

export default ProjectThumnail