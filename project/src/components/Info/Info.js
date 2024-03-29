import React from 'react';

import Contact from './Contact/Contact';

import styles from './Info.module.css';

const info = () => {
  console.log(process.env.PUBLIC_URL + process.env.REACT_APP_PROFILE_PICTURE)
  return (
    <div className={styles.Info}>
      <img
        src={process.env.PUBLIC_URL + process.env.REACT_APP_PROFILE_PICTURE}
        alt="me"
        className={styles.Image}
      />
      <div className={styles.Description}>
        <h1>Hi, I am Turuu!</h1>
        <h4>Full Stack Developer</h4>
      </div>
      <Contact />
    </div>
  );
};

export default info;
