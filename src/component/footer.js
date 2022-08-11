import React from 'react';
import './footer.css';

import {
  FacebookOutlined,
TwitterOutlined,
MailOutlined,
LinkedinOutlined,

  
} from  "@ant-design/icons"

const Footer =()=>{
  
  const date =new Date();
  let year =date.getFullYear();
    return(

      <footer className='footer-cont'>
      <div className='container'>
      <div className='row'>
      <div className='footer-col'>
      <h5>Links</h5>
      <ul>
      
<li><a href=''>home</a></li>
<li><a href=''>About</a></li>
<li><a href=''>Tutorials</a></li>

      
      </ul>
      
      </div>
      
      <div className='footer-col'>
<h5>USEFUL LINKS</h5>
<ul>

<li><a href=''>Are you mentor? <span className='links'>Patern with us</span></a></li>
<li><a href=''>Are you trainee? <span className='links'>Login In</span></a></li>
<li><a href=''>want become programmer? <span className='links'>Apply Now</span></a></li>


</ul>

</div>





<div className='footer-col'>
<h5>CONTACT US</h5>
<div className="social-icons">
<a href='' className='icon-s'><FacebookOutlined/></a>
<a href='' className='icon-s'> <TwitterOutlined/> </a>
<a href='' className='icon-s'><MailOutlined/></a>
<a href='' className='icon-s'><LinkedinOutlined/></a>
</div>

</div>




      </div>
      
      </div>
      <header className='copy-container'>
      <p className='copyright'>
      {" "}
      copyright &copy;{year} by &nbsp;LadiesInCode,&nbsp;&nbsp;
      <span className='copy'>Inc.All rights reserved</span>


  </p>
      
      </header>
      </footer>
      
      
    )

}

export default Footer