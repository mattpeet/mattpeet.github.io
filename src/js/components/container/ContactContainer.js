import React, { Component } from "react";
import ReactDOM from "react-dom";
import ArtistDetails from "../../models/ArtistDetails.js"
import ContactDetailRow from "../presentational/ContactDetailRow.js"
import MenuOverlay from "./MenuOverlay.js"

class ContactContainer extends Component {

  render() {
    var artist = new ArtistDetails()
    var icons = ["fab fa-instagram", "fab fa-twitter", "fab fa-tumblr-square", "fab fa-facebook-square", "fas fa-envelope"]
    var linkDetails = [artist.instagram, artist.twitter, artist.tumblr, artist.facebook, artist.email]
   
    var rows = icons.map((icon, index) => {
      return <ContactDetailRow key={index} iconClassName={icon} targetLink={linkDetails[index].linkUrl} nameOfLink={linkDetails[index].linkName} />
    })
    return (
      <div className="contact-container">
        <MenuOverlay overlayVisible={this.props.menuOpen} toggleMenu={this.props.toggleMenu} />
        <div className="contact-rows">
          {rows}
        </div>
      </div>
      )
  }
}

export default ContactContainer