import React, { Component } from "react";
import { connect } from "react-redux";
import Customer from "./CustomerForm";
import Brand from "./BrandForm";
import { registerBrand, registerCustomer } from "../store/actions/users";

class Signup extends Component {
  state = {
    signup: false,
    login: true,
    brandName: "",
    brandSymbol: "",
    loyaltyPoints: "",
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  };

  switch = (word) => {
    let signup, login;
    if (word === "signup") {
      signup = false;
      login = true;
    } else {
      login = false;
      signup = true;
    }
    return this.setState({ login: login, signup: signup });
  };

  handleSaveBrand = (event) => {
    event.preventDefault();
    const userDetails = {
      brand_name: this.state.brandName,
      brand_symbol: this.state.brandSymbol,
      loyalty_points: this.state.loyaltyPoints,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.saveBrand(userDetails);
    this.setState({
      brandName: "",
      brandSymbol: "",
      loyaltyPoints: "",
      email: "",
      password: "",
    });
  };

  handleSaveCustomer = (event) => {
    event.preventDefault();
    const userDetails = {
      first_name: this.state.firstName,
      last_name: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
    };
    this.props.saveCustomer(userDetails);
    this.setState({
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    });
  };

  handleChange = (event) => {
    this.setState({
      ...this.state,
      [event.target.name]: event.target.value,
    });
  };

  render() {
    return (
      <div>
        <div id="buttons">
          <p
            onClick={() => this.switch("signup")}
            className={this.state.signup ? "yellow" : "blue"}
          >
            Brand
          </p>
          <p
            onClick={() => this.switch("login")}
            className={this.state.login ? "yellow" : "blue"}
          >
            Customer
          </p>
        </div>

        {this.state.signup ? (
          <Customer
            onHandleChange={this.handleChange}
            onSaveCustomer={this.handleSaveCustomer}
            firstName={this.state.firstName}
            lastName={this.state.lastName}
            email={this.state.email}
            password={this.state.password}
          />
        ) : null}
        {this.state.login ? (
          <Brand
            onHandleChange={this.handleChange}
            onSaveBrand={this.handleSaveBrand}
            brandName={this.state.brandName}
            brandSymbol={this.state.brandSymbol}
            loyaltyPoints={this.state.loyaltyPoints}
            email={this.state.email}
            password={this.state.password}
          />
        ) : null}
      </div>
    );
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    saveBrand: (details) => dispatch(registerBrand(details)),
    saveCustomer: (details) => dispatch(registerCustomer(details)),
  };
};

export default connect(null, mapDispatchToProps)(Signup);
