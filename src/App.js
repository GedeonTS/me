import React from "react";
import {Routes, Route, Switch, } from "react-router-dom";
import HomePage from "./pages/HomePage";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";
import Navbar from "./components/Navbar";
import ContactBar from "./components/ContactBar"
import Particles from 'react-particles-js';


//switch is used to render only one route at a time
//Routes is used to wrap all the routes
//Route is used to define a route
//path is used to define the path of the route
//element is used to define the component to be rendered
//exact is used to define the exact path
//useNavigate is used to navigate to a particular route
//useLocation is used to get the current location



const App = () => {
    return (
        // <div style={{position:"relative",width:"100%",height:"100%"}}>
        //     <Navbar />
        //     <div className="tile">
        //     <Routes>
        //         <Route path="/" element={<HomePage />} />
        //         <Route path="/about" element={<About />} />
        //         <Route path="/contact" element={<Contact />} />
        //         <Route path="/projects" element={<Projects />} />
        //     </Routes>
        //     </div>
        //     <ContactBar/>
        // </div>
        <Particles />
    );
}

export default App;