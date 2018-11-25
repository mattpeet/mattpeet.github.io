import React, { Component } from "react";
import ReactDOM from "react-dom";

class SideNavigation extends Component {

  render() {
    return (
      <div id="side-nav-container">
        <div id="project-filters">
          <ul>
            <li><a href="#">illustration</a></li>
              <ul>
                <li><a href="#">editorial</a></li>
                <li><a href="#">portraiture</a></li>
                <li><a href="#">other</a></li>
              </ul>
            <li><a href="#">comics</a></li>
          </ul>
        </div>
        <div id="sundry-nav">
          <a href="#" className="text-nav-link">about</a>
          <a href="#" className="text-nav-link">contact</a>
        </div>
        
      </div>

      )
  }
}

export default SideNavigation