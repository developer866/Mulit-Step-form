import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import "../app.css";

function Footer() {
  const location = useLocation();
  const navigate = useNavigate();

  // Map current route to the next route
  const isHome = location.pathname === "/ThanksYou";

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
   
    >
      {!isHome && (
        <div onClick={handlePrevious} className="go-back">
          go back
        </div>
      )}
      <button onClick={handleNext}>Next step</button>
    </div>
  );
}

export default Footer;
