import React, { Fragment } from "react";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logo from "../assets/images/hit.png";
import hero from "../assets/images/hero2.png";

const Home = () => (
  // For the main page
  <Fragment>
    <Helmet>
      <title>HIT QUIZ</title>
    </Helmet>
    <div className="flex justify-center mb-10 bg-gradient-to-tr from-[#fff] via-[#e0f1ff] to-[#6cbdff] h-[100vh] px-10 py-5">
      <div className="w-full ">
        <h1 className="font-bold text-5xl mt-[20vh] text-[#556B78]">
          Harare Institute Of Technology QUIZ
        </h1>
        <div className="mt-10 text-[#556B78]">
          <ul className="browser-default mb-10" id="main-list">
            <li>
              The quiz has a duration of 2 minutes and ends as soon as time
              expired
            </li>

            <li>
              Select the option which best answers the question by selecting it
            </li>

            <li>Feel free to quit or give up anytime</li>
          </ul>
          <Link
            className="auth-container bg-yellow-500 text-white font-semibold p-2 rounded-lg hover:bg-yellow-600 w-full"
            to="/play/quiz"
          >
            Play
          </Link>
        </div>
      </div>
      <div className="w-full hidden md:block">
        <img src={logo} className="w-10/12 opacity-90 mt-[20vh]" alt="" />
      </div>
    </div>
  </Fragment>
);

export default Home;
