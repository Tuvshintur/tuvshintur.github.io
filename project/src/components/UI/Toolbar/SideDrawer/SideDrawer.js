import React from "react";
import Navigation from "../Navigation/Navigation";
import BackDrop from "../../BackDrop/BackDrop";

import styles from "./SideDrawer.module.css";

const sideDrawer = ({ open, close }) => {
  let classes = [styles.SideDrawer, styles.Close];
  if (open) classes = [styles.SideDrawer, styles.Open];

  return (
    <React.Fragment>
      <BackDrop show={open} clicked={close} />
      <div className={classes.join(" ")} onClick={close}>
        {/* <div className={styles.Logo}></div> */}
        <nav>{<Navigation />}</nav>
      </div>
    </React.Fragment>
  );
};

export default sideDrawer;
