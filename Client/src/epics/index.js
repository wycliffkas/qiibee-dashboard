import { Observable } from "rxjs";
import "rxjs/add/operator/switchMap";
import "rxjs/add/operator/map";
import "rxjs/add/observable/of";
import "rxjs/add/operator/catch";
import { ajax } from "rxjs/observable/dom/ajax";
import { map, flatMap } from "rxjs/operators";
import { combineEpics, ofType } from "redux-observable";
import {
  registerBrandSuccess,
  registerCustomerSuccess,
  login
} from "../store/actions/users";

import {
  REGISTER_BRAND,
  REGISTER_CUSTOMER,
  LOGIN
} from "../store/actions/actionTypes";

const registerBrandEpic = (action$) =>
  action$.pipe(
    ofType(REGISTER_BRAND),
    flatMap((action) =>
      ajax({
        url: "http://localhost:3001/api/users/brand",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: action.payload,
      })
    ),
    map((data) => data.response),
    map((results) => registerBrandSuccess(results.message))
  );

const registerCustomerEpic = (action$) =>
  action$.pipe(
    ofType(REGISTER_CUSTOMER),
    flatMap((action) =>
      ajax({
        url: "http://localhost:3001/api/users/customer",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: action.payload,
      })
    ),
    map((data) => data.response),
    map((results) => registerCustomerSuccess(results.message))
  );


  const loginEpic = (action$) =>
  action$.pipe(
    ofType(LOGIN),
    flatMap((action) =>
      ajax({
        url: "http://localhost:3001/api/users/login",
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: action.payload,
      })
    ),
    map((data) => data.response),
    map((results) => registerCustomerSuccess(results.message))
  );



export const rootEpic = combineEpics(registerBrandEpic, registerCustomerEpic, loginEpic);
