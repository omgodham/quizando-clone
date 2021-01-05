import "../Live/Live.css";
import gameslist from "../Games/gameslist";
import React from 'react'
import Card from "../Games/Card";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";

export default function FreeToPlay() {

    return (
        <>
        <Navbar />
        <div className="live">
        <div className="live__header">
            <h1><img src="https://www.quizando.com/assets/logo_notokens.png" style={{height:'40px',width:'40px'}}/>Free<font>Games</font></h1>
            <p>Your place for all our free games - live, classic and sponsored!</p>
        </div>
            <div className="live__cards">
            {gameslist.slice(0,15).map( (item,index) => {
                    return <Card id={index} title={item.title} price={item.price} dateAndTime='12/23/2001T12:23:4'/>
            })
            }
            </div>
        </div>
        <Footer />
        </>
    );
}
