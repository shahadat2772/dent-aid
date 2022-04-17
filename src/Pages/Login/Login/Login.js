import React, { useRef, useState } from "react";
import {
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const location = useLocation();

  // Getting last location
  let from = location.state?.from?.pathname || "/";

  const [signInWithEmailAndPassword, user, loading, error] =
    useSignInWithEmailAndPassword(auth);

  const [sendPasswordResetEmail, sending, resetPasswordError] =
    useSendPasswordResetEmail(auth);

  // Navigator
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    const email = event.target.email.value;
    const password = event.target.password.value;

    await signInWithEmailAndPassword(email, password);
  };
  if (user) {
    navigate(from, { replace: true });
  }

  const emailRef = useRef("");
  const resetPassword = () => {
    const email = emailRef.current.value;
    if (email) {
      sendPasswordResetEmail(email);
      toast("Password reset email sended!");
    } else {
      toast("Enter email to reset password", {
        id: "passwordResetToast",
      });
    }
  };

  if (resetPasswordError) {
    toast(resetPasswordError.message);
  }

  return (
    <div className="formContainer">
      <div className="form">
        <h2 className="formHeader">Login</h2>
        <div className="inputs">
          <form onSubmit={handleSubmit} action="">
            <input
              ref={emailRef}
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
            {error && <p className="text-danger">{error.message}</p>}
            <input className="submitButton" type="submit" value="Login" />
          </form>
        </div>
        <Link className="formToggleBtn" to={`/register`}>
          Don't have an account?
        </Link>
        <button className="passwordResetBtn" onClick={resetPassword}>
          Forgot password?
        </button>
      </div>
      <Toaster />
    </div>
  );
};

export default Login;
