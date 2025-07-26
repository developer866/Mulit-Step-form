import React from "react";
import { useLocation } from "react-router-dom";
import "../app.css";

function Headers() {
  const location = useLocation();

  const routeToStep = {
    "/": 1,
    "/Form2": 2,
    "/Form3": 3,
    "/Form4": 4,
    "/ThanksYou": 4,
  };

  const numdetails = {
    1: {
      steps: "Step 1",
      value: "Your info",
    },
    2: {
      steps: "Step 2",
      value: "Select plan",
    },
    3: {
      steps: "Step 3",
      value: "Add-ons",
    },
    4: {
      steps: "Step 4",
      value: "Summary",
    },
  };

  const currentStep = routeToStep[location.pathname];

  return (
    <div className="headers">
      <div className="sub-header">
        {[1, 2, 3, 4].map((num) => (
          <div key={num} className="sub-header-sub">
            <button className={`num ${currentStep === num ? "active" : ""}`}>
              {num}
            </button>

            <div className="step-text">
              <p className="step-label">{numdetails[num].steps}</p>
              <p className="step-title">{numdetails[num].value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Headers;
