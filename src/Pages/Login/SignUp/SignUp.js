import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";
import {
  useCreateUserWithEmailAndPassword,
  useUpdateProfile,
} from "react-firebase-hooks/auth";
import "./SignUp.css";
import { async } from "@firebase/util";
import SocialLogin from "../SocialLogin/SocialLogin";

const SignUp = () => {
  // Create user hook
  const [createUserWithEmailAndPassword, user, loading, userCreateError] =
    useCreateUserWithEmailAndPassword(auth, { sendEmailVerification: true });

  // User profile update hook
  const [updateProfile, updating, userProfileerror] = useUpdateProfile(auth);

  // Error state
  const [signupError, setSignupError] = useState("");

  // Navigator
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    // setSignupError("");

    event.preventDefault();
    const displayName = event.target.name.value;
    const email = event.target.email.value;
    const password = event.target.password.value;
    const confirmPassword = event.target.confirmPassword.value;

    if (password !== confirmPassword) {
      setSignupError("Confirm Password did not matched!");
      return;
    }
    await createUserWithEmailAndPassword(email, password);
    await updateProfile({ displayName });
  };
  if (user) {
    navigate(`/home`);
  }

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
            {userCreateError && (
              <p className="text-danger">{userCreateError.message}</p>
            )}
            {signupError && <p className="text-danger">{signupError}</p>}
            <input className="submitButton" type="submit" value="Register" />
          </form>
        </div>
        <Link className="formToggleBtn" to={`/login`}>
          Already have an account?
        </Link>
        <SocialLogin></SocialLogin>
      </div>
    </div>
  );
};

export default SignUp;
