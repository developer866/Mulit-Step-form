import React, { useState } from "react";
import '../App.css'
import "./ToggleSwitch.css";

const ToggleSwitch = ({ isOn, handleToggle }) => {
  return (
    <label className="switch">
      <input type="checkbox" checked={isOn} onChange={handleToggle} />
      <span className="slider" />
    </label>
  );
};

function Form2() {
  const [isOn, setIsOn] = useState(false);

  const handleToggle = () => {
    setIsOn(!isOn);
  };

  return (
    <div className="form-2-container">
      <h1>Select Your Plan</h1>
      <p>You have the option of monthly or yearly billing</p>

      <div>
        <div className="Form2-options">
          <div className="form-2-icon-1"></div>
          <div className="Form2-detials"> 
            <h3>Arcade</h3>
            <p>${isOn ? "90/yr" : "12/mo"}</p>
            <p>2months free</p>
          </div>
        </div>
        <div className="Form2-options">
          <div className="form-2-icon-2"></div>
          <div >
            <h3>Advance</h3>
            <p>${isOn ? "120/yr" : "12/mo"}</p>
            <p>2months free</p>
          </div>
        </div>
        <div className="Form2-options">
          <div className="form-2-icon-3"></div>
     
          <div>
            <h3>Pro</h3>
            <p>${isOn ? "150/yr" : "15/mo"}</p>
            <p>2months free</p>
          </div>
        </div>
      </div>

      {/* Toggle button */}
      <div className="ToggleSwitich">
        <span>Monthly</span>
        <ToggleSwitch isOn={isOn} handleToggle={handleToggle} />
        <span>Yearly</span>
      </div>
    </div>
  );
}

export default Form2;
