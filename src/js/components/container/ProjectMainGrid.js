import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"


class ProjectMainGrid extends Component {

  render() {
    var factory = new ProjectFactory()
    var projects = factory.getArtistProjects()
    var titleOne = projects[0].title
    return (
      <div id="main-project-grid">
        <p>{titleOne}</p>
      </div>
      )
  }
}

export default ProjectMainGrid