import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"
import ProjectImageCarousel from "../presentational/ProjectImageCarousel.js"
import ProjectInfoFooterCollapsed from "../presentational/ProjectInfoFooterCollapsed.js"
import ProjectCaption from "../presentational/ProjectCaption.js"

class ProjectDetailContainer extends Component {

  constructor(props) {
    super(props)
    var factory = new ProjectFactory()
    var projects = factory.getArtistProjects()

    var activeProjectIndex = props.match.params.projectId
    var activeProject = projects[activeProjectIndex]
    this.state = {
      activeProject: activeProject,
      captionVisible: false
    }
    this.onCaptionToggleClick = this.onCaptionToggleClick.bind(this)
  }

  onCaptionToggleClick() {
    this.setState((prevState) => {
      prevState.captionVisible = !prevState.captionVisible
      return prevState
    })
  }

  render() {

    if(this.state.captionVisible) {
      return (
          <div className="main-project-grid">
            <ProjectImageCarousel images={this.state.activeProject.images} />
            <ProjectCaption captionText={this.state.activeProject.description} clickHandler={this.onCaptionToggleClick} />
          </div>
        )
    } else {
      return (
          <div className="main-project-grid">
            <ProjectImageCarousel images={this.state.activeProject.images} />
            <ProjectInfoFooterCollapsed clickHandler={this.onCaptionToggleClick} />
          </div>
        )
    }
    
  }

}

export default ProjectDetailContainer