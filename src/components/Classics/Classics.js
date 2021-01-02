import "../Live/Live.css";
import gameslist from "../Games/gameslist";
import React from 'react';
import Card from "../Games/Card";
export default function Classics() {

    return (
        <div className="live">
        <div className="live__header">
            <h1>Quizando<font>Classic</font></h1>
            <p>Battle it out to top the leaderboard and win a share of the cash prize!</p>
        </div>
            <div className="live__cards">
            {gameslist.slice(0,20).map( (item) => {
                    return <Card title={item.title} price={item.price} />
            })
            }
            </div>
        </div>
    )
}
