import React from "react";
import "./app.css";
import Footer from "./pages/Footer";
import Form from "./pages/Form";
import Header from "./pages/Header";
import Form1 from "./pages/Form1";
import Form2 from "./pages/Form2";
import Form3 from "./pages/Form3";
import Form4 from "./pages/Form4";
import ThanksYou from "./pages/ThanksYou";
import { useLocation } from "react-router-dom";

function App() {
  const location = useLocation();
  const isThankYouPage = location.pathname === "/ThanksYou";

  return (
    <div className="container">
      {/* Header */}
      <div className="header">
        <div>
          <Header />
        </div>
      </div>
      {/* form */}
      <div className="Right-side">
        <Form />
        {!isThankYouPage && <Footer />}
        {/* <Footer /> */}
      </div>
    </div>
  );
}

export default App;
