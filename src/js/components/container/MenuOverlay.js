import React, { Component } from "react";
import ReactDOM from "react-dom";

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
        
      </div>
      )
  }

}

export default MenuOverlay