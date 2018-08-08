import React from 'react';
import './App.css';
import NavigationBar from './NavigationBar';
import MainRouter from './MainRouter';
import { withRouter } from 'react-router-dom'

class App extends React.Component {
  render() {
    return (
      <div className="container">
        <NavigationBar />
        <MainRouter />
      </div>
    );
  }
}

export default withRouter(App);
