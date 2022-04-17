import React from "react";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="formContainer">
      <div className="form">
        <h2 className="formHeader">Login</h2>
        <div className="inputs">
          <form action="">
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

            <p className="mb-0 my-1"></p>
            <input className="submitButton" type="submit" value="Login" />
          </form>
        </div>
        <Link className="formToggleBtn" to={`/register`}>
          Don't have an account?
        </Link>
      </div>
    </div>
  );
};

export default Login;
