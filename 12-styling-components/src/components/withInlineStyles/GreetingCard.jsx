import React from "react";

//Import styles
import * as styles from "./GreetingCardStyles";

const GreetingCard = ({ name, email, phone }) => {
  const isTrue = phone.length < 10;

  return (
    <div style={styles.container}>
      <h3>Made Using Inline CSS</h3>
      <div style={styles.inner}>
        <div style={styles.itemName}>Name: {name}</div>
        <div style={styles.item}>Email: {email}</div>
        <div
          style={
            isTrue ? { ...styles.item, ...styles.warn } : { ...styles.item }
          }
        >
          Phone: {phone}
        </div>
      </div>
    </div>
  );
};

export default GreetingCard;

/*
PROS/CONS:
 - syntax camelCase
 + we can create variables and share them
*/
