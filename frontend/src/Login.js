import React from "react";
import { Link } from "react-router-dom";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="shadow-lg bg-light p-3 rounded-3 w-25 border border-1">
        <h2 className="text-center text-success">Sign In</h2>
        <form action="">
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
            <strong>Log In</strong>
          </button>
          <p className="text-center">Create a new account from below</p>
          <Link
            to="/signup"
            className="btn btn-default w-100 bg-light shadow-sm"
          >
            <strong>Register</strong>
          </Link>
        </form>
      </div>
    </div>
  );
}

export default Login;
