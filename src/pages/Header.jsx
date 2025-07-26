import React from "react";
import { useLocation } from "react-router-dom";
import "../app.css";

function Header() {
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
    <div className="Nav" >
      {[1, 2, 3, 4].map((num) => (
        <div key={num} className="Num-block">
          <button className={`num ${currentStep === num ? "active" : ""}`}>
            {num}
          </button>

          <div className="Nav-details">
            <p>{numdetails[num].steps}</p>
            <p>{numdetails[num].value}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Header;
