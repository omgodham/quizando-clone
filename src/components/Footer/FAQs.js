import React from 'react';
import faqslist from "./faqslist";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import "./FAQs.css"
export default function FAQs() {
    return ( 
    <>
    <Navbar />
        <div className="faqs">
            <div className="faqs__header">
            <h1>FAQs</h1>
            </div>
            
            {faqslist.map(item =>{
                return <div className="faqs__content">
                <h3>{item.title}</h3>
                {item.questions.map(que => {
                    return  <div className="faqs__qna"><h5>{que.question}</h5>
                    <p>{que.answer}</p>
                    </div>
                })} 
                </div>
            })}
            </div>
            <Footer />
            </>
    )
}
