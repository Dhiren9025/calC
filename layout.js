import React, { useState } from "react";
import "./layout.css";
import Output from "./output";

const Layout = (props) => {
  const [input, setInput] = useState("");
  const [result, setResult] = useState("");

  const handleClick = (value) => {
    if (value === "=") {
      try {
        const res = eval(input);
        setResult(res);
      } catch (err) {
        setResult("Math error");
      }
    } else if (value === "C") {
      setInput("");
      setResult("");
    } else if (value === "DEL") {
      setInput(input.slice(0, -1));
    } else {
      setInput(input + value);
    }
  };

  return (
    <div className="frame">
      <div className="calculator">
        <br />
        <Output user={input} answer={result} />
        <img />
        <div className="keys">
          <input
            type="button"
            value={"C"}
            className="button clear"
            onClick={() => handleClick("C")}
          />
          <input
            type="button"
            value={"DEL"}
            className="button clear"
            onClick={() => handleClick("DEL")}
          />
          <input
            type="button"
            value={"%"}
            className="button operator"
            onClick={() => handleClick("%")}
          />
          <input
            type="button"
            value={"/"}
            className="button operator"
            onClick={() => handleClick("/")}
          />

          <input
            type="button"
            value={"7"}
            className="button"
            onClick={() => handleClick("7")}
          />
          <input
            type="button"
            value={"8"}
            className="button"
            onClick={() => handleClick("8")}
          />
          <input
            type="button"
            value={"9"}
            className="button"
            onClick={() => handleClick("9")}
          />
          <input
            type="button"
            value={"*"}
            className="button operator"
            onClick={() => handleClick("*")}
          />

          <input
            type="button"
            value={"4"}
            className="button"
            onClick={() => handleClick("4")}
          />
          <input
            type="button"
            value={"5"}
            className="button"
            onClick={() => handleClick("5")}
          />
          <input
            type="button"
            value={"6"}
            className="button"
            onClick={() => handleClick("6")}
          />
          <input
            type="button"
            value={"-"}
            className="button operator"
            onClick={() => handleClick("-")}
          />

          <input
            type="button"
            value={"1"}
            className="button"
            onClick={() => handleClick("1")}
          />
          <input
            type="button"
            value={"2"}
            className="button"
            onClick={() => handleClick("2")}
          />
          <input
            type="button"
            value={"3"}
            className="button"
            onClick={() => handleClick("3")}
          />
          <input
            type="button"
            value={"+"}
            className="button operator"
            onClick={() => handleClick("+")}
          />

          <input
            type="button"
            value={"0"}
            className="button"
            onClick={() => handleClick("0")}
          />
          <input
            type="button"
            value={"."}
            className="button"
            onClick={() => handleClick(".")}
          />
          <input
            type="button"
            value={"="}
            className="button operator"
            onClick={() => handleClick("=")}
          />
        </div>
      </div>
    </div>
  );
};

export default Layout;
