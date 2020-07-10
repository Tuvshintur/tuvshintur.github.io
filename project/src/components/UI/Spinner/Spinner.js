import React from 'react';

import styles from './Spinner.module.css';

const spinner = ({ isWhite }) => {
    const classes = [styles.Loader];
    if (isWhite) classes.push(styles.onWhite);
    return <div className={classes.join(' ')}>Loading...</div>;
};

export default spinner;
