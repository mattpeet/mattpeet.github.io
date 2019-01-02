import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectImageCarousel from "./ProjectImageCarousel.js"
import ProjectCaption from "./ProjectCaption.js"

const NoToggleCaptionContainer = (props) => {
  return(
    <div className="main-project-grid" id="no-toggle-project-detail-container">
      <ProjectImageCarousel images={props.activeProject.images} selectHandler={props.handleImageSelect} />
      <ProjectCaption captionText={props.activeProject.images[props.selectedImage].title} descriptionText={props.activeProject.images[props.selectedImage].description} closeable={false} />
    </div>
    )
}

export default NoToggleCaptionContainer