import React, { useState } from "react";
import { useRef } from "react";
import "./style2.css"
import {Link} from 'react-scroll'

import {
    MailOutlined,
    PhoneOutlined
    
 } from  "@ant-design/icons";

import Slider from '../views/slider/home';

import Footer from "./footer";
import ServicePage from "../views/servicesPage";
import imagelogo from "../assets/images/logo2.png";
import './style2.css';
const Nav =()=>{
      //change color when scrolling
    const [color,setColor]=useState(false)
    const changeColor =()=>{
        if(window.scrollY >= 70){
            setColor(true)

        }else{
            setColor(false)
        }
    }
window.addEventListener('scroll', changeColor)
 

const [click,setClick] = useState(false)
const handleClick = () => setClick(!click)
const closeMenu = () => setClick (false)
    return(


      

       
<>

        
        <div className={color ? 'nav-container nav-bg':'nav-container'}>
        <header className="header-top">
<span><PhoneOutlined/> +250784875126</span>
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

<span><MailOutlined/> info@womenonline.rw</span>

</header>

        <ul className="nav-links">
         <li style={{color:"white"}}>
    <Link to="home" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Home</Link> 
         
         </li>
       
        <li style={{color:"white"}}>
        <Link to="services" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>Services</Link> 
        </li>
        <li style={{color:"white"}}>
        <Link to="about" spy={true} smooth={true} offset={50} duration={500} onClick={closeMenu}>About</Link> 
        </li>
        <li><a href='/tuto'>Tutorials</a></li>
        <li><a href="/login">Login</a></li>
    
        <li className="apply-btn"><a href="/application" style={{color:"white"}}>Apply Now</a></li>
        </ul>
        
        
         </div>


    
        </>
    
    )

}

export default Nav