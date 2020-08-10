import React from 'react';

const experience = () => {
    return (
        <section className="Section  animate__animated animate__fadeInDown">
            <h3 className="Title">Work Experiences</h3>
            <ul className="UnOrderedList">
                <li className="ListItem">
                    <a
                        className="UnderLinedLink"
                        href="https://en.golomtbank.com/"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Golomt Bank Mongolia
                    </a>
                    <span className="Text-right">03/2018 - 08/2019</span>
                </li>
                <li className="ListItem">
                    <a className="UnderLinedLink" href="https://web.able.mn/" target="_blank" rel="noreferrer noopener">
                        AbleSoft LLC
                    </a>
                    <span className="Text-right">01/2016 - 03/2018</span>
                </li>
            </ul>
        </section>
    );
};

export default experience;
