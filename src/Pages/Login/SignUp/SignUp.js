import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";

import "./SignUp.css";
import { async } from "@firebase/util";

const SignUp = () => {
  const [createUserWithEmailAndPassword, user, loading, userCreateError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  const [updateProfile, updating, userProfileerror] = useUpdateProfile(auth);

  // Error state
  const [signupError, setSignupError] = useState("");

  // Navigator
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setSignupError("Password did not matched");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
    navigate(`/home`);
  };

  return (
    <div className="formContainer">
      <div className="form">
        <h2 className="formHeader">Register</h2>
        <div className="inputs">
          <form onSubmit={handleSubmit} action="">
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
