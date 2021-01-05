import React from 'react';
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";
export default function Cookies() {
    return (
        <>
        <Navbar />
        <div className="cookies">
            <div className="faqs__header">
          <h1>Cookies</h1>
        </div>
        <div className="terms__content">
            <p>Cookies are data stored on Your computer that remember the websites You visit and make Your browsing easier. We use cookies on this website to make sure it works properly, improve Your user experience, and to ensure services promoted are relevant to Your needs.
             Our cookies don't store personal information like Your name, address or payment details.</p>
                <p>You can, at any point, disable cookies for this website by changing Your browser settings. Please note that many of Our site’s functions might not work properly should You disable cookies</p>
        <p style={{backgroundColor:'yellow'}}>For more information about cookies and how they work, please visit:<span style={{color:'blue',cursor:'pointer'}}> www.allaboutcookies.org</span> .</p>
        </div>
        </div>
        <Footer />
        </>
    )
}
