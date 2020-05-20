import * as actionTypes from "../actions/actionTypes";
const initialState = {
  message: "",
  userType: "",
};

const users = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.REGISTER_BRAND_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actionTypes.REGISTER_BRAND_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case actionTypes.REGISTER_CUSTOMER_SUCCESS:
      return {
        ...state,
        message: action.payload,
      };
    case actionTypes.REGISTER_CUSTOMER_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    case actionTypes.LOGIN_SUCCESS:
      return {
        ...state,
        message: action.payload.message,
        userType: action.payload.userType,
      };
    case actionTypes.LOGIN_FAIL:
      return {
        ...state,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default users;
