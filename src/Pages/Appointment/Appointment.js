import React, { useEffect, useState } from "react";
import Loading from "../Shared/Loading/Loading";
import "./Appointment.css";

import { useParams } from "react-router-dom";

const Appointment = () => {
  const { id } = useParams();
  const [service, setService] = useState({});

  useEffect(() => {
    fetch(`http://localhost:5000/service/${id}`)
      .then((res) => res.json())
      .then((data) => setService(data));
  }, [id]);

  return (
    <div className="appointmentFormContainer">
      <div className="fromContainer">
        <div className="from">
          <p className="appointmentHeader">
            BOOK AN APPOINTMENT{" "}
            {service?.name && <span>FOR {service.name.toUpperCase()}</span>}
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
        </div>
      </div>
    </div>
  );
};

export default Appointment;
