import React, { Component } from 'react';
import { Provider } from 'react-redux';
import appStore from './stores/appStore';
import logo from './github_logo.png';
import './App.css';

import ProfileApp from './components/ProfileApp';

class App extends Component {
  render() {
    return (
      <Provider store={appStore}>
        <div className="App">
          <div className="App-header">
            <img src={logo} className="App-logo" alt="logo" />
            <h2>Welcome to GitHubers app</h2>
          </div>
          <p className="App-intro">
            To get started, enter a GitHuber user name in the field below.
          </p>
          <ProfileApp />
        </div>
      </Provider>
    );
  }
}

export default App;
