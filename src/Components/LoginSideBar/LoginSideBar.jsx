import React, { useState } from "react";
import close from "./close.png";
import "./LoginSideBar.css";
import { NavLink } from "react-router-dom";

const LoginSideBar = ({ setIsView, isView }) => {
  return (
    <div className={`LoginSideBar ${isView ? "active" : ""}`}>
      <div
        className="LoginSideBar-close"
        onClick={() => setIsView(false)}
        style={{ height: "28px" }}
      >
        <img src={close} alt="" width={28} />
      </div>
      <div className="LoginSideBar-inner">
        <div className="LoginSideBar-top">
          <h1>Sign Up</h1>
          <p>it's Quick & Simple</p>
        </div>
        <div className="LoginSideBar-bottom">
          <form>
            <div className="LoginSideBar-items">
              <input type="text" name="Name" required />
              <label>Name</label>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <circle
                    cx="10"
                    cy="6"
                    r="4"
                    stroke="currentColor"
                    stroke-width="1.5"
                  ></circle>{" "}
                  <path
                    d="M19 2C19 2 21 3.2 21 6C21 8.8 19 10 19 10"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M17 4C17 4 18 4.6 18 6C18 7.4 17 8 17 8"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                  <path
                    d="M13 20.6151C12.0907 20.8619 11.0736 21 10 21C6.13401 21 3 19.2091 3 17C3 14.7909 6.13401 13 10 13C13.866 13 17 14.7909 17 17C17 17.3453 16.9234 17.6804 16.7795 18"
                    stroke="currentColor"
                    stroke-width="1.5"
                    stroke-linecap="round"
                  ></path>{" "}
                </g>
              </svg>
            </div>
            <div className="LoginSideBar-items">
              <input type="text" name="Email" required />
              <label>Email</label>
              <svg
                viewBox="0 0 24 24"
                fill="none"
                width={28}
                height={28}
                xmlns="http://www.w3.org/2000/svg"
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    d="M4 7.00005L10.2 11.65C11.2667 12.45 12.7333 12.45 13.8 11.65L20 7"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  ></path>{" "}
                  <rect
                    x="3"
                    y="5"
                    width="18"
                    height="14"
                    rx="2"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                  ></rect>{" "}
                </g>
              </svg>
            </div>
            <div className="LoginSideBar-items">
              <input type="password" name="Password" required />
              <label>Password</label>
              <svg
                viewBox="0 0 48 48"
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                width={25}
                height={25}
              >
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <g id="Layer_2" data-name="Layer 2">
                    {" "}
                    <g id="invisible_box" data-name="invisible box">
                      {" "}
                      <rect fill="none" stroke="currentColor"></rect>{" "}
                    </g>{" "}
                    <g id="Layer_7" data-name="Layer 7">
                      {" "}
                      <g>
                        {" "}
                        <path
                          stroke="currentColor"
                          d="M39,18H35V13A11,11,0,0,0,24,2H22A11,11,0,0,0,11,13v5H7a2,2,0,0,0-2,2V44a2,2,0,0,0,2,2H39a2,2,0,0,0,2-2V20A2,2,0,0,0,39,18ZM15,13a7,7,0,0,1,7-7h2a7,7,0,0,1,7,7v5H15ZM37,42H9V22H37Z"
                        ></path>{" "}
                        <circle
                          cx="15"
                          cy="32"
                          r="3"
                          stroke="currentColor"
                        ></circle>{" "}
                        <circle
                          cx="23"
                          cy="32"
                          r="3"
                          stroke="currentColor"
                        ></circle>{" "}
                        <circle
                          cx="31"
                          cy="32"
                          r="3"
                          stroke="currentColor"
                        ></circle>{" "}
                      </g>{" "}
                    </g>{" "}
                  </g>{" "}
                </g>
              </svg>
            </div>
            <div className="LoginSideBar-description">
              <p>
                Create New Account Here <NavLink to='register'>Register!!</NavLink>
              </p>
            </div>
            <div className="LoginSideBar-btn">
              <button>Submit </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default LoginSideBar;
