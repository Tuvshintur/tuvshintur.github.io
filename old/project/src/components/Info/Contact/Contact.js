import React from 'react';
import 'font-awesome/css/font-awesome.min.css';

import styles from './Contact.module.css';

const contact = () => {
    const contactInfo = [
        {
            link: 'tuvshinturbatzorig@gmail.com',
            linkType: 'email',
            newTab: true,
            iconType: 'fa fa-envelope',
        },
        {
            link: 'https://www.linkedin.com/in/tuvshintur-batzorig/',
            linkType: '',
            newTab: true,
            iconType: 'fa fa-linkedin',
        },
        {
            link: 'https://github.com/Tuvshintur',
            linkType: '',
            newTab: true,
            iconType: 'fa fa-github',
        },
        {
            link: 'https://medium.com/@tuvshinturbatzorig',
            linkType: '',
            newTab: true,
            iconType: 'fa fa-medium',
        },
        {
            link: 'https://drive.google.com/file/d/1g4GDoVXDxlMC76GJZI7pmRcHaIU6Jw3L/view?usp=sharing',
            linkType: '',
            newTab: true,
            iconType: 'fa fa-download',
        },
    ];

    let list = contactInfo.map((contact, index) => {
        let link = contact.link;
        if (contact.linkType === 'email') link = 'mailto:' + link;
        return (
            <li key={index} className={styles.ListItem}>
                <a href={link} target={contact.newTab ? '_blank' : null}>
                    <i className={contact.iconType}></i>
                </a>
            </li>
        );
    });

    return (
        <div className={styles.Contact}>
            <ul className={styles.List}>{list}</ul>
        </div>
    );
};

export default contact;
