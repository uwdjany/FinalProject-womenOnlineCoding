import React, { useState } from "react";
import { Link, useParams  } from "react-router-dom";

 import './index.css'

function CourseStucture (props){
    console.log(props)
// const courseName = props.match.params.coursename;

const {courseName} = useParams();
const courses = {
    htmlCourse:[

       {title:"HTML Course for beginners",vid:"6kycPB7RMnY"},
       {title:"htlm  title 2",vid:"FeC_fQgbMzI"},
       {title:"htlm title 3",vid:"FeC_fQgbMzI"}
    ],
    cssCourse:[

        {title:"css title 1",vid:"qKoajPPWpmo"},
        {title:"css title 2",vid:"UO0ZPL8yMpU"},
        {title:"css title 3",vid:"https://youtu.be/UO0ZPL8yMpU"}
     ],
     javascriptCourse:[

        {title:"css title 1",vid:"qKoajPPWpmo"},
        {title:"css title 2",vid:"UO0ZPL8yMpU"},
        {title:"css title 3",vid:"https://youtu.be/UO0ZPL8yMpU"}
     ]
}
const [vid,uid] =useState(courses[courseName][0].vid)
const [title,utit] =useState(courses[courseName][0].title)
const renderVideo =()=>{
    return(
        <>
         <h1 style={{textAlign:"center",float:"left"}}>{title}</h1>
        <div style={{width:"100",background:"black"}} >
      
        <iframe width="853" height="480" src={"//www.youtube.com/embed/"+vid+"?rel=0"} frameBorder="0" allowFullScreen></iframe>
        </div>
      </>

    )
}


    return(
   


    <div className="container-video">
    <h1>{courseName}</h1>
    {renderVideo()}
    
     <div className="collection">
    
    
    
    
         {
            courses[courseName].map(item=>{
                return  <Link to ="#!" className="collection-item"  onClick={()=>{
                    uid(item.vid )
                    utit(item.title)
                }}>{item.title}</Link>
            }
                )
         }
    
    
    </div>
    </div> 






    )

}
 
export default CourseStucture