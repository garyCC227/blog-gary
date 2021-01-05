import React from "react";

import "./footer.css";

const Footer = () => {
  return (
    <div>
      <footer className="footer">
        <div className="footer-copyright">
          <div className="footer-copyright-wrapper">
            <p className="footer-copyright-text">
              ©{new Date().getFullYear()} | Puskar Adhikari. | All rights
              reserved.{" "}
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
