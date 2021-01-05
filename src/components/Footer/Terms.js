import React from "react";
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
import "./FAQs.css";
import "./Terms.css";
export default function Terms() {
  return (
    <>
      <Navbar />
      <div className="terms">
        <div className="faqs__header">
          <h1>Terms and Conditions</h1>
        </div>
        <div className="terms__content">
          <div className="terms__btns">
            <h3 id="terms__live">Standard T&C</h3>
            <h3>Sponsored T&C</h3>
          </div>
          <p>
            This Website is owned and operated by Web Matters Limited (C 67170)
            (“Us” “We”), a company registered in Malta. Our offices are situated
            at Ferris Building Level 1, 1, St Luke's Rd G'Mangia, Pieta PTA
            1020, Malta. Our details are the following:
          </p>
          <p className="address">
            Web Matters Limited Ferris Building Level 1, 1 St Luke's Rd G'Mangia
            Pieta PTA 1020 Malta Registration Number: C 67170 VAT Number: MT
            2201 8336 Tel: (+356) 2701 9089
            <span className="terms__email">Email: info@webmatters.com.mt</span>
          </p>
          <p>These terms and conditions apply to users of this Website Quizando. 
          By using this Website and the application software you indicate your acceptance of these
           terms.</p>
        </div>
      </div>
      <Footer />
    </>
  );
}
