import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {

  render() {
    return (
      <div className="header-container col-md-12">
        <div className="row">
          <h1 id="illustrator-name" className="col-md-6">MATT PEET</h1>
        </div>
        <div className="row">
          <h3 id="header-subtitle" className="col-md-6">illustration</h3>
        </div>
      </div>
    );
  }
}

export default Header;