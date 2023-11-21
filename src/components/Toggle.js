import React from "react";
import {useState} from "react";

function Toggle() {
  const [isON, setIsOn] = useState(false);

  const color = isON ? "red" : "white";

  function handleClick() {
    //setIsOn((isOn) => !isOn);
    setIsOn(!isON)
  }
  return <button onClick={handleClick} style={{ background: color }}>{isON ? "ON" : "Off"}</button>;
}

export default Toggle;
