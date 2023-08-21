import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import validation from "./SignupValidation";
import axios from "axios";

function Signup() {
  const [values, setValues] = useState({
    firstName: "",
    lastName: "",
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
    if (
      errors.firstName === "" &&
      errors.lastName === "" &&
      errors.email === "" &&
      errors.password === ""
    ) {
      axios
        .post("http://localhost:8081/signup", values)
        .then((res) => navigate("/"))
        .catch((err) => console.log(err));
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center bg-white vh-100">
      <div className="shadow-lg bg-light p-3 rounded-3 w-25 border border-1">
        <h2 className="text-center text-success">Sign Up</h2>
        <form action="" onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="first-name">
              <strong>First Name</strong>
            </label>
            <input
              type="text"
              name="firstName"
              placeholder="First Name*"
              className="form-control rounded-1"
              onChange={handleInput}
            />
            {errors.firstName && (
              <span className="text-danger">{errors.firstName}</span>
            )}
          </div>
          <div className="mb-3">
            <label htmlFor="last-name">
              <strong>Last Name</strong>
            </label>
            <input
              type="text"
              name="lastName"
              placeholder="Last Name*"
              className="form-control rounded-1"
              onChange={handleInput}
            />
            {errors.lastName && (
              <span className="text-danger">{errors.lastName}</span>
            )}
          </div>
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
