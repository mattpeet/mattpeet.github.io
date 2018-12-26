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

    if(this.state.captionVisible) {
      return (
          <div className="main-project-grid" id="project-detail-container">
            <ProjectImageCarousel images={this.state.activeProject.images} selectHandler={this.handleImageSelect} />
            <ProjectCaption captionText={this.state.activeProject.images[this.state.selectedImage].title} descriptionText={this.state.activeProject.images[this.state.selectedImage].description} clickHandler={this.onCaptionToggleClick} />
          </div>
        )
    } else {
      return (
          <div className="main-project-grid" id="project-detail-container">
            <ProjectImageCarousel images={this.state.activeProject.images} selectHandler={this.handleImageSelect}/>
            <ProjectInfoFooterCollapsed clickHandler={this.onCaptionToggleClick} />
          </div>
        )
    }
    
  }

}

export default ProjectDetailContainer