import React from 'react';
import { Route, Switch } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';
import Thought from './containers/Thought/Thought';
import Auth from './containers/Auth/Auth';

function App() {
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

export default App;
