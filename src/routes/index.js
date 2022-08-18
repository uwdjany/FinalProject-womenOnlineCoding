import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from '../views/slider/home';
import Login from '../views/login';
import About from '../views/about';
import StepContext from '../views/ApplyNow/StepContex';
import Combine from '../views/ApplyNow/combinePage';
import Indexi from './applyroute';
import DashCourse from '../component/Courses/dashCourses';
import CourseStucture from '../component/Courses/courseStructure';
import { Ref } from 'react';
import VideoPlayer from '../component/video';
import TakeCourse from '../views/takeCourse';
import DashAdmin from '../component/Admin/dashAdmin';
import ApplicationPage from '../views/Application/applyPage';
import Tutorials from '../component/tutorial';
import TestVideo from '../component/testVideo';
import Attendance from '../component/Admin/attendence';
import TableofApplication from '../component/Admin/table'
import ListApplicants from '../component/Admin/listApplicant';




const Index=()=>
{
   
   return(
  

  


    

<Routes>

  
<Route exact path='/' element= {<Slider/>}></Route>
<Route exact path='/home' element= {<Slider/>}></Route>

    <Route exact path='/login' element= {<Login/>}></Route>

    <Route exact path='/about' element= {<About/>} ></Route>
  
     <Route exact path='/course' element= {<DashCourse/>}></Route>
    <Route exact path='/:courseName' element= {<CourseStucture/>}></Route>
    <Route exact path='/video' element= {<VideoPlayer/>}></Route>
    <Route exact path='/take' element= {<TakeCourse/>}></Route>
    <Route exact path='/admin' element= {<DashAdmin/>}></Route>
    <Route exact path='/application' element= {< ApplicationPage/>}></Route>
    <Route exact path='/tuto' element= {<Tutorials />}></Route>
    <Route exact path='/testvideo' element= {<TestVideo />}></Route>
    <Route exact path='/list' element={<Attendance/>}></Route>
    <Route exact path='/applicant' element={<TableofApplication/>}></Route>
    <Route exact path='/tranee' element={<ListApplicants/>}></Route>
</Routes> 

    )
}


export default Index;