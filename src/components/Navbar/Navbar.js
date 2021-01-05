import React,{useState} from "react";
import AccountCircleIcon from "@material-ui/icons/AccountCircle";
import {Link} from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [flag,setFlag]=useState(false);

  function show(){
      setFlag(!flag);
  }
  function hide(){
    setFlag(false);
}
window.addEventListener('resize', function(event) {
  console.log(window.innerWidth);
  if (window.innerWidth > 993) {
    setFlag(false);
  }
});
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
          <Link to="/login" style={{textDecoration:`none`,color:'white'}}>
          <div className="no" ><h5 onClick={hide}>Login</h5>
          </div>
          </Link>
          <Link to="/signup" style={{textDecoration:`none`,color:'white'}}><h5 onClick={hide}>Sign Up</h5></Link>
        </div>
      </div>
      <div className="mobile-menu-icon" id="#mobile-menu" onClick={show}>
        <span></span>
        <span></span>
        <span></span>
      </div>
      <div className="navbar__block">
        <div className="navbar__logo" onClick={hide}>
          <Link to="/"><img
            className="logo__image"
            src="https://www.quizando.com/assets/Quizando-Logo.png"
          /></Link>
        </div>
        <div className="navbar__right">
          <ul className="nav__menu">
             <Link to="/live"><li>
             <a href="#" className="nav__links">
                Live!
              </a>
            </li></Link>
            <Link to="/classics"><li>
             <a href="#" className="nav__links">
                Classics
              </a>
            </li></Link>
            <Link to="/notokens"><li>
              <a href="#" className="nav__links">
                Free Games
              </a>
            </li></Link>
           <Link to="/private-events"> <li>
              <a href="#" className="nav__links">
                Private Events
              </a>
            </li></Link>
            <li>
              <Link to='/hosts'><a href="#" className="nav__links">
                Our Partners
              </a></Link>
            </li>
          </ul>

          <div className="signup">
            <select className="dropdown">
              <option>EUR</option>
              <option>USD</option>
              <option>GBP</option>
            </select>
            <Link to="/profile"><AccountCircleIcon className="signup__icon" /></Link>
            <Link to="/login" style={{textDecoration:`none`,color:'white'}}><h6 onClick={hide}>Login</h6></Link>
            <Link to="/signup" style={{textDecoration:`none`,color:'white'}}><h6 onClick={hide}>Sign Up</h6></Link>
          </div>
        </div>
      </div>


      <div style={{display: flag ? 'flex' : 'none'}} className="vertical__navbar" id="vertical__navbar_block">
      <Link to="/login" style={{textDecoration:`none`,color:'white'}}><div className="vertical__login" onClick={hide}>
        <img src="https://www.quizando.com/assets/nav_login_mobile.png" />
          <h2>Login</h2>
        </div></Link>
        <Link to="/signup" style={{textDecoration:`none`,color:'white'}}>
        <div className="vertical__createaccount" onClick={hide}>
        <img src="https://www.quizando.com/assets/nav_reg_small.png" />
          <h2>Create Account</h2>
        </div></Link>
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
