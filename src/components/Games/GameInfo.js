import React, { useState ,useEffect} from 'react'
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import bg__image from "../../images/ludo.jpg";
import {Link } from "react-router-dom";
import "./GameInfo.css";
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
        <Footer />
        </>
    )
}
