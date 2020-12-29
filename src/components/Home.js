import "./Home.css";
import React from "react";
export default function Home() {


  return (
    <div className="home">

      <div className="home__block">
        <div className="home__content">
          <div className="home__left">
            <img className="home__left__image" src="https://www.quizando.com/assets/banners/classics_fg.png" />
          </div>
          <div className="home__right">
            <h1>
              Play our classic quizzes, anywhere, anytime & fight your way to
              the top of the leaderboard
            </h1>
            <p>It’s real cash for the winners!</p>
            <button className="home__top__btn">Click here</button>
          </div>
        </div>
      </div>
      <div className="home__bottom">
            <h1>Total money won on Quizando</h1>
                <div className="money__won">
                    <img className="money__img" src="https://www.quizando.com/assets/money_won.png" />
                    <h2>€149,788.94</h2>
                </div>
        </div>

    </div>
  );
}
