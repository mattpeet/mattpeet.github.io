import React, { Component } from "react";
import ReactDOM from "react-dom";
import { Link } from 'react-router-dom'

class SideNavigation extends Component {

  render() {
    return (
      <div id="side-nav-container">
        <div id="project-filters">
          <ul>
            <Link to="/category/illustration"><li>illustration</li></Link>
              <ul>
                <Link to="/category/illustration/editorial"><li>editorial</li></Link>
                <Link to="/category/illustration/portraiture"><li>portraiture</li></Link>
                <Link to="/category/illustration/other"><li>other</li></Link>
              </ul>
            <Link to="/category/comics"><li>comics</li></Link>
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