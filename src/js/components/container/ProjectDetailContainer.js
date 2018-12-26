import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectImageCarousel from "../presentational/ProjectImageCarousel.js"

class ProjectDetailContainer extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    return (
        <div className="main-project-grid">
          <ProjectImageCarousel images={this.props.activeProject.images} />
        </div>
      )
  }

}

export default ProjectDetailContainer