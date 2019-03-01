import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"
import ProjectThumbnail from "../presentational/ProjectThumbnail.js"

class PortraitGallery extends Component {

  render() {
    var factory = new ProjectFactory()
    var portraits = factory.getAllPortraits()
    var thumbs = portraits.map((portrait, index) => {
      return <ProjectThumbnail image={portrait.source} key={index} index={index} />
    })

    return (
      <div className="portrait-gallery overview-grid">
      {thumbs}
      </div>
      )
  }
}

export default PortraitGallery