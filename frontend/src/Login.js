import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./LoginValidation";
import axios from "axios";

function Login() {
  const [values, setValues] = useState({
    email: "",
    password: "",
  });

  const navigate = useNavigate();

  const [errors, setErrors] = useState({});

  const handleInput = (event) => {
    setValues((prev) => ({
      ...prev,
      [event.target.name]: [event.target.value],
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors(validation(values));
    if (errors.email === "" && errors.password === "") {
      axios
        .post("http://localhost:8081/login", values)
        .then((res) => {
          if (res.data === "success") {
            navigate("/home");
          } else {
            alert("Login Error!");
          }
        })
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="shadow-lg bg-light p-3 rounded-3 w-25 border border-1">
        <h2 className="text-center text-success">Sign In</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="email">
              <strong>Email</strong>
            </label>
            <input
              type="email"
              name="email"
              placeholder="Email*"
              className="form-control rounded-1"
              onChange={handleInput}
            />
            {errors.email && (
              <span className="text-danger">{errors.email}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="password">
              <strong>Password</strong>
            </label>
            <input
              type="password"
              name="password"
              placeholder="Password*"
              className="form-control rounded-1"
              onChange={handleInput}
            />
            {errors.password && (
              <span className="text-danger">{errors.password}</span>
            )}
          </div>
          <button
            type="submit"
            className="btn btn-success w-100 mb-2 shadow-sm"
          >
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
