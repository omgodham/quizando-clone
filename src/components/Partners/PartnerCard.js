import React from "react";
import "./Partners.css";
import host from "../../images/host.png";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Link } from "react-router-dom";

export default function PartnerCard({ followers, name }) {
  return (
    <>
      <div className="partner__card">
        <Link to={`/${name}`}>
          <img src={host} />
        </Link>
        <span>{followers} Followers</span>
        <div className="partner__footer">
          <h4>{name}</h4>
          <p>+ More Info</p>
        </div>
      </div>
    </>
  );
}
