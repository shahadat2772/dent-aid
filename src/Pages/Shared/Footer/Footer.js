import React from "react";
import "./Footer.css";

const Footer = () => {
  let date = new Date();

  let year = date.getFullYear();

  return (
    <div className="footerComponent">
      <footer className="footer">
        <div className="footerContainer">
          <div className="links">
            <h5 className="text-white">SERVICES</h5>
            <a href="">Branding</a>
            <a href="">Design</a>
            <a href="">Marketing</a>
            <a href="">Advertisement</a>
          </div>
          <div className="links">
            <h5 className="text-white">LEGAL</h5>
            <a href="">Terms of use</a>
            <a href="">Privacy policy</a>
            <a href="">Cookie policy</a>
          </div>
          <div className="links">
            <h5 className="text-white">COMPANY</h5>
            <a href="">About us</a>
            <a href="">Contact</a>
            <a href="">Jobs</a>
            <a href="">Press kit</a>
          </div>
          <div className="newsTeller">
            <h5 style={{ marginBottom: "5px" }} className="text-white">
              Newsletter
            </h5>

            <p
              style={{
                fontSize: "14px",
                marginBottom: "8px",
              }}
              className="text-white"
            >
              Subscribe to our newsletter and get <br /> 10% discount for your
              next appointment.
            </p>

            <div className="upperFooterInputAndBtnContainer">
              <input type="" placeholder="Enter your email..." />
              <button>Subscribe</button>
            </div>
          </div>
        </div>
        <p className="copyrightText">© {year} DentAid. All Rights Reserved</p>
      </footer>
    </div>
  );
};

export default Footer;
