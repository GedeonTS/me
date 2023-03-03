import React from "react";
import "./styles/headline.css";

const Headline = () => {
    return <div className="headline-container">
        <p className="my-text">Hello, I'm </p>
        <h1 className="headline">
            <span className="name-wrapper">{"<"}</span> 
            <span className="name">Ushindi Gedeon</span>
            <span className="name-wrapper">{" />"}</span>
            </h1>
        <h2 className="job">Web Developer</h2>
        <p className="my-text">I am ready to help you build your next big thing!</p>
    </div>;
}

export default Headline;