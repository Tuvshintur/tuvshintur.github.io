import React from "react";

const whoAmI = () => {
  return (
    <section className="Section animate__animated animate__fadeInDown">
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
        <li className="ListItem">
          Table Tennis Player&nbsp;
          <a
            className="UnderLinedLink"
            target="_blank"
            href="https://www.facebook.com/groups/1179208019519746/permalink/1448437599263452"
            rel="noreferrer noopener"
          >
            (Current achievement)
          </a>
        </li>
      </ul>
    </section>
  );
};

export default whoAmI;
