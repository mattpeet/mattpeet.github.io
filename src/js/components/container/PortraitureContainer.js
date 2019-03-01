import React, { Component } from "react";
import ReactDOM from "react-dom";
import PortraitGallery from "./PortraitGallery.js"

class PortraitureContainer extends Component {

  render() {
    return (
      <div className="portraiture-container main-project-grid">
        <PortraitGallery />
      </div>
      )
  }
}

export default PortraitureContainer