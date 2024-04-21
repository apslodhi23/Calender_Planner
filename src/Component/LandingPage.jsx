import { useState } from "react";
import "./LandingPage.css";

const LandingPage = ({ handleView }) => {
  return (
    <>
      <div className="main">
        <div className="main-left">
          <h1>
            Welcome to <span>Calender</span>
          </h1>
          <h3>
            Stay organized and seize your day with our intuitive calendar
            feature! Effortlessly plan your tasks, appointments, and goals all
            in one place.<br></br> Welcome to seamless productivity.
          </h3>
        </div>

        <div className="main-right">
          <img src="/priview.png" alt="priview" />
          <button onClick={() => handleView(true)} className="start-button">
            Let's Start
          </button>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
