import React, { Component } from "react";
import ReactDOM from "react-dom";

class ProjectThumnail extends Component {

  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log("handle click: " + this.props.index)
    this.props.clickHandler(this.props.index)
  }

  render() {
    let background = "url(" + this.props.image + ")"
    return (
      <div className="project-thumbnail" style={{backgroundImage: background, backgroundSize: 'cover'}} onClick={this.handleClick}>
      </div>
      )
  }

}

export default ProjectThumnail