import React from "react";

function Login() {
  return (
    <div className="d-flex justify-content-center align-items-center bg-primary vh-100">
      <div className="bg-white p-3 rounded-3 w-25">
        <form action="">
          <div className="mb-3">
            <label htmlFor="email">Email</label>
            <input
              type="email"
              placeholder="Email"
              className="form-control rounded-1"
            />
          </div>
          <div className="mb-3">
            <label htmlFor="password">Password</label>
            <input
              type="password"
              placeholder="Password"
              className="form-control rounded-1"
            />
          </div>
          <button className="btn btn-success w-100">
            <strong>Log In</strong>
          </button>
          <p>You are </p>
          <button className="btn btn-default w-100 bg-light">
            <strong>Register</strong>
          </button>
        </form>
      </div>
    </div>
  );
}

export default Login;
