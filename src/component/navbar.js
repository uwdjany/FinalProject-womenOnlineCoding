import React, { useState } from "react";
import "./style.css"

import {
    MailOutlined,
    PhoneOutlined
    
} from  "@ant-design/icons"
import {Space} from "antd"
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
    return(


      

       
<>

        
        <div className={color ? 'nav-container nav-bg':'nav-container'}>
        <header className="header-top">
<span><PhoneOutlined/> +250784875126</span>
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

<span><MailOutlined/> info@womenonline.rw</span>

</header>

        <ul className="nav-links">
        <li><a href="/home">Home</a></li>
        <li><a href>About Us</a></li>
        <li><a href>Tutorials</a></li>
        <li><a href="/login">Login</a></li>
        <li><a href>Videos</a></li>
        <li><a href>Contact Us</a></li>
        <li className="apply-btn"><a href>Apply Now</a></li>
        </ul>
        
        </div>
        </>
    
    )

}

export default Nav