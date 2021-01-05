import React from 'react';
import "./Leaderboard.css";
import 'flag-icon-css/css/flag-icon.css';
import leaderboardlist from "./leaderboardlist";
export default function Leaderboard() {
    return (
        <div className="leaderboard">
            <div className="leaderboard__title">
            <img src="https://www.quizando.com/assets/leaderboard_icon.png" />
            <h2>Current Leaderboard</h2>
            </div>
            <div className="current__leaderboard">
            <ul className="coloum__names">
            <li>Position</li>
            <li style={{marginRight:'auto'}}>Player Name</li>
            <li>Country</li>
            <li>Plays</li>
            <li>Points</li>
            </ul>
           
            {leaderboardlist.map((item,index) => {
                return <ul className="leaderboard__names">
            <li>{index}</li>
            <li style={{marginRight:'auto'}}><img src="https://www.quizando.com/assets/defaultusericon.png" style={{height:'30px',width:'30px',marginRight:'5px'}}/>{item.name}</li>
            <li><span class='flag-icon flag-icon-gr'></span></li>
            <li>{item.plays}</li>
            <li>{item.points}</li>
            </ul>
            })}
          
            </div>
        </div>
    )
}
