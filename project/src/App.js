import React, { useEffect} from 'react';
import { connect } from 'react-redux';
import { Route, Routes, Navigate  } from 'react-router-dom';

import Layout from './hoc/Layout/Layout';
import About from './containers/About/About';
import Thought from './containers/Thought/Thought';
import Auth from './containers/Auth/Auth';
import * as actions from './store/action';

function App(props) {
  useEffect(() => {
    props.onTryAutoSignin();
  });

  return (
  <React.Fragment>
    <Layout>
      <Routes>
        <Route path="/Auth" element={<Auth/>} />
        <Route path="/Thought" element={<Thought/>} />
        <Route path="/" element={<About/>} />
      </Routes>
    <Navigate to="/" />
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
    onTryAutoSignin: () => dispatch(actions.authCheckState()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
