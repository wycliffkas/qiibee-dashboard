import * as actionTypes from "./actionTypes";

export const registerBrand = (userData) => {
  console.log("userData", userData);
  return {
    type: actionTypes.REGISTER_BRAND,
    payload: userData,
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
  return {
    type: actionTypes.REGISTER_CUSTOMER,
    payload: userData,
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
