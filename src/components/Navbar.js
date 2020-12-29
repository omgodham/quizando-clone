import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";

export default function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__block">
        <div className="navbar__logo">
        <img className="logo__image" src="https://www.quizando.com/assets/Quizando-Logo.png" />
        </div>
        <div className="navbar__right">
          <ul className="nav__menu">
            <li>
              <a href="#" className="nav__links">
                Live!
              </a>
            </li>
            <li>
              <a href="#" className="nav__links">
                Classics
              </a>
            </li>
            <li>
              <a href="#" className="nav__links">
                Free Games
              </a>
            </li>
            <li>
              <a href="#" className="nav__links">
                Private Events
              </a>
            </li>
            <li>
              <a href="#" className="nav__links">
                Our Partners
              </a>
            </li>
          </ul>
       
        <div className="signup">
          <select className="dropdown">
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
          </select>
          <AccountCircleIcon className="signup__icon" />
          <span className="login">Login</span>
          <span>Sign Up</span>
        </div>
        </div>
    </div>
    </div>
  );
}
