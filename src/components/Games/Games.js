import "./Games.css";
import Card from "./Card";
import React,{useEffect,useState} from "react";
import gameslist from "./gameslist";
import instance from "../../api/index";
import bg_image from "../../images/ludo.jpg";
export default function Games() {

const [quizess,setQuizess]=useState([]);
  useEffect(() => {
    fetchItem();
  },[]);

  const fetchItem = async () => {
    const request= await instance.get('/quiz/fetchQuiz?type=classic');
    console.log(request);
    setQuizess(request.data.payload.quizzes);
     console.log(quizess);

  }



    return (
    <div className="games">
      <div className="games__btns">
        <h3><img src="https://www.quizando.com/assets/svg/live_icon.svg" />Live!</h3>
        <h3><img src="https://www.quizando.com/assets/svg/notokens_icon.svg" />Free Games</h3>
        <h3><img src="https://www.quizando.com/assets/svg/classics_icon.svg" />Classics</h3>
      </div>
      <div className="games__cards">
        {quizess.map((item) => {
            return <Card id={item._id} title={item.title} price={25} dateAndTime={item.endDate}/>
        })}
      </div>
    </div>
  );
}
