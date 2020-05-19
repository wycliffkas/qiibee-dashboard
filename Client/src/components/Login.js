import React, { Component } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { login } from "../store/actions/users";

class Login extends Component {
  state = {
    password: "",
    email: "",
  };
  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  handleUserLogin = (event) => {
    event.preventDefault();
    const userDetails = {
      email: this.state.email,
      password: this.state.password,
    };
    this.props.loginUser(userDetails);
    this.setState({
      email: "",
      password: "",
    });
  };
  render() {
    return (
      <div className="content">
        <p className="title">Log in to your account</p>
        <form onSubmit={this.handleUserLogin}>
          <div className="form-row">
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.email}
              />
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                type="password"
                name="password"
                className="form-control"
                onChange={this.handleChange}
                value={this.state.password}
              />
            </div>

            <div className="content-footer">
              <div>
                <button type="submit" className="btn btn-primary">
                  Login
                </button>
              </div>
              <div className="content-footer-link">
                <Link to="/signup">Sign up</Link>
              </div>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    loginUser: (details) => dispatch(login(details)),
  };
};

export default connect(null, mapDispatchToProps)(Login);
