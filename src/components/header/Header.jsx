import React from "react";
import "./header.css";

const Header = () => {
  return (
    <header>
      <div className="container header__container">
        <h1>Federico Abeldaño</h1>
        <h5 className="text-light">
          {" "}
          Full Stack Developer with experience in Web Development,
        </h5>
        <h5 className="text-light">
          {" "}
          Blockchain Integration, and Database Management
        </h5>
      </div>
    </header>
  );
};

export default Header;
