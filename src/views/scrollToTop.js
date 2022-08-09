import React,{useState,useEffect} from 'react'
import { DoubleLeftOutlined } from "@ant-design/icons";
import './services.css'
const ScrollToTop = () => {
    const [showScrollTopButton , setShowScrollTopButton] = useState(false);

    useEffect(() =>{
        window.addEventListener('scroll',() =>{
            if (window.screenY > 300) {
                setShowScrollTopButton(true);
            }else{
                setShowScrollTopButton(false);
            }
        })
  
},  []);

const scrollTop = () =>{
    window.scrollTo({
        top:0,
        behavior:'smooth',
    });
 };

  return (
    <div>
    {showScrollTopButton && <DoubleLeftOutlined className='top-btn-position' onClick={scrollTop}/>}
    
    </div>

  )
 
    
  
}

export default ScrollToTop
