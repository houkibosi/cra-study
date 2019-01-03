import React, { Component } from 'react';
import {BrowserRouter, Route, Switch, Redirect} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';

import {Header, Content, Footer} from './components'
import {Home, About, Users} from './pages';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <Content>
          <BrowserRouter>
            <Switch>
              <Redirect exact from="/" to="/home" />
              <Route path="/home" Component={Home} />
              <Route path="/about" Component={About} />
              <Route path="/Users" Component={Users} />
            </Switch>
          </BrowserRouter>
        </Content>
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;
