import React, { Component } from "react";
import ReactDOM from "react-dom";

const ProjectInfoFooterCollapsed = (props) => {
  return (
    <div id="project-info-footer-collapsed" onClick={props.clickHandler}>
      <i className="fas fa-info-circle"></i>
    </div>
    )
}

export default ProjectInfoFooterCollapsed