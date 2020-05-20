import React from "react";
import { ToastContainer } from "react-toastify";
import { Route, Switch, BrowserRouter as Router, Redirect } from "react-router-dom";
import Signup from "./components/Signup";
import Login from "./components/Login";
import "react-toastify/dist/ReactToastify.css";
import BrandDashBoard from "./components/BrandDashBoard";
import CustomerDashBoard from "./components/CustomerDashBoard";
import DashBoards from "./components/DashBoards";
import { history } from "./utils/history";

function App() {
  return (
    <Router history={history}>
      <div id="space">
        <ToastContainer />
        <Switch>
          <Route path="/signup" component={Signup} />
          <Route path="/brands" component={BrandDashBoard} />
          <Route path="/customers" component={CustomerDashBoard} />
          <Route path="/dashboard" component={DashBoards} />
          <Route exact path="/" component={Login} />
          <Redirect from="*" to="/" />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
