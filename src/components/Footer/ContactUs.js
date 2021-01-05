import React from "react";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import "./ContactUs.css";

export default function ContactUs() {
  return (
    <>
      <Navbar />
      <div className="contactus">
        <h2>Player support:</h2>
        <p>
          Our Customer Service Team is ready to deal with any of your inquiries,
          comments or problems. They will be at their desks from 9am to 5pm
          (Central European Time), Monday to Friday. To chat live during these
          times click the link below. Outside these times your message will be
          sent as an email.
        </p>
        <button>Customer Support</button>
        <h2>Partner support:</h2>
        <p>
          For help with anything to do with your account, hosting issues, quiz
          queries or general inquiries please send an email to
          partners@quizando.com
        </p>
        <h2>Corporate support:</h2>
        <p>
          Looking to run a sponsored quiz? Want to know more about Quizando? If
          you need to get in touch for any serious, grown-up stuff, here are our
          details:
        </p>
        <div className="contactus__address">
          <h5>Address:</h5>
          <p>
            Quizando, Web Matters Limited, Ferris Building Level 1, 1 St Luke's
            Rd G'Mangia Pieta PTA 1020, Malta
          </p>
          <h5>Tel:</h5>
          <p>
          +356 2701 9089/ +356 2713 1869
          </p>
          <h5>Email:</h5>
          <p>
          info@quizando.com
          </p>
        </div>
      </div>
      <Footer />
    </>
  );
}
