import React, { useEffect, useState } from "react";
import "./Services.css";
import EachService from "../EachService/EachService";

const Services = () => {
  const [services, setServices] = useState([]);

  useEffect(() => {
    fetch("https://peaceful-river-56449.herokuapp.com/services")
      .then((res) => res.json())
      .then((data) => setServices(data));
  }, []);

  return (
    <div id="services" className="servicesContainer">
      <h2 className="serviceHeader"> Our Services</h2>
      <div className="services ">
        {services.map((service) => (
          <EachService key={service.id} service={service}></EachService>
        ))}
      </div>
    </div>
  );
};

export default Services;
