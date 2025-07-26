import React from "react";
import { Link } from "react-router-dom";
import "../App.css"
function Form1() {
  return (
    <div>
      <div>
        <h1>Personal info</h1>
        <p>Please provide your name,email,address, and phone number</p>
        {/* Inputs */}
        <div >
          <div className="form-1-inputs">
            <label htmlFor="name">Name</label>
            <input
              type="Name"
              name="Name"
              id=""
              placeholder="e.g. Stephen King"
            />
          </div>
          <div>
            <label htmlFor="Email address">Email Address</label>
            <input
              type="email"
              name="email"
              id=""
              placeholder="e.g StephenKing@lorem.com"
            />
          </div>
          <div>
            <label htmlFor="Phone Number">Phone Number</label>
            <input
              type="text"
              name=""
              id=""
              placeholder="e.g +234 123 234 234"
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Form1;
