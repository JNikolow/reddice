import React, { Component } from 'react';
import './App.css';
import Greetings from './Greetings'
import NavigationBar from './NavigationBar';
import MainRouter from './MainRouter';

class App extends Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <MainRouter />
      </div>
    );
  }
}

export default App;
