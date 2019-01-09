import React, { Component } from "react";
import ReactDOM from "react-dom";
import ArtistDetails from "../../models/ArtistDetails.js"
import ContactDetailRow from "../presentational/ContactDetailRow.js"

class ContactContainer extends Component {

  render() {
    var artist = new ArtistDetails()
    var icons = ["fab fa-instagram", "fab fa-twitter", "fab fa-tumblr-square", "fab fa-facebook-square", "fas fa-envelope"]
    var links = [artist.instagram, artist.twitter, artist.tumblr, artist.facebook, artist.email]
    links.forEach((link, index) => {
      links[index] = link.replace("http://", "")
      links[index] = links[index].replace("https://", "")
    })
    var rows = icons.map((icon, index) => {
      return <ContactDetailRow key={index} iconClassName={icon} targetLink={links[index]} />
    })
    return (
      <div className="contact-container">
        {rows}
      </div>
      )
  }
}

export default ContactContainer