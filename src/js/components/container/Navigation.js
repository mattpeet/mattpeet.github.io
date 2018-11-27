import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialAndMenuNavigation from "./SocialAndMenuNavigation.js"
import MenuOverlay from "./MenuOverlay.js"
import SideNavigation from "./SideNavigation.js"
import CopyrightNotice from "../presentational/CopyrightNotice.js"

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
      <div id="navigation-content">
        <SocialAndMenuNavigation menuOpen={this.state.menuOpen} openMenuCommand={this.toggleMenu} />
        <SideNavigation />
        <CopyrightNotice />
      </div>
      )

  }
}

export default MainContent