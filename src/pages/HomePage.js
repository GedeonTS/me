import React from "react";
import "./styles/homepage.css";
import Headline from "../components/Headline";
import Profile from "../assets/profile.jpg"

const HomePage = () => {
    return <div className="homepage-container"><Headline/><div className="profile-image-section"><img src={Profile}  className="profile-image"/></div></div>
};

export default HomePage;
