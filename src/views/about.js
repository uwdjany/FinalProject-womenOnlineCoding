import React from "react";
import image from "../assets/images/online.png"
import { EyeFilled , BulbFilled} from "@ant-design/icons";
import './about.css'
const About =()=>{
    return(
        <>
        <div id='about'>
        <h4>Few words About Us</h4>
        <div className="about-container">
      
        <section className="about-section">
      
        
         <p>There was one with CAPYEI, an organization that trains job skills to out-of-school youth in Kenya, who needed to completely digitalise their teaching in a very short amount of time. Then there was another project with Professio, 
        a company providing corporate training, who had to move from 95% onsite training to 95% online training without losing the quality of their courses. 

        Looking back at 2020, we found some key insights that we think are
         crucial to offer quality digital education and training. Although every organization is
          unique and have their own way of doing things, here are some near-universal lessons that every trainer and educator should take notice of.  
        </p>

        
        </section>
        
        <img src={image} className="about-img"/>
    
        
        
        
        </div>
        <div className="icons">
        <p className="icon-one">
        <EyeFilled/>
        
        </p>
        <h6 className="para">Our Vision </h6>
        
        <p className="paragraph">Bringing opportunity to attain excellent < br />
         education, anytime anywhere</p>
        
        </div>
        <div className="icons">
        <p className="icon-one">
        <BulbFilled/>
        
        </p>
        <h6 className="para">Our Mission</h6>
        <p className="paragraph">Bringing opportunity to attain excellent < br />
         education, anytime anywhere</p>
        
        </div>
        </div>
        </>
    )

}

export default About