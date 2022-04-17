import React from "react";
import { useNavigate } from "react-router-dom";
import "./EachService.css";

const EachService = ({ service }) => {
  const navigate = useNavigate();

  const { img, name, description, id, price } = service;
  console.log(id);
  return (
    <div className="eachServiceContainer">
      <img src={img} alt="" />
      <div className="eachServiceInfo">
        <p className="serviceName">{name}</p>
        <p className="servicePrice">at ${price}</p>
        <p className="serviceDescription">{description}</p>
      </div>
      <button
        onClick={() => navigate(`/appointment/${id}`)}
        className="bookBtn"
      >
        Book Appointment
      </button>
    </div>
  );
};

export default EachService;
