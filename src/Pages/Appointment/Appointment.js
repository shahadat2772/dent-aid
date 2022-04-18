import React from "react";
import Loading from "../Shared/Loading/Loading";
import "./Appointment.css";

// import services1 from "../../images/services/basic-checkup.png";
// import services2 from "../../images/services/whitning.png";
// import services3 from "../../images/services/implants.png";
// import services4 from "../../images/services/orthodontics.png";
// import services5 from "../../images/services/root-canals.png";
// import services6 from "../../images/services/fillings.png";

import { useParams } from "react-router-dom";

const services = [
  {
    id: 1,
    name: "Basic Checkup",
    price: 11.99,
    description: "Lorem it is short description",
  },
  {
    id: 2,
    name: "Oral Hygiene",
    price: 13.99,
    description: "Lorem it is short description",
  },
  {
    id: 3,
    name: "Implant",
    price: 99.99,
    description: "Lorem it is short description",
  },
  {
    id: 4,
    name: "Orthodontics",
    price: 111.99,
    description: "Lorem it is short description",
  },
  {
    id: 5,
    name: "Root Canal",
    price: 49.99,
    description: "Lorem it is short description",
  },
  {
    id: 6,
    name: "Filling",
    price: 29.99,
    description: "Lorem it is short description",
  },
];

const Appointment = () => {
  const { id } = useParams();

  const selectedService = services.find((service) => service.id == id);

  console.log(selectedService);

  return (
    <div className="appointmentFormContainer">
      <div className="fromContainer">
        <from className="from">
          <p className="appointmentHeader">
            BOOK AN APPOINTMENT{" "}
            {selectedService?.name && (
              <span>FOR {selectedService.name.toUpperCase()}</span>
            )}
          </p>
          <div className="upperField">
            <input placeholder="Your name" type="text" name="" id="" />
            <input placeholder="Your Email" type="text" name="" id="" />
            <input placeholder="Phone Number" type="text" name="" id="" />
            <input placeholder="Appointment Date" type="text" name="" id="" />
          </div>
          <div className="textAreaField">
            <textarea
              name="message"
              id="message"
              cols="30"
              placeholder="Message"
              rows="5"
            ></textarea>
          </div>
          <input className="appointMentButton" type="submit" value="Submit" />
        </from>
      </div>
    </div>
  );
};

export default Appointment;
