import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectImageCarousel from "./ProjectImageCarousel.js"
import ProjectCaption from "./ProjectCaption.js"
import ProjectInfoFooterCollapsed from "./ProjectInfoFooterCollapsed.js"

const ToggleableCaptionContainer = (props) => {
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

  if(props.captionVisible) {
    return (
      <div id="toggleable-project-detail-container">
        <ProjectImageCarousel images={images} selectHandler={props.handleImageSelect} activeIndex={activeImageIndex} />
        <ProjectCaption captionText={images[props.selectedImage].title} descriptionText={images[props.selectedImage].description} clickHandler={props.onCaptionToggleClick} closeable={true} />
      </div>
      )
  } else {
    return (
      <div id="toggleable-project-detail-container">
        <ProjectImageCarousel images={images} selectHandler={props.handleImageSelect} activeIndex={activeImageIndex}/>
        <ProjectInfoFooterCollapsed clickHandler={props.onCaptionToggleClick} />
      </div>
      )
  }

}

export default ToggleableCaptionContainer