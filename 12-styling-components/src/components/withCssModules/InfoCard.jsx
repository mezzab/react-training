import React from "react";

//Import css
import styles from "./InfoCardStyles.module.css";

const InfoCard = ({ name, email, phone }) => {
  const isTrue = phone.length < 10;

  return (
    <div className={styles.container}>
      <h3>Made Using CSS Modules</h3>
      <div className={styles.inner}>
        <div className={`${styles.item} ${styles.name}`}>Name: {name}</div>
        <div className={styles.item}>Email: {email}</div>
        <div
          className={
            isTrue ? `${styles.item} ${styles.warn}` : `${styles.item}`
          }
        >
          Phone: {phone}
        </div>
        <div className={styles.marcos}>hey </div>
      </div>
    </div>
  );
};

export default InfoCard;

/*
PROS/CONS:
 + locally scoped
 + unique classnames
*/



