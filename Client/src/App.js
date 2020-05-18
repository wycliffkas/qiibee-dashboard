import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";

function App() {
  return (
    <div id="space">
      <ToastContainer />
      <Switch>
        <Route path="/signup" component={Signup} />
      </Switch>
    </div>
  );
}

export default App;
