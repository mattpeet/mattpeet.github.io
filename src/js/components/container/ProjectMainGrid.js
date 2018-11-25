import React, { Component } from "react";
import ReactDOM from "react-dom";
import SideNavigation from "./SideNavigation.js"

class ProjectMainGrid extends Component {

  render() {
    return (
      <div id="main-project-grid-container">
        <SideNavigation />
        <div id="project-list-container">
          <p>Test project grid</p>
        </div>
      </div>
      )
  }
}

export default ProjectMainGrid