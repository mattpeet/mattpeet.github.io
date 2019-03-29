import React, { Component } from "react";
import ReactDOM from "react-dom";
import SocialAndMenuNavigation from "./SocialAndMenuNavigation.js"
import SideNavigation from "./SideNavigation.js"
import CopyrightNotice from "../presentational/CopyrightNotice.js"

class MainContent extends Component {

  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div id="navigation-content">
        <SocialAndMenuNavigation menuOpen={this.props.menuOpen} openMenuCommand={this.props.openMenuCommand} />
        <SideNavigation />
        <CopyrightNotice />
      </div>
      )

  }
}

export default MainContent