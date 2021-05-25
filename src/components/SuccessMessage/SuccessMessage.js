import React from "react";
import "./SuccessMessage.scss";
const SuccessMessage = ({ children, style }) => {
  return (
    <div className="alert-success">
      <div className="success" style={style}>
        {children}
      </div>
    </div>
  );
};

export default SuccessMessage;
