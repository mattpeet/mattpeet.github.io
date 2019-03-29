import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class MenuOverlay extends Component {

  constructor(props) {
    super(props)
    this.getStyle = this.getStyle.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
  }

  getStyle() {
    if (this.props.overlayVisible) {
      return {visibility: "visible"}
    } else {
      return {visibility: "hidden" }
    }
  }

  closeMenu() {
    console.log("close")
    this.props.toggleMenu()
  }

  render() {
    return (
      <div id="menu-overlay" style={this.getStyle()}>
        <div className="menu-inner">
        <div id="project-filters">
          <ul>
            <Link to="/"><li onClick={this.closeMenu}>projects</li></Link>
           
          </ul>
        </div>
        <div id="sundry-nav">
          <ul>
          <Link to="/about"><li onClick={this.closeMenu}>about</li></Link>
          <Link to="/contact"><li onClick={this.closeMenu}>contact</li></Link>
          </ul>
        </div>
        </div>
      </div>
      )
  }

}

export default MenuOverlay