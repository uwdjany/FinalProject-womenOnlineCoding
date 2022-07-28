import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from '../views/slider/home';
import Login from '../views/login';




const Index=()=>
{
   
   return(
  

  


    

<Routes>
    <Route exact path='/' element= {<Slider/>}></Route>
    <Route exact path='/home' element= {<Slider/>}></Route>
    <Route exact path='/login' element= {<Login/>}></Route>

</Routes> 






    )
}


export default Index;