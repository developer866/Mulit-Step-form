import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import Headers from "./pages/Headers";
import "./app.css";
import "./AppDesktop.css";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Form4 from "./pages/Form4";
import ThanksYou from "./pages/ThanksYou";
import Footer from "./pages/Footer";
function App() {
  const location = useLocation();

  const isThankYouPage = location.pathname === "/ThanksYou";
  return (
    <div className="container">
      <Headers />
      <div className="sub-container">
        <div className="forms">
          <Routes>
            <Route path="/" element={<Form1 />} />
            <Route path="/Form2" element={<Form2 />} />
            <Route path="/Form3" element={<Form3 />} />
            <Route path="/Form4" element={<Form4 />} />
            <Route path="/ThanksYou" element={<ThanksYou />} />
          </Routes>
        </div>
        <div className="footer" style={{alignItems:"flex-end"}}>{!isThankYouPage && <Footer />}</div>
      </div>
    </div>
  );
}

export default App;
