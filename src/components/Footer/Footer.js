import React from 'react';
import "./Footer.css";
import TwitterIcon from '@material-ui/icons/Twitter';
import InstagramIcon from '@material-ui/icons/Instagram';
import FacebookIcon from '@material-ui/icons/Facebook';
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
                <span>How to play?</span>
                <span>FAQs</span>
                <span>Terms & conditions</span>
                <span>Cookies</span>
                <span>Privacy Policy</span>
            </div>
            <div class="footer-descr">
                <span>Login</span>
                <span>Sign up to Quizando</span>
                <span>Buy Tokens</span>
                <span>Contact Us</span>
            </div>
            <div class="footer-descr">
                <span>Quizando Partners</span>
                <span>Become a Partner</span>
                <span>Private Events Info</span>
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
