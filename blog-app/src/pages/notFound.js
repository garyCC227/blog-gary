import React from "react";
import { Link } from "react-router-dom";

import "./notFound.css";

const NotFound = () => {
  return (
    <div>
      <div className="notfound">
        <div className="title">404!</div>
        <p>The Page You're Looking For Was Not Found.</p>
        <div className="btns">
          <Link to="/home" className="button">
            Go back!
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
