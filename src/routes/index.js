import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from '../views/slider/home';
import Login from '../views/login';
import About from '../views/about';
import DashCourse from '../component/Courses/dashCourses';
import CourseStucture from '../component/Courses/courseStructure';
import { Ref } from 'react';
import TakeCourse from '../views/takeCourse';
import DashAdmin from '../component/Admin/dashAdmin';
import ApplicationPage from '../views/Application/applyPage';
import Tutorials from '../component/tutorial';
import Attendance from '../component/Admin/attendence';
import TableofApplication from '../component/Admin/table'

import Chart from '../component/Admin/chart';
import AllTrainee from "../component/Admin/allTrainees"

import Signin from "../views/signupMentor";

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
    <Route exact path='/take' element= {<TakeCourse/>}></Route>
    <Route exact path='/admin' element= {<DashAdmin/>}></Route>
    <Route exact path='/application' element= {< ApplicationPage/>}></Route>
    <Route exact path='/tuto' element= {<Tutorials />}></Route>

    <Route exact path='/list' element={<Attendance/>}></Route>
    <Route exact path='/apply' element={<TableofApplication/>}></Route>
   
    <Route exact path='/signin' element={<Signin/>}></Route>
    
    <Route exact path='dash' element={<Chart/>}></Route>
    <Route exact path='/alltrainee' element={<AllTrainee/>}></Route>
</Routes> 

    )
}


export default Index;