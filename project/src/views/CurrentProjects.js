import React from "react";

const whoAmI = () => {
    return (
        <section className="Section  animate__animated animate__fadeInDown">
            <h3 className="Title">Current projects</h3>
            <ul className="UnOrderedList">
                <li className="ListItem">
                    <a
                        className="UnderLinedLink"
                        href="https://github.com/Tuvshintur/Kanban"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        Kanban board
                    </a>
                </li>
                <li className="ListItem">
                    <a
                        className="UnderLinedLink"
                        href="https://github.com/Tuvshintur/TimeTracker"
                        target="_blank"
                        rel="noreferrer noopener"
                    >
                        TimeTracker
                    </a>
                </li>
            </ul>
        </section>
    );
};

export default whoAmI;
