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
  // console.log(quizess[0].endDate);
//   var myDate = new Date(request.data.payload.quizess[0].endDate);
//   var dateAndTime = quizess[0].endDate;
// var day=dateAndTime.split('T')[0];
// var myDate1 = new Date(day);
// var onlyDate=myDate1.toDateString();
// console.log(onlyDate.split('2021')[0]);
// // console.log(myDate2.getHours());

  }



    return (
    <div className="games">
      <div className="games__btns">
        <h3>Live!</h3>
        <h3>Free Games</h3>
        <h3>Classics</h3>
      </div>
      <div className="games__cards">
        {quizess.map((item) => {
            return <Card id={item._id} title={item.title} price={25} dateAndTime={item.endDate}/>
        })}
      </div>
    </div>
  );
}
