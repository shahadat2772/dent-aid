import React from "react";
import Loading from "../Shared/Loading/Loading";
import "./Appointment.css";

const Appointment = () => {
  return (
    <div className="appointmentFormContainer">
      <div className="fromContainer">
        <div className="from">
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
