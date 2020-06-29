import React, { Component } from "react";

import Toolbar from "../../components/UI/Toolbar/Toolbar";
import SideDrawer from "../../components/UI/Toolbar/SideDrawer/SideDrawer";

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
                <main>{this.props.children}</main>
            </React.Fragment>
        );
    }
}

export default Layout;
