import React, { useState ,useEffect} from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import bg__image from "../../images/ludo.jpg";
import {Link } from "react-router-dom";
import "./GameInfo.css";
import Leaderboard from "./Leaderboard";
export default function GameInfo({match}) {
    console.log(match);
    const [gameData,setGameData] = useState(0);
    useEffect(() => {
        setGameData(match.params.id);
    }, [])
   
    return (
        <>
        <Navbar />
        <div className="game__info" style={{backgroundImage:`url(${bg__image})`}}>  
            <div className="current__prize">
                <h5>Current Prize</h5>
                <h1>€25.00!</h1>
            </div>
            <h2>Brought to you by...</h2>
            <div className="quizando__logo">
          <img
            className="quizando__logo__img"
            src="https://www.quizando.com/assets/quizando_host_icon.png"
          />
          <div className="quizando__text">
            <span>Quizando</span>
          </div>
        </div>

            <Link to={`/classics/play/${gameData}`} style={{textDecoration:'none'}}>
             <div id="play__quiz">
            <h1>Play Quiz</h1>
            </div></Link>
        </div>
        <div className="final__entry">
        <h2 className="final__entry__title">Final Entry:<span style={{color:'red'}}>60m 00s</span></h2>
        <div className="description__btns">
        <h4>Entry Fee:0 tokens</h4>
        <h4>Prize Pool:€25.00</h4>
        <h4>Questions:10</h4>
        <h4>Global Plays:225</h4>
        <h4>Max Plays per Player:7</h4>
        <h4>Free Plays: 7</h4>
        </div>
        <h3 className="game__text">A 10 question quiz on the films of The Hobbit. Top 10 players split the prize pool.</h3>
        <div className="final__entry__btns">
        <button>View Prize Split</button>
        <button>Share quiz</button>
        <button>Play Quiz!</button>
        </div>
        </div>
        <Leaderboard />
        <Footer />
        </>
    )
}
