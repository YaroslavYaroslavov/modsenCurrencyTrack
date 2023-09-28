import React from "react";
import "./styled.css";

const CurrencyTable = ({ children, type }) => {
  return (
    <div className="tableWrapper">
      <div className="tableHeader">{type}</div>
      <div className="tableBody">{children}</div>
    </div>
  );
};
export default CurrencyTable;
