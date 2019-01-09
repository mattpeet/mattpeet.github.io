import React, { Component } from "react";
import ReactDOM from "react-dom";
import ProjectFactory from "../../models/ProjectFactory.js"
import ProjectThumbnail from "../presentational/ProjectThumbnail.js"
import ProjectDetailContainer from "./ProjectDetailContainer.js"


class ProjectMainGrid extends Component {

  constructor(props) {
    super(props)
    


  }


  render() {
    var factory = new ProjectFactory()
    var filterCategory = this.props.match.params.categoryId
    var filterSubcategory = this.props.match.params.subcategoryId

    var projects
    if(filterCategory !== undefined) {
      projects = factory.getFilteredProjects(filterCategory, filterSubcategory)
    } else {
      projects = factory.getArtistProjects()
    } 
    
    var thumbs = projects.map((project, index) => {
      return <ProjectThumbnail image={project.images[0].source} key={index} index={index} clickHandler={this.onThumbnailClick} />
    })
    return (
      <div className="main-project-grid" id="overview-grid">
        {thumbs}
      </div>
      )
  }
}

export default ProjectMainGrid