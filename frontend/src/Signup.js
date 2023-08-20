import React from "react";
import { Link } from "react-router-dom";

function Signup() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="shadow-lg bg-light p-3 rounded-3 w-25 border border-1">
        <h2 className="text-center text-success">Sign Up</h2>
        <form action="">
          <div className="mb-3">
            <label htmlFor="first-name">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              placeholder="First Name*"
              className="form-control rounded-1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="last-name">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              placeholder="Last Name*"
              className="form-control rounded-1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              placeholder="Email*"
              className="form-control rounded-1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              placeholder="Password*"
              className="form-control rounded-1"
            />
          </div>
          <button className="btn btn-success w-100 mb-2 shadow-sm">
            <strong>Sign Up</strong>
          </button>
          <p className="text-center">
            Already have an account?{" "}
            <Link
              to="/"
              className="text-decoration-none text-uppercase text-success"
            >
              Log in
            </Link>
          </p>
        </form>
      </div>
    </div>
  );
}

export default Signup;
