import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class MenuOverlay extends Component {

  constructor(props) {
    super(props)
    this.getStyle = this.getStyle.bind(this)
    this.closeMenu = this.closeMenu.bind(this)
    this.handleResize = this.handleResize.bind(this)
    this.state = {
      windowWidth: window.innerWidth ||  document.documentElement.clientWidth || document.body.clientWidth
    }
  }

  getStyle() {
    if (this.props.overlayVisible && this.state.windowWidth < 824) {
      return {visibility: "visible"}
    } else {
      return {visibility: "hidden" }
    }
  }

  componentDidMount() {
    window.addEventListener('resize', this.handleResize)
  }

  componentWillUnmount() {
    window.removeEventListener('resize', this.handleResize)
  }

  handleResize() {
    if (window.innerWidth > 824 && this.props.overlayVisible) {
      this.props.toggleMenu()
    }
    this.setState({windowWidth: window.innerWidth})
  }

  closeMenu() {
    this.props.toggleMenu()
  }

  render() {
    return (
      <div id="menu-overlay" style={this.getStyle()}>
        <div className="closeable-inner-menu" onClick={this.props.toggleMenu}>
        </div>
        <div className="menu-inner" >
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