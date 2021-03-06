import React from "react";
import { Link } from "react-router-dom";

const CustomerForm = ({
  onSaveCustomer,
  onHandleChange,
  firstName,
  lastName,
  email,
  password,
}) => {
  return (
    <div className="content">
      <p className="title">Create your account</p>
      <form onSubmit={onSaveCustomer}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="firstName">First Name</label>
            <input
              type="text"
              name="firstName"
              onChange={onHandleChange}
              value={firstName}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="lastName">Last Name</label>
            <input
              type="text"
              name="lastName"
              onChange={onHandleChange}
              value={lastName}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              onChange={onHandleChange}
              value={email}
              className="form-control"
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              onChange={onHandleChange}
              value={password}
              className="form-control"
            />
          </div>

          <div className="content-footer">
            <div>
              <button type="submit" className="btn btn-primary">
                Sign up
              </button>
            </div>
            <div className="content-footer-link">
              <Link to="/">Login</Link>
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};

export default CustomerForm;
