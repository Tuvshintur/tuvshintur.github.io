import React from 'react';
import styles from './ListItem.module.css';

const listItem = ({ item, clicked }) => {
    const tags = item.tags.map((tag, idx) => {
        return (
            <div className={styles.Tag} key={idx}>
                {tag}
            </div>
        );
    });
    return (
        <div className={styles.ListItem} onClick={() => clicked(item.id)}>
            <div className={styles.Misc}>
                <div className={styles.Date}>{item.createdDate}</div>
                {tags}
            </div>
            <div className={styles.Details}>
                <h2 className={styles.Title}>{item.title}</h2>
                <div className={styles.Body}>{item.body}</div>
                <div className={styles.Fade}></div>
            </div>
        </div>
    );
};

export default listItem;