import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';
import Thought from './containers/Thought/Thought';
import Auth from './containers/Auth/Auth';
import * as actions from './store/action';

function App(props) {
    useEffect(() => {
        props.onTryAutoSignup();
    });

    return (
        <React.Fragment>
            <Layout>
                <Switch>
                    <Route path="/Auth" component={Auth} />
                    <Route path="/Thought" component={Thought} />
                    <Route path="/" exact component={About} />
                </Switch>
            </Layout>
        </React.Fragment>
    );
}

const mapStateToProps = (state) => {
    return {
        isAuth: state.auth.token !== null,
    };
};

const mapDispatchToProps = (dispatch) => {
    return {
        onTryAutoSignup: () => dispatch(actions.authCheckState()),
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
