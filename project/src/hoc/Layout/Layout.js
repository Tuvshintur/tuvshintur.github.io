import React, { Component } from "react";

import Toolbar from "../../components/UI/Toolbar/Toolbar";
import SideDrawer from "../../components/UI/Toolbar/SideDrawer/SideDrawer";
import Info from "../../components/Info/Info";

import styles from "./Layout.module.css";

class Layout extends Component {
    state = {
        sideDrawerOpen: false,
    };

    sideDrawerCloseHandler = () => {
        this.setState({ sideDrawerOpen: false });
    };

    sideDrawerToggleHandler = () => {
        this.setState((prevState) => {
            return { sideDrawerOpen: !prevState.sideDrawerOpen };
        });
    };

    render() {
        return (
            <React.Fragment>
                <SideDrawer open={this.state.sideDrawerOpen} close={this.sideDrawerCloseHandler} />
                <Toolbar sideDrawerClicked={this.sideDrawerToggleHandler} />
                <main className={styles.Layout}>
                    <div className={styles.Left}>
                        <Info />
                    </div>
                    <div className={styles.Right}>{this.props.children}</div>
                </main>
            </React.Fragment>
        );
    }
}

export default Layout;
