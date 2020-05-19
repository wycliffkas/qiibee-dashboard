import React from "react";
import { Link } from "react-router-dom";

const BrandForm = ({
  onSaveBrand,
  onHandleChange,
  brandName,
  brandSymbol,
  loyaltyPoints,
  email,
  password,
}) => {
  return (
    <div className="content">
      <p className="title">Create your account</p>
      <form onSubmit={onSaveBrand}>
        <div className="form-row">
          <div className="form-group">
            <label htmlFor="brandName">Brand Name</label>
            <input
              type="text"
              name="brandName"
              className="form-control"
              onChange={onHandleChange}
              value={brandName}
            />
          </div>

          <div className="form-group col-two ">
            <label htmlFor="brandSymbol">Brand Symbol</label>
            <input
              type="text"
              name="brandSymbol"
              className="form-control"
              onChange={onHandleChange}
              value={brandSymbol}
            />
          </div>

          <div className="form-group col-two">
            <label htmlFor="exampleInputEmail1">Loyalty Points</label>
            <input
              type="text"
              name="loyaltyPoints"
              className="form-control"
              onChange={onHandleChange}
              value={loyaltyPoints}
            />
          </div>

          <div className="form-group">
            <label htmlFor="email">Email</label>
            <input
              type="text"
              name="email"
              className="form-control"
              onChange={onHandleChange}
              value={email}
            />
          </div>

          <div className="form-group">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              name="password"
              className="form-control"
              onChange={onHandleChange}
              value={password}
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

export default BrandForm;
