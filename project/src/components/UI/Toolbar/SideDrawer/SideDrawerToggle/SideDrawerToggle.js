import React from "react";
import styles from "./SideDrawerToggle.module.css";

const sideDrawerToggle = ({ clicked }) => {
  return (
    <div className={styles.SideDrawerToggle} onClick={clicked}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  );
};

export default sideDrawerToggle;
