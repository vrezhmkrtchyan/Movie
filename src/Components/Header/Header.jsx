import React, { useState, useEffect } from "react";
import logo from "../Header-img/Pro Cinema.svg";
import search from "../Header-img/search-interface-symbol.png";
import lang from "../Header-img/internet.png";
import sign from "../Header-img/add-user.png";
import LoginSideBar from "../LoginSideBar/LoginSideBar";
import "./Header.css";
import { NavLink } from "react-router-dom";

const Header = () => {
  const [isView, setIsView] = useState(false)
  const [isFixed, setIsFixed] = useState(false)

  useEffect(() => {
    const HeaderFixed = () => {
      if(window.scrollY > 60){
        setIsFixed(true);
      }else{
        setIsFixed(false)
      }
    }

    window.addEventListener('scroll', HeaderFixed );


    return () => {
      window.removeEventListener("scroll", HeaderFixed);
    }

  }, [])

  return (
    <div className={`Header ${isFixed ? "fixed" : ""}`}>
      <div className="headerContainer">
        <div className="headerRow">
          <div className="logo-wrapper">
            <NavLink to="/">
              <img src={logo} alt="" width={200} />
            </NavLink>
          </div>
          <nav className="nav-block">
            <ul className="nav-menu">
              <li className="nav-list">
                <NavLink to="/">Home</NavLink>
              </li>
              <li className="nav-list">
                <NavLink to="/movies">Movies</NavLink>
              </li>
              <li className="nav-list">
                <NavLink to="/tv-shows">TV Shows</NavLink>
              </li>
              <li className="nav-list">
                <NavLink to="/genres">Genres</NavLink>
              </li>
            </ul>
          </nav>
          <div className="headerMore-details">
            <div className="headerMore-search">
              <img src={search} alt="" width={30} />
            </div>
            <div className="headerMore-lang">
              <img src={lang} alt="" width={30} />
            </div>
            <div className="headerMore-Sing" onClick={() => setIsView(true)}>
              <img src={sign} alt="" width={30} />
              <span>Sing Up</span>
            </div>
          </div>
        </div>
      </div>
      <LoginSideBar isView={isView} setIsView={setIsView} />
    </div>
  );
};

export default Header;
