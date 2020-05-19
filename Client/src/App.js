import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";

function App() {
  return (
    <div id="space">
      <ToastContainer />
      <Switch>
        <Route path="/signup" component={Signup} />
        <Route path="/" component={Login} />
      </Switch>
    </div>
  );
}

export default App;
