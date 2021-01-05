import React from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Profile.css";
import Button from "react-bootstrap/Button";
export default function Profile() {
    return (
        <>
        <Navbar/>
        <div className="profile">
            <div className="profile__header">
            <h2>Player Account - newuser</h2>
            </div>  
            <div className="profile__content">
            <div className="profile__left__content">
            <ul className="profile__menu__list">
                <li className="player__account">Player Account</li>
                <li>Account Dashboard</li>
                <li>My Account Statement</li>
                <li>My Quizzes</li>
                <li>My Withdrawals</li>
                <li>My Referral Link</li>
                <li>My Notifications</li>
                <li>Following</li>
                <li>ID Validation</li>
                <li>Withdrawal</li>
                <li>Change Password</li>
                <li>Become a Partner</li>
            </ul>
            </div>
            <div className="profile__right__content">
                <h5>Player Account Dashboard</h5>
                <div className="buy__tokens">
                    <div className="token__balance">
                    <span>0</span>
                    <p>Token Balance</p>
                    </div>
                    <div className="winnings__balance">
                    <span>€0</span>
                    <p>Winnings Balance</p>
                    </div>
                    <Button className="profile__btn">+Buy Tokens</Button>
                </div>
                <div className="account__details__header">
                        <h5>My Account Details</h5>
                    </div>
                <div className="myaccount__details">  
                    <div className="details__block">
                        <div className="details__block__left">
                        <div className="actual__details">
                            <span>User Id:</span>
                            <span className="details__value">566656</span>
                        </div>
                        <div className="actual__details">
                            <span>First Name:</span>
                            <span className="details__value">New</span>
                        </div>
                        <div className="actual__details">
                            <span>Last Name:</span>
                            <span className="details__value">User</span>
                        </div>
                        <div className="actual__details">
                            <span>Display Name:</span>
                            <span className="details__value">newuser</span>
                        </div>
                        <div className="actual__details">
                            <span>Gender:</span>
                            <span className="details__value">Male</span>
                        </div>
                        <div className="actual__details">
                            <span>Email:</span>
                            <span className="details__value">newuser@gmail.com</span>
                        </div>
                        <div className="actual__details">
                            <span>Country:</span>
                            <span className="details__value">India</span>
                        </div><div className="actual__details">
                            <span>Date of Birth:</span>
                            <span className="details__value">31-Aug-2000</span>
                        </div>
                        </div>
                    </div>
                    <div className="upload__image">
                    <img src="https://www.quizando.com/assets/defaultusericon.png" />
                    <h3>New User</h3>
                </div>
                </div>   
                <div className="right__content__btns">
                <Button className="bottom__btn">Close Account</Button>
                <Button className="bottom__btn">Edit Account Details</Button>
                <Button className="bottom__btn">Change Password</Button>
                </div>            
            </div>
            </div>
        </div>
        <Footer />
        </>
    )
}
