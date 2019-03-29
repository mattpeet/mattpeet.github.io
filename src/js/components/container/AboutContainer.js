import React, { Component } from "react";
import ReactDOM from "react-dom";
import ArtistDetails from "../../models/ArtistDetails.js"
import MenuOverlay from "./MenuOverlay.js"

class AboutContainer extends Component {

  render() {
    var artistDesc = new ArtistDetails().about

    return(
      <div className="about-container">
        <MenuOverlay overlayVisible={this.props.menuOpen} />
        <p>{artistDesc}</p>
      </div>
      )
  }
}

export default AboutContainer