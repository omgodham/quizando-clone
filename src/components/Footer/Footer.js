import React from 'react';
import "./Footer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
import {Link} from "react-router-dom";
export default function Footer() {
    return (
        <div class="footer">
        <div class="footer-content">
            <div class="footer-descr">
                <span className="footer__title">Quizando</span>
                <span>Quizando Level!</span>
                <span>Quizando Classics</span>
                <span>Free Games</span>
                <span>Private Events</span>
                <span>Closed Quizzes</span>
            </div>
            <div class="footer-descr">
               <Link to="/how-to-play" style={{textDecoration:'none',color:"black"}}> <span>How to play?</span></Link>
               <Link to="/faqs" style={{textDecoration:'none',color:"black"}}><span>FAQs</span></Link>
               <Link to="/terms-and-conditions" style={{textDecoration:'none',color:"black"}}><span>Terms & conditions</span></Link>
               <Link to="/cookies" style={{textDecoration:'none',color:"black"}}><span>Cookies</span></Link>
               <Link to="/privacy-policy" style={{textDecoration:'none',color:"black"}}><span>Privacy Policy</span></Link>
            </div>
            <div class="footer-descr">
            <Link to="/login" style={{textDecoration:'none',color:"black"}}><span>Login</span></Link>
            <Link to="/signup" style={{textDecoration:'none',color:"black"}}><span>Sign up to Quizando</span></Link>
                <span>Buy Tokens</span>
                <Link to="/contact-us" style={{textDecoration:'none',color:"black"}}>  <span>Contact Us</span></Link>
            </div>
            <div class="footer-descr">
            <Link to="/hosts" style={{textDecoration:'none',color:"black"}}><span>Quizando Partners</span></Link>
                <span>Become a Partner</span>
                <Link to="/private-events-info" style={{textDecoration:'none',color:"black"}}>  <span>Private Events Info</span></Link>
            </div>
            <div className="footer__payments">
                <h2 className="footer__title">Connect with us:</h2>
                <div className="socials">
                <TwitterIcon   className="footer__social"/>
                <FacebookIcon  className="footer__social"/>
                <InstagramIcon className="footer__social"/>
                </div>
                <h2 className="customer__support">Customer Support</h2>
                <div className="payment__options">
                    <img src="https://www.quizando.com/assets/visa.png" />
                    <img src="https://www.quizando.com/assets/mastercard.png" />
                    <img src="https://www.quizando.com/assets/PayPal.png" />
                </div>
            </div>
        </div>
        <div className="copywrite">
        <span>
        Quizando is a company operating in Malta with the registration number 
        C-67170 and its registered office at Quizando, Web Matters Limited,
         Ferris Building Level 1, 1, St Luke's Rd G'Mangia, Pieta PTA 1020, Malta.
        </span>
        </div>
        <div className="footer__bottom">
                <div className="footer__bottom__content">
                   <div className="left__section">
                    <img src="https://www.quizando.com/assets/Quizando-Logo.png" />
                    <span>Copyright © 2020</span>
                    </div>
                    <img className="webmatters" src="https://www.quizando.com/assets/webmatters.png" />
                </div>
        </div>
    </div>
    )
}
