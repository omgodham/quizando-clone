import "./Login.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import countrylist from "./countrylist";
import search from "../../images/search.png";
import facebook from "../../images/facebook.png";
export default function Login() {
  return (
    <div className="login">
      <div className="login__top">
        <div className="login__header">
          <img alt="" src="https://www.quizando.com/assets/brain_crown.png" />
          <h1>Signup to Quizando</h1>
        </div>
      </div>
      <Form>
        <p style={{ textAlign: "center" }}>
          <span>
            Signup to Quizando with your social media account or email address
          </span>
        </p>
        <div className="login__socials">
        <button><img alt="" src={facebook}/>Sign Up with Facebook</button>
            <button><img alt="" src={search}/>Sign Up with Google</button>
        </div>
        <p className="separator">OR</p>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email*" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password*" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Last Name*" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="text" placeholder="Display Name*" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="date" placeholder="Date of Birth*" />
        </Form.Group>
        <Form.Control as="select">
         {countrylist.map( country => {return <option>{country}</option> })}
        </Form.Control>
        <Form.Group controlId="formBasicPassword" style={{marginTop:'15px'}}>
          <Form.Control type="password" placeholder="Password*" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Confirm Password*" />
        </Form.Group>
        <Button className="login__btn" type="submit">
          Sign Up
        </Button>
      </Form>
    </div>
  );
}
