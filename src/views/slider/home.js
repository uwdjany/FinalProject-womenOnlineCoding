import  {useState,useEffect} from "react";
 //import "./Slider.scss"
import { sliderData  } from "./slider-data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import './style.css'
// import './style2.css'

import About from "../about";

import Nav from "../../component/navbar";
import  Footer  from "../../component/footer";
import ServicePage from "../servicesPage";
import ScrollToTop from "../scrollToTop";

import {
    MailOutlined,
    PhoneOutlined
    
 } from  "@ant-design/icons";





const Slider = () =>{












    // =================================================================
    const [currentSlide , setCurrentSlide] = useState(0);
    const slideLength = sliderData.length;

    // slideLength = 1 2 3
    // currentSlide = 0 1 2
    const autoScroll = true;
    let slideInterval;
    let intervalTime = 5000;

const nextSlide = () =>{
    setCurrentSlide( currentSlide === slideLength - 1 ? 0 :
         currentSlide + 1);
};

const prevSlide = () =>{
    setCurrentSlide(currentSlide === 0 ? slideLength - 1 : currentSlide - 1);
};
function auto(){
    slideInterval = setInterval(nextSlide, intervalTime)
}


    useEffect(() =>{
        setCurrentSlide(0)
    },[])

    useEffect(() =>{
    if (autoScroll){
        auto()
    }
    return () => clearInterval(slideInterval)
    },[currentSlide])

    
    
    return(
        <>
        












// =============================================Home===============================================


<Nav/>
        <div className="slide" id="home">
       
        <ArrowLeftOutlined className="arrow prev" onClick={prevSlide}/>
        <ArrowRightOutlined className="arrow next" onClick={nextSlide}/>
        {sliderData.map((slide,index)=> {
            
            return(
                <div className={index === currentSlide ? 
                "slide current" : "slide"} key={index}>
                {index === currentSlide && (
                    <>
                    <img src={slide.image} alt="slide" style={{ backgroundImage:"linear-gradient(rgba(45, 55, 72, 0.6), rgba(45, 55, 72, 0.3)),"}}/>
                    <div className="content">
        
                      <h4 className="heading-four">{slide.heading}</h4>
                      <p>{slide.desc}</p>
                      <hr />
                      <button className="btn">{slide.btn}</button>

                    </div>
                    </>
                    
                )}
                
                </div>
            )
         })}

       </div> 
       <div>
       <ServicePage/> 
       </div>
       <div>
       <About/>
      
       </div>
       
      
     
     
       <Footer/>
       </>

       )
       
    

}


export default Slider