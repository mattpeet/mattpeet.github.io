import React, { Component } from "react";
import ReactDOM from "react-dom";
import ArtistDetails from "../../models/ArtistDetails.js"

class SocialAndMenuNavigation extends Component {

  constructor(props) {
    super(props);
    this.artist = new ArtistDetails()
    this.state = {
      menuOpen: this.props.menuOpen
    };
    this.toggleMenu = this.toggleMenu.bind(this);
  }

  // Menu Handlers

  getMenuIcon() {
    if (this.state.menuOpen) {
      return "fa-times";
    } else {
      return "fa-bars";
    }
  }

  toggleMenu() {
    this.setState((prevState) => {
      prevState.menuOpen = !prevState.menuOpen
      return prevState
    })
    // tell the parent App to show the menu overlay
    this.props.openMenuCommand()
  }




  render() {
    return(
      <div className="social-and-nav">
        <div className="social-links">
          <a href={this.artist.instagram} target="_blank"><i className="fab fa-instagram"></i></a>
          <a href={this.artist.twitter} target="_blank"><i className="fab fa-twitter"></i></a>
          <a href={this.artist.tumblr} target="_blank"><i className="fab fa-tumblr-square"></i></a>
          <a href={this.artist.facebook} target="_blank"><i className="fab fa-facebook-square"></i></a>
          <a href={'mailto:' + this.artist.email}><i className="fas fa-envelope"></i></a>
        </div>
        <div className="nav-end">
          <i id="hamburger-menu" className={'fas ' + this.getMenuIcon()} onClick={this.toggleMenu}></i>
        </div>
      </div>
      )
  }

}

export default SocialAndMenuNavigation