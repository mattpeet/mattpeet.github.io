import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"
import ProjectImageCarousel from "../presentational/ProjectImageCarousel.js"

class ProjectDetailContainer extends Component {

  constructor(props) {
    super(props)
    var factory = new ProjectFactory()
    var projects = factory.getArtistProjects()

    var activeProjectIndex = props.match.params.projectId
    var activeProject = projects[activeProjectIndex]
    this.state = {
      activeProject: activeProject
    }
  }

  render() {

    return (
        <div className="main-project-grid">
          <ProjectImageCarousel images={this.state.activeProject.images} />
        </div>
      )
  }

}

export default ProjectDetailContainer