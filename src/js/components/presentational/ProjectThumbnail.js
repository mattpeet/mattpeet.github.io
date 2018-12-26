import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class ProjectThumnail extends Component {

  constructor(props) {
    super(props)
  }

  render() {
    let background = "url(" + this.props.image + ")"
    let link = "/" + this.props.index
    return (
      <Link to={link} >
        <div className="project-thumbnail" style={{backgroundImage: background, backgroundSize: 'cover'}}>
        </div>
      </Link>
      )
  }

}

export default ProjectThumnail