import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Slider from '../views/slider/home';
import Login from '../views/login';
import Signin from '../component/Signin';
import Tutorials from '../views/tutorials';
const Index=()=>
{
    return( 

<Routes>
    <Route exact path='/' element= {<Slider/>}></Route>
    <Route exact path='/home' element= {<Slider/>}></Route>
    <Route exact path='/login' element= {<Login/>}></Route>
    <Route exact path='/Signin' element= {<Signin/>}></Route>
    <Route exact path='/tutorials' element= {<Tutorials/>}></Route>

</Routes> 

    )
}

export default Index;