import * as actionTypes from "./actionTypes";
import axios from "axios";
import { toast } from "react-toastify";

export const registerBrand = (userData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/api/users/brand", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Brand has been successfully added");
        dispatch(registerBrandSuccess(response.message));
      })
      .catch((error) => {
        toast.error("Error saving brand");
        dispatch(registerBrandFail(error));
      });
  };
};

export const registerBrandSuccess = (message) => {
  return {
    type: actionTypes.REGISTER_BRAND_SUCCESS,
    payload: message,
  };
};

export const registerBrandFail = (message) => {
  return {
    type: actionTypes.REGISTER_BRAND_FAIL,
    payload: message,
  };
};

export const registerCustomer = (userData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/api/users/customer", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        toast.success("Customer has been successfully added");
        dispatch(registerCustomerSuccess(response.message));
      })
      .catch((error) => {
        toast.error("Error saving Customer");
        dispatch(registerCustomerFail(error));
      });
  };
};

export const registerCustomerSuccess = (message) => {
  return {
    type: actionTypes.REGISTER_CUSTOMER_SUCCESS,
    payload: message,
  };
};

export const registerCustomerFail = (message) => {
  return {
    type: actionTypes.REGISTER_CUSTOMER_FAIL,
    payload: message,
  };
};

export const login = (userData) => {
  return (dispatch) => {
    axios
      .post("http://localhost:3001/api/users/login", userData, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token)
        dispatch(loginSuccess(response.data.message));
      })
      .catch((error) => {
        toast.error("Invalid email or password");
        dispatch(loginFail(error.message));
      });
  };
};

export const loginSuccess = (message) => {
  return {
    type: actionTypes.LOGIN_SUCCESS,
    payload: message,
  };
};

export const loginFail = (message) => {
  return {
    type: actionTypes.LOGIN_FAIL,
    payload: message,
  };
};
