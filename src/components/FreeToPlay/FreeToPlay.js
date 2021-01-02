import "../Live/Live.css";
import gameslist from "../Games/gameslist";
import React from 'react'
import Card from "../Games/Card";
export default function FreeToPlay() {

    return (
        <div className="live">
        <div className="live__header">
            <h1><img src="https://www.quizando.com/assets/logo_notokens.png"/>Free<font>Games</font></h1>
            <p>Your place for all our free games - live, classic and sponsored!</p>
        </div>
            <div className="live__cards">
            {gameslist.slice(0,15).map( (item) => {
                    return <Card title={item.title} price={item.price} />
            })
            }
            </div>
        </div>
    )
}
