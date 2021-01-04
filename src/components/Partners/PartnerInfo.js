import React, { useEffect, useState } from 'react';
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import facebook from "../../images/facebook.png"
import host from "../../images/host.png";
import "./PartnerInfo.css"
export default function PartnerInfo({ match }) {
    console.log(match);
    const [partnerData,setPartnerData]=useState({});

    useEffect(() => {
        setPartnerData(match.params);
    },[])
    return (
        <>
        <Navbar />
        <div className="partner__info">
            <div className="info__left__block">
            <img src={host}/>
            </div>
            <div className="info__right__block">
            <h1>{partnerData.name}</h1>
            <p>165 Followers</p>
            <button>Share</button>
            <h3>Social Media Links</h3>
            <img src={facebook} />
        </div>
        </div>
        <Footer />
        </>
    )
}
