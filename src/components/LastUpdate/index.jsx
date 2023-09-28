import React from "react";
import "./styled.css";

const LastUpdate = ({ lastUpdated = "2023-09-19T00:00:00Z" }) => {
  const timeLastUpdate = new Date(lastUpdated);
  const ampm = timeLastUpdate.getHours() >= 12 ? "pm" : "am";
  return (
    <div className="lastupdate">
      <div className="indicator"></div>
      <div className="lastupdate-text">
        Last updated at {timeLastUpdate.getHours() % 12}:
        {timeLastUpdate.getMinutes()}
        {ampm}
      </div>
    </div>
  );
};
export default LastUpdate;
