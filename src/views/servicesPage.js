import React from 'react';
import './services.css'
import {  UserSwitchOutlined , DesktopOutlined  } from "@ant-design/icons";
const ServicePage =()=>{
    return(
        <>
        <div id='services'>
        <div className='head-wrap' >
        <h1 className='wrapper-h'>Our Services</h1>
        </div>
       
      
        <div className='wrapper'>
      
      
        

        <div className='team'>
        
        <div className= 'team_member'>
        <div className='team_icons'>

       <span className='iconic'><UserSwitchOutlined/></span> 
        
        </div>
        <p className='paragraph-bx'>E-MENTORSHIP</p>
        </div>
        <div className= 'team_member'>
        <div className='team_icons'>

       <span className='iconic'><DesktopOutlined/></span> 
        
        </div>
        <p className='paragraph-bx'>E-TRAINING</p>
        </div>
        <div className= 'team_member'>
        <div className='team_icons'>

       <span className='iconic'><UserSwitchOutlined/></span> 
        
        </div>
        <p className='paragraph-bx'>CERTIFICATE</p>
        </div>
        
        
        </div>
        
        </div>
        </div>
        </>
    )

}

export default ServicePage