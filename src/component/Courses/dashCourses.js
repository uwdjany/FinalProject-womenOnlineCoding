import React from "react";
//import './index.css'
import { Link } from "react-router-dom";

const DashCourse =()=>{

    return(
        <div>
        <header style={{textAlign:"center",fontSize:"5rem",fontWeight:"500"}}>Video Course</header>
        <Link to='/htmlCourse'>
        <ul>   
        
        <li style={{fontSize:"2rem",textAlign:"center"}}>HTML Course</li>
        </ul>
        
        </Link>

        <Link to='/cssCourse'>
        <ul>
        <li style={{fontSize:"2rem",textAlign:"center"}}>CSS Course</li>
        
        </ul>
        
        
        </Link>

        <Link to='/javascriptCourse'>
        <ul>
        <li style={{fontSize:"2rem",textAlign:"center"}}>JAVAScript Course</li>
        
        </ul>
        
        
        </Link>
        
        </div>

    )
}

export default DashCourse;