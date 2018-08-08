import React from "react";
import { Switch, Route } from "react-router-dom";
import Greetings from "./Greetings";
import HomePage from "./Home";

const MainRouter = () => (
    <main>
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/greeting" component={Greetings} /> 
      </Switch>
    </main>
  );
  
  export default MainRouter;