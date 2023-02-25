import React, { useEffect } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import "./styles/navbar.css";

const Navbar = () => {

const navigation={
    "/":1,
    "/about":2,
    "/projects":3,
    "/contact":4
}

let location = useLocation();


const [active, setActive] = React.useState(navigation[location.pathname]);
    

    // const handleClick = (e) => {
    //     setActive();
    //     console.log(active,'active variable')
    //     console.log(location.pathname,'location variable')
    // }

return <div className="navbar-container">
        <div className="nav-menu">
        <Link id={1} to="/" className={1===active?"navbar-item-active":"navbar-item"} onClick={()=>setActive(1)}>Home</Link>
        <Link id={2} to="/about" className={2===active?"navbar-item-active":"navbar-item"} onClick={()=>setActive(2)}>About</Link>  
        <Link id={3} to="/projects" className={3===active?"navbar-item-active":"navbar-item"} onClick={()=>setActive(3)}>Projects</Link>
        <Link id={4} to="/contact" className={4===active?"navbar-item-active":"navbar-item"} onClick={()=>setActive(4)}>Contact</Link>

        <div key={1} className={1===active?"underline-active":"underline"}></div>
        <div key={2} className={2===active?"underline-active":"underline"}></div>
        <div key={3} className={3===active?"underline-active":"underline"}></div>
        <div key={4} className={4===active?"underline-active":"underline"}></div>
        </div>
</div>;
}

export default Navbar;