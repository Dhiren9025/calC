import React from "react";
import "./outputRow.css";

const OutputRow = (props) => {
  return (
    <div className="output-row">
      <input
        type="text"
        readOnly
        className="screen"
        style={props.textSize}
        value={props.value}
      />
    </div>
  );
};

export default OutputRow;
