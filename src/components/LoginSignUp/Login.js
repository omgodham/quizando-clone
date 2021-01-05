import "./Login.css";
import React,{useState,useEffect} from "react";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import search from "../../images/search.png";
import facebook from "../../images/facebook.png";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import instance from "../../api/index";
export default function Login() {

  
  const [number,setNumber]=useState();
  const [otp,setOtp]=useState();
  const [flag,setflag]=useState(false);

  function checkOtp(e){
          setOtp(e.target.value);
        }

  function sendOtp() {
    setflag(true);
    instance.post("/user/login",{
      phone:"9922653369"
    }).then(res => {
      console.log(res);
    })
    .catch(err => {
      console.log(err);
    })
  }

  return (
    <>
  <Navbar />
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
            <button className="faccebook__btn"><img alt="" src={facebook}/>Login with Facebook</button>
            <button className="search__btn"><img alt="" src={search}/>Login with Google</button>
        </div>
        <p className="separator">OR</p>
        <Form.Group controlId="formBasicEmail">
          <Form.Control type="text" placeholder="Enter Mobile Number"
           value={number}
           onChange={ (e) => setNumber(e.target.value)}/>
        </Form.Group>
        <Form.Group style={{display:!flag ? 'none' : "block" }}>
          <Form.Control type="text" placeholder="Enter OTP" 
          value={otp} 
          onChange={checkOtp}/>
        </Form.Group>
        <Button className="otp__btn" type="button" onClick={sendOtp}>
          Send OTP
        </Button>
        <p><span className="login__links">Forgot Password? </span>
        <span>New to Quizando? Click here to </span>
        <span className="login__links">Sign Up</span></p>
        <Button className="login__btn" type="submit">
          Login
        </Button>
      </Form>
    </div>
    <Footer />
    </>
  );
}
