import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();

  let year = date.getFullYear();

  return (
    <footer className="footer">
      <div className="footerContainer">
        <h3 className="text-white">Newsletter</h3>

        <p className="text-white">
          Subscribe to our newsletter and get <br /> 10% discount for your next
          appointment.
        </p>

        <div className="upperFooterInputAndBtnContainer">
          <input type="" placeholder="Enter your email..." />
          <button>Subscribe</button>
        </div>
      </div>
      <p className="copyrightText">© {year} DentAid. All Rights Reserved</p>
    </footer>
  );
};

export default Footer;
