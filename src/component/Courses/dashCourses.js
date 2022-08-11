import React from "react";
import './index.css'
import { Link } from "react-router-dom";

const DashCourse =()=>{

    return(
        <div className="container-course">
        <Link to='/html'>
        <h1 className="heading-h1">HTML Course</h1>
        
        </Link>

        <Link to='/css'>
        <h1>CSS Course</h1>
        
        </Link>
        
        </div>

    )
}

export default DashCourse;