import React from "react";
import { Switch, Route } from "react-router-dom";
import App from "./App";
import Greetings from "./Greetings";

const MainRouter = () => (
    <main>
      <Switch>
        <Route exact path="/" component={App} />
         
      </Switch>
    </main>
  );
  
  export default MainRouter;