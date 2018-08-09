import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Greetings from './Greetings';
import HomePage from './Home';
import SignupPage from './signup/SignupPage';

const MainRouter = () => (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/greetings" component={Greetings} /> 
        <Route path="/signup" component={SignupPage} /> 
      </Switch>
    </main>
  );
  
  export default MainRouter;