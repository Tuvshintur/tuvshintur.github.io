import React from "react";

const whoAmI = () => {
    return (
        <section className="Section">
            <h3 className="Title">Who?</h3>
            <ul className="UnOrderedList">
                <li className="ListItem">
                    <a
                        className="UnderLinedLink"
                        target="_blank"
                        href="https://github.com/Tuvshintur"
                        rel="noreferrer noopener"
                    >
                        Web Developer
                    </a>
                </li>
                <li className="ListItem">Table Tennis Player</li>
            </ul>
        </section>
    );
};

export default whoAmI;
