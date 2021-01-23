import React from "react";
import Typed from "react-typed";

const Header = () => {
    return (
        <div className="header-wraper">
            <div className="main-info" >
           <h1> web developement and design </h1>
           <Typed className="typed-text" 
           strings={["Web Development","landing page","Email template"]}
           typeSpeed={40}
           backSpeed={60}
           loop 
           />
           <a href="#" className="btn-main-offer">Contract Me </a> 
           </div>
        </div>
    )
}
export default Header;