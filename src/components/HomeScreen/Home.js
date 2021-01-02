import "./Home.css";
import React from "react";
import Carousel from "react-bootstrap/Carousel";
import homedata from "./homedata";
export default function Home() {


  return (
    <div className="home">

    <Carousel>
    {homedata.map( item => {
      return <Carousel.Item className={item.className} 
      style={{backgroundImage:`url(${item.bg_image})`,backgroundSize:'cover'}}>
        <div className="home__content">
          <div className="home__left">
            <img className="home__left__image" src={item.fg_image} />
          </div>
          <div className="home__right">
            <h1>
              {item.header}
            </h1>
            <p>{item.description}</p>
            <button className="home__top__btn">Click here</button>
          </div>
      </div>
    </Carousel.Item>;
    })}
    </Carousel>
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
