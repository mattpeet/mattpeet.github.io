import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class MenuOverlay extends Component {

  constructor(props) {
    super(props)
    this.getStyle = this.getStyle.bind(this)
  }

  getStyle() {
    if (this.props.overlayVisible) {
      return {visibility: "visible"}
    } else {
      return {visibility: "hidden" }
    }
  }

  render() {
    return (
      <div id="menu-overlay" style={this.getStyle()}>
        <div className="menu-inner">
        <div id="project-filters">
          <ul>
            <Link to="/"><li>projects</li></Link>
           
          </ul>
        </div>
        <div id="sundry-nav">
          <ul>
          <Link to="/about"><li>about</li></Link>
          <Link to="/contact"><li>contact</li></Link>
          </ul>
        </div>
        </div>
      </div>
      )
  }

}

export default MenuOverlay