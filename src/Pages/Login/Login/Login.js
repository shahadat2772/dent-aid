import React, { useRef, useState } from "react";
import {
  useAuthState,
  useSendPasswordResetEmail,
  useSignInWithEmailAndPassword,
} from "react-firebase-hooks/auth";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import "./Login.css";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  // Auth state hook
  const [user] = useAuthState(auth);
  // Navigator
  const navigate = useNavigate();
  const location = useLocation();

  // Getting last location
  let from = location?.state?.from?.pathname || "/";

  // Sign in Hook
  const [signInWithEmailAndPassword, signedUpUser, loading, error] =
    useSignInWithEmailAndPassword(auth);

  // Password Reset hook
  const [sendPasswordResetEmail, sending, resetPasswordError] =
    useSendPasswordResetEmail(auth);

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
  // Password reset
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

  // Toast for password reset error
  if (resetPasswordError) {
    toast(resetPasswordError.message, { id: "passwordResetErrorToast" });
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
