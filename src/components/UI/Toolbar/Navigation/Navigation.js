import React from "react";

import NavigationItem from "./NavigationItem/NavigationItem";

import styles from "./Navigation.module.css";

const Navigation = () => {
    return (
        <ul className={styles.Navigation}>
            <NavigationItem exact link="/">
                About
            </NavigationItem>
            <NavigationItem link="/thought">Thoughts</NavigationItem>
        </ul>
    );
};

export default Navigation;