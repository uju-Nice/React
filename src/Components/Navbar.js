import React from "react";
import {Link, NavLink} from 'react-router-dom'


const Navbar = () => {
   // setTimeout(() => {
   // props.history.push('/home')
   // }, 2000)

   return (
    <nav className="nav-wrapper blue">
       <div className="container-width">
         <a className="brand-logo center ">NICKOS </a> 
         <ul className="right">
            <li className="container-width"><Link to="/">Home</Link></li>
            <li><NavLink to="/about">About</NavLink></li>
            <li><NavLink to="/contact">Contact</NavLink></li>
            <li><NavLink to="/My account">My account</NavLink></li>
         </ul>
       </div>
    </nav>
   )

}

export default Navbar