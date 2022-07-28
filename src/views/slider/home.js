import  {useState,useEffect} from "react";
 //import "./Slider.scss"
import { sliderData  } from "./slider-data";
import { ArrowLeftOutlined, ArrowRightOutlined } from "@ant-design/icons";
import './style.css'




const Slider = () =>{
    
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
        <div className="slide">
        <ArrowLeftOutlined className="arrow prev" onClick={prevSlide}/>
        <ArrowRightOutlined className="arrow next" onClick={nextSlide}/>
        {sliderData.map((slide,index)=> {
            
            return(
                <div className={index === currentSlide ? 
                "slide current" : "slide"} key={index}>
                {index === currentSlide && (
                    <>

                    <img src={slide.image} alt="slide" />
                    <div className="content">
                    
                      <h2>{slide.heading}</h2>
                      <p>{slide.desc}</p>
                      <hr />
                      <button className="btn">Apply Now</button>

                    </div>

                    </>
                    
                )}
                
                </div>
            )
         })}

       </div>
       

       )
       
    

}


export default Slider