import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectImageCarousel from "./ProjectImageCarousel.js"
import ProjectCaption from "./ProjectCaption.js"

const NoToggleCaptionContainer = (props) => {

  var images = []
  if (props.activeProject) {
    // project set
    images = props.activeProject.images
  }  else if (props.images) {
    // portrait set
    images = props.images
  }

  // Used for portrait gallery only
  const activeImageIndex = props.activeImageIndex ? props.activeImageIndex : 0;

  return(
    <div className="main-project-grid" id="no-toggle-project-detail-container">
      <ProjectImageCarousel images={images} selectHandler={props.handleImageSelect} activeIndex={activeImageIndex} />
      <ProjectCaption captionText={images[props.selectedImage].title} descriptionText={images[props.selectedImage].description} closeable={false} />
    </div>
    )
}

export default NoToggleCaptionContainer