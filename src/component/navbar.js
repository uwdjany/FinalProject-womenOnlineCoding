import React, { useState } from "react";
import { useRef } from "react";
import "./style2.css"

import {
    MailOutlined,
    PhoneOutlined
    
 } from  "@ant-design/icons";

import Slider from '../views/slider/home';
import About from "../views/About";
import Footer from "./footer";
import ServicePage from "../views/servicesPage";
import imagelogo from "../assets/images/logo2.png";
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
 

const services = useRef(null);
const about = useRef(null)
const scrollToSection = (elementRef) =>{
    window.scrollTo({
        top:elementRef.current.offsetTop,
        behavior:'smooth',
    })
}

    return(


      

       
<>

        
        <div className={color ? 'nav-container nav-bg':'nav-container'}>
        <header className="header-top">
<span><PhoneOutlined/> +250784875126</span>
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

<span><MailOutlined/> info@womenonline.rw</span>

</header>

        <ul className="nav-links">
         <li><a href='/home'>Home</a></li>
       
        <li>Services</li>
        <li>About Us</li>
        <li><a href=''>Tutorials</a></li>
        <li><a href="/login">Login</a></li>
    
        <li className="apply-btn"><a href="/apply">Apply Now</a></li>
        </ul>
        
        
         </div>


    
        </>
    
    )

}

export default Nav