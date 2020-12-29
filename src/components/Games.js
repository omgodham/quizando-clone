import "./Games.css";
import Card from "./Card";
import React from "react";
import gameslist from "./gameslist";
export default function Games() {

    return (
    <div className="games">
      <div className="games__btns">
        <h3>Live!</h3>
        <h3>Free Games</h3>
        <h3>Classics</h3>
      </div>
      <div className="games__cards">
        {gameslist.map(item => {
            return <Card title={item.title} price={item.price}/>
        })}
      </div>
    </div>
  );
}
