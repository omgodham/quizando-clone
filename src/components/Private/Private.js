import React from 'react';
import "../Live/Live.css";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
export default function Private() {
    return (
        <>
        <Navbar />
        <div className="private">
             <div className="live__header">
            <h1>Quizando<font>Private Events</font></h1>
            <p>Action packed, multi-round, live quizzes... but you'll need an invite to play!</p>
        </div>
        </div>
      <Footer />
        </>
    );
}
