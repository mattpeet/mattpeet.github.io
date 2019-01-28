import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class Header extends Component {

  render() {
    return (
      <div className="header-container">
        <Link to="/"><img src="./../src/img/MattPeetLOGO-500x116px.png" id="headerImage" /></Link>
      </div>
    );
  }
}

export default Header;