import React from "react";
import { useState } from "react";

function AddOns() {
  const [selected, setSelected] = useState([]);

  const handleToggle = (value) => {
    setSelected((prev) =>
      prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
    );
  };

  const options = [
    {
      value: "online",
      label: "Online service",
      p: "Access to multiplayer games ",
      price: "+$1/mo",
    },
    {
      value: "storage",
      label: "Larger storage",
      p: "Extra 1TB of cloud save",
      price: "+$2/mo",
    },
    {
      value: "profile",
      label: "Custom profile",
      p: "Custom theme on your profile ",
      price: "+$2/mo",
    },
  ];

  return (
    <div>
      {options.map((opt,index) => (
        <div key={index} className="Form3" onClick={() => handleToggle(opt.value)}>
          {/* Left: Checkbox + Info */}
          <div className="Form3-leftside">
            <input
              type="checkbox"
              checked={selected.includes(opt.value)}
              onChange={() => {}}
              onClick={(e) => e.stopPropagation()} 
            />
            <div>
              <p>{opt.label}</p>
              <p>{opt.p}</p>
            </div>
          </div>

          {/* Right: Price */}
          <div>{opt.price}</div>
        </div>
      ))}
    </div>
  );
}
function Form3() {
  return (
    <div>
      <div>
        <h2>Pick add-ons</h2>
        <p> Add-ons help enhance your gaming experience.</p>
      </div>
      <AddOns />
    </div>
  );
}

export default Form3;
