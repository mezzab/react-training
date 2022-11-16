import React from "react";

//Import css
import "./VisitingCardStyles.css";

const VisitingCard = ({ name, email, phone }) => {
  const isTrue = phone.length < 10;

  return (
    <div className="container-inner">
      <h3>Made Using Global CSS</h3>
      <div className="inner">
        <div className="item name">Name: {name}</div>
        <div className="item">Email: {email}</div>
        <div className={isTrue ? "item warn" : "item"}>Phone: {phone}</div>
      </div>
    </div>
  );
};

export default VisitingCard;


/*
PROS/CONS:
 - gigantic global .css files
 - dificult to mantain
*/
