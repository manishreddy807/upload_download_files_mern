import React  from "react";
import { NavLink } from "react-router-dom";
import './style.scss';
const Header = () => {
   
    return(
        <div className="header">
         <h1>File upload and download</h1>
         <nav>
             <NavLink activeclassname="active" to= "/" exact={true}>
                 Home
             </NavLink>
             <NavLink activeclassname="active" to="/list">
                 Files List
             </NavLink>
         </nav>
        </div>
    )
}

export default Header;