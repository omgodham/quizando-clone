import "./Card.css";
import React from "react";

export default function Card({ title, price }) {
  return (
      <div className="card">
        <div className="card__fix__block">
          <img
            className="card__logo"
            src="https://www.quizando.com/assets/quizando_host_icon.png"
          />
          <div className="card__logo__name">
            <span>Quizando</span>
          </div>
        </div>
        <h1>{title}</h1>
        <div className="card__bottom">
          <h4>Prize Pool €{price}</h4>
          <button className="card__bottom__btn">Play Now!</button>
          <p>Closes: Today @4:30PM</p>
        </div>
      </div>
  );
}
