import React from 'react'
import { Link } from 'react-router-dom'
import Styles from "./Navbar.module.css"

const Navbar = () => {
  return (    
    <nav>
        
            <Link><img src="https://www.testyantraglobal.com/images/logo.svg" alt="" /></Link>
        
        <div>
            <ul>
                <li>
                    <Link to="/">Home</Link>
                </li>
                <li>
                     <Link to="/Services">Services</Link>
                </li>
                <li>
                    <Link to="/Partners">Partners </Link>
                    
                </li>
                <li>
                    <Link to="/Articles">Articles</Link>
                </li>
                <li>
                    <Link to="GetInTouch"><button className={Styles.button}>Get In Touch</button></Link>
                </li>
            </ul>
        </div>       
    </nav>
  )
}

export default Navbar
