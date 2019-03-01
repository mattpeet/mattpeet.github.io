import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"

class PortraitDetailContainer extends Component {

  render() {
    var portraitIndex = this.props.match.params.portraitId
    var factory = new ProjectFactory()
    var portraits = factory.getAllPortraits()
    var selectedImage = portraits[portraitIndex]
    console.log("selected portrait index: " + portraitIndex)

    return(
      <div className="portrait-detail-container">
      </div>
      )
  }

}

export default PortraitDetailContainer