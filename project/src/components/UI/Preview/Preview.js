import React from 'react';
import TimeAgo from 'react-timeago';
import styles from './Preview.module.css';

const preview = ({ item }) => {
  const isEmpty = Object.keys(item).length === 0 && item.constructor === Object;
  let body = null;
  if (!isEmpty) {
    const tags = item.tags.map((tag, idx) => {
      return (
        <div className={styles.Tag} key={idx}>
          {tag}
        </div>
      );
    });
    body = isEmpty ? null : (
      <React.Fragment>
        <div className={styles.Misc}>
          <div className={styles.Date}>
            <TimeAgo date={item.createdDate} />
          </div>
          {tags}
        </div>
        <div className={styles.Details}>
          <h2 className={styles.Title}>{item.title}</h2>
          <div className={styles.Body} dangerouslySetInnerHTML={{ __html: item.body }}></div>
        </div>
      </React.Fragment>
    );
  }

  return <div className={styles.Preview}>{body}</div>;
};

export default preview;
