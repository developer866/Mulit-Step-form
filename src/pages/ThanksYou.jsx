import React from "react";
import icon from "../assets/images/icon-thank-you.svg";

function ThanksYou() {
  return (
    <div >
      <img src={icon} alt="my icon" />
      <h1>Thank You!</h1>
      <p >
        Thanks for confirming your subscription! We hope you have fun using our
        platform. If you ever need support, please feel free to email us at
        support@loremgaming.com.
      </p>
    </div>
  );
}

export default ThanksYou;
