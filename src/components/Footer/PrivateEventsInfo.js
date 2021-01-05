import React from 'react';
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import "./PrivateEventsInfo.css";
export default function PrivateEventsInfo() {
    return (
        <>
        <Navbar />
        <div className="privateeventsinfo">
            <img className="private__info__img" src="https://www.quizando.com/assets/banners/private-quiz-banner.png" />
    
        <div className="privateeventsinfo__content">
        <div className="private__info__left">
        <p>Looking for a new, interesting and innovative way to interact with your friends, colleagues or employees? Then why not try one of Quizando’s super fun Private Quizzes!</p>
        <p>These highly cost-effective events are perfect for team building, staff parties, conferences, fundraisers and a wide variety of other corporate or personal events.</p>
        <p>A private quiz is live-hosted and can be presented either by yourselves or one of our own expert hosts. Or maybe you might want to get yourself a celebrity host to really spice things up.</p>
        <p>Each quiz contains multiple question rounds (up to 5) with a new and exciting topic for each round. You can choose from text, image or audio questions for your quiz, which tracks round and overall winners. So you can give out prizes if you want.</p>
        <p>You can set your quiz up with everyone playing as individuals or, if you want to add some more intense competition, you can split the players into different teams. Let the rivalry commence!</p>
        <p>To book your Private Quiz event send us an email today on <span style={{color:'red',cursor:'pointer'}}>events@quizando.com</span> and one of our team will get right back to you!</p>
        </div>
        <div className="private__info__right">
        <p>Meanwhile you can download our Private Quiz brochure.</p>
        <img className="broucher__img" src="https://www.quizando.com/assets/private_quiz_preview.jpg" />
       <br/> <button className="broucher__download__btn">Download Broucher</button>
        </div>
        </div>
        </div>
        <Footer />
        </>
    )
}
