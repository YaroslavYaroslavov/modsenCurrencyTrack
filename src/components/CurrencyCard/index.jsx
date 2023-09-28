import React from "react";
import "./styled.css";
import { currencyIcons } from "../../constans/currencyIcons";
const CurrencyCard = ({
  currency = "ifix",
  convertTo = null,
  onClick,
  data,
}) => {
  const currencyFrom = currencyIcons[currency];
  const currencyTo = currencyIcons[convertTo];
  const notVisible = currencyFrom === currencyTo;
  const convertedValue =
    data?.data[currencyTo.code].value / data?.data[currencyFrom.code].value;
  if (notVisible) {
    return null;
  }
  return (
    <div
      onClick={() => {
        onClick(true);
      }}
      className="card-wrapper"
    >
      <img src={currencyFrom?.icon} alt="" className="card-ico" />
      <div className="card-text">
        <div className="card-title">{currencyFrom?.displayName}</div>
        <div className="card-subtitle">
          {(convertTo &&
            currencyTo?.currencyText + " " + convertedValue.toFixed(5)) ||
            "No info yet"}
        </div>
      </div>
    </div>
  );
};
export default React.memo(CurrencyCard);
