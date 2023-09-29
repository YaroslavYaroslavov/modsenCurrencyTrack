import React from "react";
import ReactDOM from "react-dom";
import "./styled.css";

export const Modal = ({ active, setActive, children }) => {
  return ReactDOM.createPortal(
    <div
      className={active ? "modal active" : "modal"}
      onClick={() => setActive(false)}
    >
      <div
        className={active ? "modal_content active" : "modal_content"}
        onClick={(e) => e.stopPropagation()}
      >
        {children}
      </div>
    </div>,
    document.getElementById("modal-root")
  );
};
