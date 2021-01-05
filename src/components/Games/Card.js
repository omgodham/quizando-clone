import "./Card.css";
import React,{useState} from "react";
import {Link} from "react-router-dom";
export default function Card({id ,title, price, dateAndTime}) {

  var day=dateAndTime.split('T')[0];
  var myDate1 = new Date(day);
  var onlyDay=myDate1.toDateString();
  onlyDay=onlyDay.split('2021')[0];

  return (
    <Link to={`/classics/${id}`} style={{textDecoration:'none'}}> <div className="card">
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
          <p>Closes: {onlyDay} @4:30PM</p>
        </div>
      </div>
      </Link>
  );
}
