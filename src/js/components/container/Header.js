import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {
  constructor() {
    super();
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
          <i className="fab fa-instagram col-md-1"></i>
          <i className="fab fa-twitter col-md-1"></i>
          <i className="fab fa-tumblr-square col-md-1"></i>
          <i className="fab fa-facebook-square col-md-1"></i>
          <i className="fas fa-envelope col-md-1"></i>
          <i id="hamburger-menu" className="fas fa-bars col-md-1"></i>
        </div>
      </div>
    );
  }
}

export default Header;