import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

const SignUp = () => {
  return (
    <div className="formContainer">
      <div className="form">
        <h2 className="signUpHeader">Register</h2>
        <div className="inputs">
          <form action="">
            <input
              required
              placeholder="Name"
              type="text"
              name="name"
              id="name"
            />
            <input
              required
              placeholder="Email"
              type="email"
              name="email"
              id="email"
            />
            <input
              placeholder="Password"
              type="password"
              name="password"
              id="password"
              required
            />
            <input
              placeholder="Confirm Password"
              type="password"
              name="confirmPassword"
              id="confirmPassword"
              required
            />
            <p className="mb-0 my-1"></p>
            <input className="submitButton" type="submit" value="Register" />
          </form>
        </div>
        <Link className="formToggleBtn" to={`/login`}>
          Already have an account?
        </Link>
      </div>
    </div>
  );
};

export default SignUp;
