import React from "react";

import Info from "../../components/Info/Info";
import WhoAmI from "../../views/WhoAmI";
import DevStack from "../../views/DevStack";
import CurrentProjects from "../../views/CurrentProjects";
import Experience from "../../views/Experience";
import Technology from "../../views/Technology";
import Wrapper from "../../components/Wrapper/Wrapper";

import styles from "./About.module.css";

const about = () => {
    return (
        <div className={styles.About}>
            <div className={styles.Left}>
                <Info />
            </div>
            <div className={styles.Right}>
                <Wrapper>
                    <WhoAmI />
                    <DevStack />
                    <CurrentProjects />
                    <Experience />
                    <Technology />
                </Wrapper>
            </div>
        </div>
    );
};

export default about;
