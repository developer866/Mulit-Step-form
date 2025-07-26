import React from "react";
import "../App.css";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  const isHome = location.pathname === "/";
  const routeMap = {
    "/": "/Form2",
    "/Form2": "/Form3",
    "/Form3": "/Form4",
    "/Form4": "/ThanksYou",
  };
  const reverseRouteMap = {
    "/Form2": "/",
    "/Form3": "/Form2",
    "/Form4": "/Form3",
    "/ThanksYou": "/Form4",
  };
  const handleNext = () => {
    const nextRoute = routeMap[location.pathname];
    if (nextRoute) {
      navigate(nextRoute);
    }
    if (nextRoute == "/ThanksYou") {
      console.log("hello world");
    }
  };
  const handlePrevious = () => {
    const prevRoute = reverseRouteMap[location.pathname];
    if (prevRoute) {
      navigate(prevRoute);
    }
  };
  return (
    <div
      className="footer"
      style={{
        justifyContent: isHome ? "flex-end" : "space-between",
      }}
    >
      {/* <p onClick={handlePrevious}>go home</p> */}
      {!isHome && <div onClick={handlePrevious}>go back</div>}
      <button onClick={handleNext}>Next step</button>
    </div>
  );
}

export default Footer;
