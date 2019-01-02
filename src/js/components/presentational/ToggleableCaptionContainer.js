import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectImageCarousel from "./ProjectImageCarousel.js"
import ProjectCaption from "./ProjectCaption.js"
import ProjectInfoFooterCollapsed from "./ProjectInfoFooterCollapsed.js"

const ToggleableCaptionContainer = (props) => {
  if(props.captionVisible) {
    return (
      <div id="toggleable-project-detail-container">
        <ProjectImageCarousel images={props.activeProject.images} selectHandler={props.handleImageSelect} />
        <ProjectCaption captionText={props.activeProject.images[props.selectedImage].title} descriptionText={props.activeProject.images[props.selectedImage].description} clickHandler={props.onCaptionToggleClick} closeable={true} />
      </div>
      )
  } else {
    return (
      <div id="toggleable-project-detail-container">
        <ProjectImageCarousel images={props.activeProject.images} selectHandler={props.handleImageSelect} />
        <ProjectInfoFooterCollapsed clickHandler={props.onCaptionToggleClick} />
      </div>
      )
  }

}

export default ToggleableCaptionContainer