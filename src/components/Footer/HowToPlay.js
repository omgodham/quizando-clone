import React from "react";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import "./HowToPlay.css";

export default function HowToPlay() {
    return (
        <>
        <Navbar />
        <div className="howtoplay">
            <div className="howtoplay__header">
            <h2>How to play?</h2>
            </div>
            <div className="howtoplay__content">
            <div className="howtoplay__btns">
            <h3 id="howtoplay__live">Quizando Live!</h3>
            <h3>Quizando Classics!</h3>
            <h3>Quizando Survivor!</h3>
            <h3>Quizando Sponsored!</h3>
            </div>
            <h4>Intelligence Pays</h4>
            <p>This new and hugely exciting quiz game see you and all the other players
             battling to be the last person alive in a huge knock-out quiz.
              So it’s a Survivor game, right? Well, pretty much. Apart from the fact that our live quizzes
               are, as the name suggests, hosted live by presenters from all over the world. So not only do you get the chance to win
                big money but you also have the chance to get up close and personal with the host. And you can even send them your
                 thoughts and feedback via the chat facility. It’s like having a live game show on your phone, table or desktop. Just
                  like our Survivor games, you can choose which live quizzes you want to join well in advance. You will then be sent a 
                  reminder before it starts so make sure you are on the game page in plenty of time. The live games have real cash prizes so you will
                   need to have enough tokens in your account to join. Once the game starts everyone gets the same question at the same time (including the host,
                    so there’s no chance of any cheating there). Answer correctly and you push on through to the next round,
                     get it wrong and you are out. Simple as that. And oh, you also have 3 lives to use just in case you don’t know an answer – 
                     but use them wisely if you want to win.</p>
                     <span>Put your money where your mind is!</span>
            </div>
        </div>
        <Footer />
        </>
    )
}
