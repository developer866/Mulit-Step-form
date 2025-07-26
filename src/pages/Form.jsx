import React from "react";
// import "./app.css";
import { Routes ,Route } from "react-router-dom";
import "../App.css";
import Form1 from "./Form1";
import Form2 from "./Form2";
import Form3 from "./Form3";
import Form4 from "./Form4";
import ThanksYou from "./ThanksYou";

function Form() {
  return (
    <div className="form">
      {" "}
      <Routes>
        <Route path="/" element={<Form1 />} />
        <Route path="/Form2" element={<Form2 />} />
        <Route path="/Form3" element={<Form3 />} />
        <Route path="/Form4" element={<Form4 />} />
        <Route path="/ThanksYou" element={<ThanksYou />} />
      </Routes>
    </div>
  );
}

export default Form;
