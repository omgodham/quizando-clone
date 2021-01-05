import React from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import questions from "./questions";
import Button from "react-bootstrap/Button";
import "./QuizPage.css"
import Leaderboard from "./Leaderboard";
import { useState } from "react";
export default function QuizPage({match}) {

    const [questionBank,setQuestionBank] = useState("");
    const [answerBank,setAnswerBank] = useState([]); 

    const [flag,setFlag]=useState(false);
    let count=0;
    let intervalID;

    function  startquiz() {
        setFlag(true);
        intervalID = setInterval(function () {
            if(count<questions.length){
            setQuestionBank(questions[count].question);
            setAnswerBank(questions[count].answers);
            }
            else{
                return;
            }
                count+=1;    
        },3000);
    }

    function checkAnswer(id,correct) {
        if(correct){
            console.log(id);
            console.log(correct)
        }
      else{
          console.log(id);
            console.log(correct)
        }
        }


    return (
        <>
        <Navbar />
        <div className="quizPage">
        <Button variant="primary" className="start__btn" onClick={startquiz} style={{display : flag ? 'none' :null}}>Start Quiz</Button>
             <div className="quiz__block" style={{display : !flag ? 'none' :null}}>
                <h3>{questionBank}</h3>
                <div className="answers">
                   {answerBank.map((answerObj,index) => {
                       return <div id={index} className="answer__id">
                       <span>{index}</span>
                       <p>{answerObj.answer}</p>
                              </div>
                   })}
                </div>   
        </div>
        <div className="footer__block" style={{display : !flag ? 'none' :null}}>
                    <div className="separate__footer__block">
                    <h2>12312</h2>
                    <p>Your Current Score</p>
                </div>
                <div className="separate__footer__block">
                    <h2>5/5</h2>
                    <p>Questions Remaining</p>
                </div>
                <div className="separate__footer__block">
                    <h2>10000</h2>
                    <p>Points</p>
                </div>
                <div className="separate__footer__block">
                    <h2>0</h2>
                    <p>Your Best Score</p>
                </div>
                <div className="separate__footer__block">
                    <h2>12123</h2>
                    <p>Leaderboard First Place</p>
                </div>
            </div>

       </div>
       <Leaderboard />
        <Footer />
        </>
    )
}
