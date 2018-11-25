import React, { Component } from "react";
import ReactDOM from "react-dom";
import Navigation from "./Navigation.js"
import MenuOverlay from "./MenuOverlay.js"
import ProjectMainGrid from "./ProjectMainGrid.js"

class MainContent extends Component {

  constructor(props) {
    super(props);
    this.state = {
      menuOpen: false
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }


  toggleMenu() {
    // TODO - update CSS and overlays etc according to menu state
    this.setState((prevState) => {
      prevState.menuOpen = !prevState.menuOpen
      return prevState
    })
  }



  render() {
    return(
      <div id="main-content">
        <Navigation menuOpen={this.state.menuOpen} openMenuCommand={this.toggleMenu} />
        <MenuOverlay />
        <ProjectMainGrid />
      </div>
      )

  }
}

export default MainContent