import React from 'react';
 import "./login.css";

// import email from "../src/images/email.jpg";
import profile from "../assets/images/profile.png";
import email from "../assets/images/email.jpg";
import pass from "../assets/images/pass.jpg";
function Login () {
  return (
    <div className="main">
      <div className="login-content">
       <div>
       <div className="imgs">
        <div className="container-image">
          <img src={profile} alt="profile" className="profile"/>
         
    </div>
  
    
    </div>
    <h3 className='heading-lg'>Login page</h3>
    </div>
  

  <div>
  <img src={email} alt="email" className='email'/>
  <input type="text" placeholder=' email' className='name'/>
    </div>
    <div className='second-input'>
    <img src={pass} alt="pass" className='email'/>
  <input type="password" placeholder='password' className='name'/>
  </div>
  <div className="login-button">
    <button>Login</button>
   </div>
    

    <p className='linn'>
      <a href='#'>Forgot password ?</a> or <a href="/signin">Sign up </a>
    </p>


</div>
</div>
  );
}

export default Login;
