import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"
import ToggleableCaptionContainer from "../presentational/ToggleableCaptionContainer.js"
import NoToggleCaptionContainer from "../presentational/NoToggleCaptionContainer.js"

class ProjectDetailContainer extends Component {

  constructor(props) {
    super(props)
    var factory = new ProjectFactory()
    var projects = factory.getArtistProjects()
    var activeProjectIndex = props.match.params.projectId
    var activeProject = projects[activeProjectIndex]
    this.state = {
      activeProject: activeProject,
      selectedImage: 0,
      captionVisible: false
    }
    this.onCaptionToggleClick = this.onCaptionToggleClick.bind(this)
    this.handleImageSelect = this.handleImageSelect.bind(this)
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
    return (
      <div className="main-project-grid">
        <ToggleableCaptionContainer activeProject={this.state.activeProject} handleImageSelect={this.handleImageSelect} selectedImage={this.state.selectedImage} onCaptionToggleClick={this.onCaptionToggleClick} captionVisible={this.state.captionVisible} />
        <NoToggleCaptionContainer activeProject={this.state.activeProject} handleImageSelect={this.handleImageSelect} selectedImage={this.state.selectedImage} />
      </div>

      )
    
  }

}

export default ProjectDetailContainer