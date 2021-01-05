import React from 'react'
import Footer from "./Footer";
import Navbar from "../Navbar/Navbar";

export default function Privacy() {
    return (
        <>
        <Navbar />
        <div className="privacy">
        <div className="faqs__header">
          <h1>Quizando Master Privacy Policy</h1>
        </div>
        <div className="terms__content">
            <p>This Master Privacy Policy (hereafter referred to as “this Policy”) outlines the manner in which Web Matters Limited handles the information and personal data which You have provided to Us and which enables Us to be able to effectively manage the relationship which You have with Us.</p>
                <p>This Policy applies to Our websites, applications, products and/or services that link to this policy or do not have a separate privacy policy (hereinafter referred to as “Our Services”). This Policy is intended to give You a better understanding of the data We collect, the reason why We collect such data, the manner in which We process this data, the entities with whom We share the said personal data, Your rights in relation to the collection, processing and sharing of such data and any other pertinent matter relating to privacy and security.</p>
        <p>Any personal data You will provide or which We already hold will be processed in line with and in the manner set out in this Privacy Policy. Any and all information will be provided through any of the Quizando websites (“The Website”), the designated telephone numbers or any other means which Quizando may make available from time to time.</p>
        <p>By reading this Policy You understand and acknowledge that Your personal data may be processed in the manner set out in this Policy. If You do not agree with the terms of this Privacy Policy please do not use the Website or otherwise provide Us with Your Personal Data.</p>
        </div>
        </div>
        <Footer />
        </>
    )
}
