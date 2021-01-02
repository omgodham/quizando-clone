import React from "react";
import "../Live/Live.css";
import "./Partners.css";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";  
import PartnerCard from "./PartnerCard";
export default function Partners() {
  return (
    <div className="partners">
      <div className="live__header">
        <h1>
          Meet our<font> Partners</font>
        </h1>
      </div>
      <Form className="form">
        <Button variant="primary">Most Followed</Button>
        <Button variant="light">Newly Joined</Button>
        {/* <Form.Group controlId="formBasicEmail"> */}
          <Form.Control type="text" placeholder="Search Partner" style={{width:'40%',marginRight:'20px'}}/>
        {/* </Form.Group> */}
        <Button variant="primary">Become a Partner</Button>
      </Form>
       <div className="partners__block">
        <PartnerCard followers='123' name='DaleCollinsFunQuiz'/>
        <PartnerCard followers='123' name='DaleCollinsFunQuiz'/>
        <PartnerCard followers='123' name='Drake'/>
        <PartnerCard followers='123' name='Quiza'/>
        <PartnerCard followers='123' name='Rat'/>
        </div>
    </div>
  );
}
