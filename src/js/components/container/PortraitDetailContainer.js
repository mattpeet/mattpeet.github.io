import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"
import ProjectImageCarousel from "../presentational/ProjectImageCarousel.js"
import ToggleableCaptionContainer from "../presentational/ToggleableCaptionContainer.js"
import NoToggleCaptionContainer from "../presentational/NoToggleCaptionContainer.js"

class PortraitDetailContainer extends Component {

  constructor(props) {
    super(props)

    this.state = {
      captionVisible: false,
      selectedImage: props.match.params.portraitId,
    }

    this.handleImageSelect = this.handleImageSelect.bind(this)
    this.onCaptionToggleClick = this.onCaptionToggleClick.bind(this)
  }

  handleImageSelect(selection) {
    this.setState({selectedImage: selection})
  }

  onCaptionToggleClick() {
    this.setState((prevState) => {
      prevState.captionVisible = !prevState.captionVisible
      return prevState
    })
  }

  render() {
  
    var factory = new ProjectFactory()
    var portraits = factory.getAllPortraits()
    var selectedImage = portraits[this.state.selectedImage]

    return(
      <div className="portrait-detail-container main-project-grid">
        <ToggleableCaptionContainer images={portraits} selectedImage={this.state.selectedImage} activeImageIndex={this.state.selectedImage} onCaptionToggleClick={this.onCaptionToggleClick} captionVisible={this.state.captionVisible} handleImageSelect={this.handleImageSelect} />
        <NoToggleCaptionContainer images={portraits} selectedImage={this.state.selectedImage} activeImageIndex={this.state.selectedImage} handleImageSelect={this.handleImageSelect} />

      </div>
      )
  }

}

export default PortraitDetailContainer