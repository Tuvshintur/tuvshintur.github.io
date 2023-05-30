import React from "react";

import WhoAmI from "../../views/WhoAmI";
import DevStack from "../../views/DevStack";
import CurrentProjects from "../../views/CurrentProjects";
import Experience from "../../views/Experience";
import Technology from "../../views/Technology";
import Wrapper from "../../hoc/Wrapper/Wrapper";

import styles from "./About.module.css";

const about = () => {
  return (
    <div className={styles.About}>
      <Wrapper>
        <WhoAmI />
        <DevStack />
        <CurrentProjects />
        <Experience />
        <Technology />
      </Wrapper>
    </div>
  );
};

export default about;
