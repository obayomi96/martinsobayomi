import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";
import LandingPage from './components/LandingPage';
import SocialWorker from './components/SocialWorkers';

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route path="/social-workers" component={SocialWorker} />
        </Switch>
      </BrowserRouter>
    );
  }
};

export default App;
