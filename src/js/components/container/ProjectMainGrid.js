import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"
import ProjectImageCarousel from "../presentational/ProjectImageCarousel.js"
import ProjectThumbnail from "../presentational/ProjectThumbnail.js"


class ProjectMainGrid extends Component {

  // Mode to show list of all projects
  static get OVERVIEW_MODE() {
    return 0
  }

  // Mode to show single project detail
  static get PROJECT_DETAIL_MODE() {
    return 1
  }

  constructor(props) {
    super(props)

    this.state = {
      mode: ProjectMainGrid.OVERVIEW_MODE
    }
  }

  render() {
    var factory = new ProjectFactory()
    var projects = factory.getArtistProjects()
    var titleOne = projects[0].title

    var activeProject = projects[0]

    
    if(this.state.mode == ProjectMainGrid.OVERVIEW_MODE) {

      var thumbs = projects.map((project, index) => {
        return <ProjectThumbnail image={project.images[0]} key={index} />
      })
      return (
        <div className="main-project-grid" id="overview-grid">
          {thumbs}
        </div>
        )
    } else {
      <div className="main-project-grid">
      <ProjectImageCarousel images={activeProject.images} />
      </div>
    }
  }
}

export default ProjectMainGrid