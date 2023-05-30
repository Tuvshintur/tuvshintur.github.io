import React from 'react';

import CategoryItem from './CategoryItem/CategoryItem';
import styles from './Category.module.css';

const category = ({ categories, clicked }) => {
    const items = categories.map((category, idx) => {
        return <CategoryItem key={idx} item={category} clicked={() => clicked(category.title)} />;
    });
    return <div className={styles.Category}>{items}</div>;
};

export default category;
