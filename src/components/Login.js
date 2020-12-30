import "./Login.css";
import React from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
export default function Login() {
  return (
    <div className="login">
    <div className="login__top">
    <div className="login__header">
        <img alt="" src="https://www.quizando.com/assets/brain_crown.png"/>
        <h1>Login to Quizando</h1>
    </div>
    </div>
      <Form>
        <p style={{textAlign:'center'}}><span>Login to Quizando with your social media account or email address</span></p>
        <div className="login__socials">
            <button><i class="fi-snsuxl-facebook"></i>Login with Facebook</button>
            <button><i class="fi-snsuxl-google-logo"></i>Login with Google</button>
        </div>
        <p className="separator">OR</p>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="email" placeholder="Email*" />
        </Form.Group>
        <Form.Group controlId="formBasicPassword">
          <Form.Control type="password" placeholder="Password*" />
        </Form.Group>
        <p><span className="login__links">Forgot Password? </span>
        <span>New to Quizando? Click here to </span>
        <span className="login__links">Sign Up</span></p>
        <Button className="login__btn" type="submit">
          Login
        </Button>
      </Form>
    </div>
  );
}
