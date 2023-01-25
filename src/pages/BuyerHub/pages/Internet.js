import React from "react";
import { Link } from "react-router-dom";
import "./Internet.css";

const Internet = () => {
  return (
    <div className="internet-ctn">
      <h1>NO INTERNET CONNECTION OR SERVER DOWN</h1>
      <p>Check your internet and be sure it's properly connected</p>

      <div>
        <Link to="/">
          <button>Back to Home page</button>
        </Link>
      </div>
    </div>
  );
};

export default Internet;
