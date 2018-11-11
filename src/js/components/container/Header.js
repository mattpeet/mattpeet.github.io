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
      <div className="header-container">
        <p>header content</p>
      </div>
    );
  }
}

export default Header;