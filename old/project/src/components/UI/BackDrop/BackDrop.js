import React from "react";

import styles from "./BackDrop.module.css";

const backDrop = ({ show, clicked }) => {
    return show ? <div className={styles.BackDrop} onClick={clicked}></div> : null;
};

export default backDrop;
