import React from "react";
import logo from "../../assets/images/logo_big.png";
import "./styled.css";

const Header = () => {
  return (
    <div className="wrapper">
      <div className="text">
        <div className="title-wrapper">
          <span className="title">Modsen Currency </span>
          <span className="title">Tracker</span>
        </div>
        <div className="subtitle">
          Quotes for the dollar and other international currencies.
        </div>
      </div>
      <img src={logo} className="curLogo" alt="" />
    </div>
  );
};
export default Header;
