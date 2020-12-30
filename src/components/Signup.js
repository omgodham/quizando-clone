import "./Login.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import countrylist from "./countrylist";
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
          <button>
            <i class="fi-snsuxl-facebook"></i>Login with Facebook
          </button>
          <button>
            <i class="fi-snsuxl-google-logo"></i>Login with Google
          </button>
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
