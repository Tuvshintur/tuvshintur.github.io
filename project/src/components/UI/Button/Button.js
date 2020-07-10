import React from 'react';

import styles from './Button.module.css';

const button = ({ clicked, type, disabled, children }) => {
    const classes = [styles.Button];
    if (type === 'Success') classes.push(styles.Success);
    return (
        <button className={classes.join(' ')} onClick={clicked} disabled={disabled}>
            {children}
        </button>
    );
};

export default button;
