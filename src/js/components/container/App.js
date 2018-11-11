import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js"

class App extends Component {
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
      <div className="app-container">
        <Header/>
      </div>
    );
  }
}
export default App;
const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;