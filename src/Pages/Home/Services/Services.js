import React from "react";
import "./Services.css";

import services1 from "../../../images/services/basic-checkup.png";
import services2 from "../../../images/services/whitning.png";
import services3 from "../../../images/services/implants.png";
import services4 from "../../../images/services/orthodontics.png";
import services5 from "../../../images/services/root-canals.png";
import services6 from "../../../images/services/fillings.png";
import EachService from "../EachService/EachService";

// Services
const services = [
  {
    id: 1,
    img: services1,
    name: "Basic Checkup",
    price: 11.99,
    description: "Lorem it is short description",
  },
  {
    id: 2,
    img: services2,
    name: "Oral Hygiene",
    price: 13.99,
    description: "Lorem it is short description",
  },
  {
    id: 3,
    img: services3,
    name: "Implant",
    price: 99.99,
    description: "Lorem it is short description",
  },
  {
    id: 4,
    img: services4,
    name: "Orthodontics",
    price: 111.99,
    description: "Lorem it is short description",
  },
  {
    id: 5,
    img: services5,
    name: "Root Canal",
    price: 49.99,
    description: "Lorem it is short description",
  },
  {
    id: 6,
    img: services6,
    name: "Filling",
    price: 29.99,
    description: "Lorem it is short description",
  },
];

const Services = () => {
  return (
    <div className="servicesContainer">
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
