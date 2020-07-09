import React from 'react';

import styles from './Button.module.css';

const button = ({ clicked, type, disabled, children }) => {
    const classes = [styles.Button];
    if (type === 'Submit') classes.push(styles.Submit);
    return (
        <button className={classes.join(' ')} onClick={clicked} disable={disabled}>
            {children}
        </button>
    );
};

export default button;
