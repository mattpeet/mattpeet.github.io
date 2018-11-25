import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js"
import Navigation from "./Navigation.js"
import ProjectMainGrid from "./ProjectMainGrid.js"

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Header />
        <Navigation />
        <ProjectMainGrid />
      </div>
    );
  }
}
export default App;
const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;