import React from "react";
import "./styles/contactBar.css"

import Twitter from "../assets/socials/twitter.png"
import LinkedIn from "../assets/socials/linkedin.png"
import Facebook from "../assets/socials/facebook.png"
import Dribble from "../assets/socials/dribble.png"
import GitHub from "../assets/socials/github.png"
import GitLab from "../assets/socials/gitlab.png"
import Medium from "../assets/socials/medium.png"
import Figma from "../assets/socials/figma.png"
import Behance from "../assets/socials/behance.png"

const ContactBar =()=>{
    return <div className="contact-bar">
        <div className="social-icon motion1"><img src={Twitter} style={{width:"50%"}}/></div>
        <div className="social-icon motion2"><img src={LinkedIn} style={{width:"50%"}}/></div>
        <div className="social-icon motion3"><img src={Facebook} style={{width:"50%"}}/></div>
        <div className="social-icon motion4"><img src={Dribble} style={{width:"50%"}}/></div>
        <div className="social-icon motion5"><img src={GitHub} style={{width:"50%"}}/></div>
        <div className="social-icon motion6"><img src={GitLab} style={{width:"50%"}}/></div>
        <div className="social-icon motion7"><img src={Medium} style={{width:"50%"}}/></div>
        <div className="social-icon motion8"><img src={Figma} style={{width:"50%"}}/></div>
        <div className="social-icon motion9"><img src={Behance} style={{width:"50%"}}/></div>
    </div>
}

export default ContactBar