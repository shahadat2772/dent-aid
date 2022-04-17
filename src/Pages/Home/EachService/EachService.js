import React from "react";
import "./EachService.css";

const EachService = ({ service }) => {
  const { img, name, description, id, price } = service;
  return (
    <div className="eachServiceContainer">
      <img src={img} alt="" />
      <div className="eachServiceInfo">
        <p className="serviceName">{name}</p>
        <p className="servicePrice">at ${price}</p>
        <p className="serviceDescription">{description}</p>
      </div>
      <button className="bookBtn">Book Appointment</button>
    </div>
  );
};

export default EachService;
