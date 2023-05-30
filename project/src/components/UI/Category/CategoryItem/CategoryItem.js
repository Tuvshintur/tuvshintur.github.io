import React from 'react';

import styles from './CategoryItem.module.css';

const categoryItem = ({ item, clicked }) => {
  let classes = item.active ? [styles.CategoryItem, styles.Active] : [styles.CategoryItem];

  return (
    <div className={classes.join(' ')} onClick={clicked}>
      <i className={item.icon}></i>
      <p>{item.title}</p>
    </div>
  );
};

export default categoryItem;
