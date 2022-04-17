import React from "react";
import { Spinner } from "react-bootstrap";
import "./Loading.css";

const Loading = () => {
  return (
    <div className="spinnerContainer d-flex justify-content-center align-items-center">
      <Spinner animation="border" variant="secondary" />
    </div>
  );
};

export default Loading;
