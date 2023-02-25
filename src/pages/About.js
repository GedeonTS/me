import React from "react";
import "./styles/About.css";

const About = () => {
  return (
    <div className="about-container">
      <div className="presentation">
        <h1>Who I Am </h1>
        <p>
          I'm an experienced web developer with a passion for using technology
          to make the world a better place.I create high-quality websites that
          are both functional and visually appealing.</p><p> With a passion for
          simplicity and organization, I showcase my process to clients to
          achieve the best possible outcome. My unique perspective and deep
          understanding of the latest web development tools and techniques set
          me apart from other web developers. Let's discuss how we can work
          together to achieve your goals.
        </p>
        <a href="#" className="resume-button">Get my resume</a>
      </div>
      <ul className="expertise-list">
        <li>Languages</li>
        <li>Frameworks</li>
        <li>Skills</li>
      </ul>
    </div>
  );
};

export default About;
