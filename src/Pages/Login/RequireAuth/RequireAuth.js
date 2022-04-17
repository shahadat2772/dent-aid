import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router-dom";
import { auth } from "../../../firebase.init";

const RequireAuth = ({ children }) => {
  const [user] = useAuthState(auth);

  const navigate = useNavigate();

  if (!user) {
    navigate(`/login`);
    return;
  }

  return children;
};

export default RequireAuth;
