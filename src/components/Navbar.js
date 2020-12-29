import React from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import "./Navbar.css";

export default function Navbar() {
  function show() {
    const menu=document.querySelector("#vertical__navbar_block");
    menu.classList.toggle("vertical__navbar__active");
  }

  return (
    <div className="navbar">
      <div className="navbar__login__separate__block">
        <div className="signup" id="separate__signup">
          <select className="dropdown" id="separate__dropdown">
            <option>EUR</option>
            <option>USD</option>
            <option>GBP</option>
          </select>
          <AccountCircleIcon className="separate__icon" />
          <span className="login">Login</span>
          <span>Sign Up</span>
        </div>
      </div>
      <div className="mobile-menu-icon" id="#mobile-menu" onClick={show}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar__block">
        <div className="navbar__logo">
          <img
            className="logo__image"
            src="https://www.quizando.com/assets/Quizando-Logo.png"
          />
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
      <div className="vertical__navbar" id="vertical__navbar_block">
        <div className="vertical__login">
        <img src="https://www.quizando.com/assets/nav_login_mobile.png" />
          <h2>Login</h2>
        </div>
        <div className="vertical__createaccount">
        <img src="https://www.quizando.com/assets/nav_reg_small.png" />
          <h2>Create Account</h2>
        </div>
        <div className="vertical__options">
        <ul className="vertical__nav__menu">
        <li className="menu__title"><a href="#" style={{color:'white'}}>Quizzes</a></li>
        <li><img className="images__icons" src="https://www.quizando.com/assets/live_quiz.png"/> <a href="#">Live Quizzes</a></li>
        <li><img className="images__icons" src="https://www.quizando.com/assets/classics_quiz.png" /><a href="#">Classic Quizzes</a></li>
        <li><img className="images__icons" src="https://www.quizando.com/assets/notokens_quiz.png" /> <a href="#">Free Games</a></li>
        <li><img className="images__icons" src="https://www.quizando.com/assets/notokens_quiz.png" /> <a href="#">Private Events</a></li>
        <li><img src="https://www.quizando.com/assets/how_to_play.png" /> <a href="#">How to Play?</a></li>
        <li><img src="https://www.quizando.com/assets/meet_the_hosts.png" /> <a href="#">Our Partners</a></li>
        <li><img src="https://www.quizando.com/assets/meet_the_hosts.png" /> <a href="#">Become a Partner</a></li>
        <li><img src="https://www.quizando.com/assets/meet_the_hosts.png" /> <a href="#">Go To Partner Account</a></li>
        <li className="menu__title"><a href="#" style={{color:'white'}}>Other</a></li>
        <li><img src="https://www.quizando.com/assets/about.png" /> <a href="#">About</a></li>
        <li><img src="https://www.quizando.com/assets/t_and_c.png" /> <a href="#">Terms & Conditions</a></li>
        <li><img src="https://www.quizando.com/assets/contact_us.png" /> <a href="#">Contact us</a></li>
        </ul>
        </div>
        </div>
    </div>
  );
}
