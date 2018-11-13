import React, { Component } from "react";
import ReactDOM from "react-dom";
import ArtistDetails from "../../models/ArtistDetails"

class Header extends Component {
  constructor() {
    super();
    this.artist = new ArtistDetails()
    this.state = {
     
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    this.setState({ [event.target.id]: event.target.value });
  }

  render() {
    return (
      <div className="header-container col-md-12">
        <div className="row">
          <h1 id="illustrator-name" className="col-md-6">MATT PEET</h1>
        </div>
        <div className="row">
          <h3 id="header-subtitle" className="col-md-6">illustration</h3>
        </div>
        <div className="row social-and-nav">
          <div className="social-links">
            <a href={this.artist.instagram} target="_blank"><i className="fab fa-instagram"></i></a>
            <a href={this.artist.twitter} target="_blank"><i className="fab fa-twitter"></i></a>
            <a href={this.artist.tumblr} target="_blank"><i className="fab fa-tumblr-square"></i></a>
            <a href={this.artist.facebook} target="_blank"><i className="fab fa-facebook-square"></i></a>
            <a href={'mailto:' + this.artist.email}><i className="fas fa-envelope"></i></a>
          </div>
          <i id="hamburger-menu" className="fas fa-bars col-xs-1"></i>
        </div>
      </div>
    );
  }
}

export default Header;