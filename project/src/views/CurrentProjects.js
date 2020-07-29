import React from 'react';

const whoAmI = () => {
    return (
        <section className="Section  animate__animated animate__fadeInDown">
            <h3 className="Title">Current projects</h3>
            <ul className="UnOrderedList">
                <li className="ListItem">
                    <a
                        className="UnderLinedLink"
                        href="https://github.com/Tuvshintur/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        I am doing what I want to do so please check my github.
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default whoAmI;
