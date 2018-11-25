import React, { Component } from "react";
import ReactDOM from "react-dom";

class Header extends Component {

  render() {
    return (
      <div className="header-container">
        <div>
          <h1 id="illustrator-name">MATT PEET</h1>
        </div>
        <div>
          <h3 id="header-subtitle">illustration</h3>
        </div>
      </div>
    );
  }
}

export default Header;