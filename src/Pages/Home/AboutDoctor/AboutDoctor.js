import React from "react";
import "./AboutDoctor.css";
import doctor from "../../../images/doctor/doctor1.png";

const AboutDoctor = () => {
  return (
    <div className="aboutDocContainer">
      <div className="aboutDoctor">
        <div className="docInfo">
          <h2>ABOUT DOCTOR</h2>
          <h4>Dr. Edward Eric Jr</h4>
          <p className="mb-4">Oral Surgeon</p>
          <p>
            With over 20 years of clinical experience, Edward’s practice follows
            the philosophy that therapy is most successful when people are
            treated as whole human beings, not as individual parts, and his work
            is focused on finding and treating the root causes.
          </p>
          <li>Did the DDS from Dhaka Medical Collage</li>
        </div>
      </div>
      <div className="doctorImg">
        <img className="img-fluid" src={doctor} alt="" />
      </div>
    </div>
  );
};

export default AboutDoctor;
