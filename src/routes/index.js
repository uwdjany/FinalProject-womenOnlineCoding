import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from '../views/slider/home';
import Login from '../views/login';
import About from '../views/About';
import StepContext from '../views/ApplyNow/StepContex';
import Combine from '../views/ApplyNow/combinePage';
import Indexi from './applyroute';
import DashCourse from '../component/Courses/dashCourses';
import CourseStucture from '../component/Courses/courseStructure';
import { Ref } from 'react';
import VideoPlayer from '../component/video';





const Index=()=>
{
   
   return(
  

  


    

<Routes>

  
<Route exact path='/' element= {<Slider/>}></Route>
<Route exact path='/home' element= {<Slider/>}></Route>

    <Route exact path='/login' element= {<Login/>}></Route>

    <Route exact path='/about' element= {<About/>} ></Route>
     <Route exact path='/apply' element= {<Indexi/>}></Route>
     <Route exact path='/course' element= {<DashCourse/>}></Route>
    <Route exact path='/:courseName' element= {<CourseStucture/>}></Route>
    <Route exact path='/video' element= {<VideoPlayer/>}></Route>
</Routes> 

    )
}


export default Index;