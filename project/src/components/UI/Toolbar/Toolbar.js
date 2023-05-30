import React from "react";

import Navigation from "./Navigation/Navigation";
import SideDrawerToggle from "./SideDrawer/SideDrawerToggle/SideDrawerToggle";

import styles from "./Toolbar.module.css";

const toolbar = ({ sideDrawerClicked }) => {
  return (
    <header className={styles.Toolbar}>
      <SideDrawerToggle clicked={sideDrawerClicked} />
      <div className={styles.Logo}></div>
      <nav className={styles.DesktopOnly}>
        <Navigation />
      </nav>
    </header>
  );
};

export default toolbar;
