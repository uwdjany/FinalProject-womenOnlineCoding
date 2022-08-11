import  {useState,useEffect,useRef } from "react";
 //import "./Slider.scss"
import { sliderData  } from "./slider-data";
import { ArrowLeftOutlined, ArrowRightOutlined, MailOutlined,
    PhoneOutlined    } from "@ant-design/icons";
import './style.css'
import './style2.css'
import About from "../about";
import Nav from "../../component/navbar";
import  Footer  from "../../component/footer";
import ServicePage from "../servicesPage";
import ScrollToTop from "../scrollToTop";


const Slider = () =>{

   //change color when scrolling
   const [color,setColor]=useState(false)
   const changeColor =()=>{
       if(window.scrollY >= 70){
           setColor(true)

       }else{
           setColor(false)
       }
   }
window.addEventListener('scroll', changeColor)
const services = useRef(null);
const about = useRef(null)
const scrollToSection = (elementRef) =>{
   window.scrollTo({
       top:elementRef.current.offsetTop,
       behavior:'smooth',
   })
}
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
        <div className={color ? 'nav-container nav-bg':'nav-container'}>
        <header className="header-top">
<span><PhoneOutlined/> +250784875126</span>
&nbsp; &nbsp;&nbsp;&nbsp;&nbsp;

<span><MailOutlined/> info@womenonline.rw</span>

</header>

        <ul className="nav-links">
         <li>Home</li>
       
        <li onClick={() => scrollToSection(services)}>Services</li>
        <li onClick={() => scrollToSection(about)}>About Us</li>
        <li><a href>Tutorials</a></li>
        <li><a href="/login">Login</a></li>
    
        <li className="apply-btn"><a href="/apply">Apply Now</a></li>
        </ul>   
         </div>



































































        <div className="slide">
        <ScrollToTop/>
        <ArrowLeftOutlined className="arrow prev" onClick={prevSlide}/>
        <ArrowRightOutlined className="arrow next" onClick={nextSlide}/>
        {sliderData.map((slide,index)=> {
            
            return(
                <div className={index === currentSlide ? 
                "slide current" : "slide"} key={index}>
                {index === currentSlide && (
                    <>
                    <img src={slide.image} alt="slide" className="image-slider"/>
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
       <div ref={services}>
       <ServicePage/> 
       </div>
       <div ref={about}>
       <About/>
      
       </div>
       
      
     
     
       <Footer/>
       </>

       )
       
    

}


export default Slider