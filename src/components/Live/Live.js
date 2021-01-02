import "./Live.css";
import gameslist from "../Games/gameslist";
import React from 'react'
import Card from "../Games/Card";
export default function Live() {

    return (
        <div className="live">
        <div className="live__header">
            <h1>Quizando<font>Live</font></h1>
            <p>Super knock out style quizzes hosted by all your favourite people!</p>
        </div>
            <div className="live__cards">
            {gameslist.slice(0,5).map( (item) => {
                    return <Card title={item.title} price={item.price} />
            })
            }
            </div>
        </div>
    )
}
