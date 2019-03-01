import React, { Component } from "react";
import ReactDOM from "react-dom";
import Header from "./Header.js"
import Navigation from "./Navigation.js"
import ProjectMainGrid from "./ProjectMainGrid.js"
import ProjectDetailContainer from "./ProjectDetailContainer.js"
import AboutContainer from "./AboutContainer.js"
import ContactContainer from "./ContactContainer.js"
import PortraitureContainer from "./PortraitureContainer.js"
import { HashRouter } from 'react-router-dom'
import { Switch, Route } from 'react-router-dom'

class App extends Component {

  render() {
    return (
      <div className="app-container">
        <Header />
        <Navigation />
        <Main />
      </div>
    );
  }
}

const Main = () => (

  <Switch>
    <Route exact path='/' component={ProjectMainGrid} />
    <Route path='/category/:categoryId/:subcategoryId' component={ProjectMainGrid} />
    <Route path='/category/:categoryId' component={ProjectMainGrid} />
    <Route path="/about" component={AboutContainer} />
    <Route path="/contact" component={ContactContainer} />
    <Route path="/portraits" component={PortraitureContainer} />
    <Route path='/:projectId' component={ProjectDetailContainer} />
  </Switch>

)
export default App;
const wrapper = document.getElementById("app-container");
wrapper ? ReactDOM.render(
  <HashRouter><App /></HashRouter>, wrapper
  ) : false;