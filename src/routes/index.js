import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from '../views/slider/home';





const Index=()=>
{
   
   return(
  

  


    

<Routes>
    <Route exact path='/' element= {<Slider/>}></Route>
    <Route exact path='/home' element= {<Slider/>}></Route>

</Routes> 






    )
}


export default Index;