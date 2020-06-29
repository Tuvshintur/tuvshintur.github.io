import React from "react";
import Info from "../../components/Info/Info";

import styles from "./Thought.module.css";

const thought = () => {
    return (
        <div className={styles.Thought}>
            <div className={styles.Left}>
                <Info />
            </div>
            <div className={styles.Right}></div>
        </div>
    );
};

export default thought;
