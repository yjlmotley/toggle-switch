import React from 'react';
import "../../styles/toggleSwitch.css";

const ToggleSwitch = ({ isOn, onToggle }) => {
  return (
    <label className="toggle-switch">
      <input type="checkbox" checked={isOn} onChange={onToggle} />
      <span className="slider">
        <span className="on">ON</span>
        <span className="off">OFF</span>
      </span>
    </label>
  );
};

export default ToggleSwitch;