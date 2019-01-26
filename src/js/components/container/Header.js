import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <div className="header-container">
        <Link to="/"><img src="./../src/img/LOGO_95x22_72dpi.png" id="headerImage" /></Link>
      </div>
    );
  }
}

export default Header;