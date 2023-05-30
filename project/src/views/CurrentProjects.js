import React from 'react';

const currentProjects = () => {
  return (
    <section className="Section  animate__animated animate__fadeInDown">
      <h3 className="Title">Current projects</h3>
      <ul className="UnOrderedList">
        <li className="ListItem">
          <a
            className="UnderLinedLink"
            href="https://github.com/Tuvshintur/social_clones"
            target="_blank"
            rel="noreferrer noopener"
          >
            Clone of popular social sites. /Only front-end/
          </a>
        </li>
        <li className="ListItem">
          <a
            className="UnderLinedLink"
            href="https://tuvshintur.github.io/React_Roadmap/"
            target="_blank"
            rel="noreferrer noopener"
          >
            React RoadMap
          </a>
        </li>
      </ul>
    </section>
  );
};

export default currentProjects;
