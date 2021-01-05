import "../Live/Live.css";
import gameslist from "../Games/gameslist";
import React from 'react';
import Card from "../Games/Card";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function Classics() {

    return (
        <>
        <Navbar />
        <div className="live">
        <div className="live__header">
            <h1>Quizando<font>Classic</font></h1>
            <p>Battle it out to top the leaderboard and win a share of the cash prize!</p>
        </div>
            <div className="live__cards">
            {gameslist.slice(0,20).map( (item,index) => {
                    return <Card id={index} title={item.title} price={item.price} dateAndTime='12/23/2000T12:23:4'/>
            })
            }
            </div>
        </div>
        <Footer />
        </>
    )
}
