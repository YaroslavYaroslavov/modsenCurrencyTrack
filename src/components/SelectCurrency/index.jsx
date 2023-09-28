import React, { useEffect, useState, useRef } from "react";
import "./styled.css";
import { currencyIcons } from "../../constans/currencyIcons";
import axios from "axios";
let myChart = null;

const SelectCurrency = ({ handleCurrencyChange, selectedCurrency }) => {
  return (
    <>
      <select
        className="selectCurrency"
        name=""
        id=""
        value={selectedCurrency}
        onChange={handleCurrencyChange}
      >
        {Object.keys(currencyIcons).map((key) => {
          const element = currencyIcons[key];
          if (element.isCurrency) {
            return (
              <option key={key} value={key}>
                {element.displayName}
              </option>
            );
          }
        })}
      </select>
    </>
  );
};
export default SelectCurrency;
