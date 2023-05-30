import React from 'react';

import ListItem from './ListItem/ListItem';
import styles from './List.module.css';

const list = ({ listItems, clicked }) => {
  const items = listItems.map((listItem, idx) => {
    return <ListItem key={idx} item={listItem} clicked={clicked} />;
  });

  return <div className={styles.List}>{items}</div>;
};

export default list;
