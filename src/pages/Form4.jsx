import React, { useState } from "react";

function Form4() {
  const [plan, setPlan] = useState(true);
  const details = [
    {
      details: "online service",
      price: "+$1/mo",
      price_yearly: "+$10/year",
    },
    {
      details: "larger storage",
      price: "+$2/mo",
      price_yearly: "+$120/year",
    },
  ];

  const togglePlan = () => {
    setPlan((prev) => !prev);

  };

  return (
    <div className="Form4">
      <div>
        <h2>Finishing up</h2>
        <p>Double-check everything looks OK before confirming</p>
      </div>

      <div className="Arcade">
        <div className="Arcade_details">
          <h3>Arcade ({plan ? "Monthly" : "Yearly"})</h3>
          <p href="" onClick={togglePlan}>
            Change
          </p>
        </div>
        <p>{plan ? "$9/mo" : "$90/yr"}</p>
      </div>

      <div className="Form4-details">
        {details.map((opt, index) => (
          <div key={index} className="Forms-details-sub">
            <h4>{opt.details}</h4>
            <p>
              <strong>{plan ? opt.price : opt.price_yearly}</strong>
            </p>
          </div>
        ))}
      </div>

      <div className="Total">
        <h4>Total ({plan ? "per month" : "per year"})</h4>
        <p>
          <strong>{plan ? "+$12/mo" : "+$120/yr"}</strong>
        </p>
      </div>
    </div>
  );
}

export default Form4;
