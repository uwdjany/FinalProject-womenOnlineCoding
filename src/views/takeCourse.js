import React from 'react'
import './course.css';

import vv from '../assets/videos/video-one.mp4'
const TakeCourse = () => {
  return (
    <>
    <div className='body-bg'>
    
    <main class="container-course">
    <section class="main-video">
    
        <video src={vv} controls autoplay></video>
        <h6 class="title-course">Title of the playing Video.</h6>
    
    </section>
    <section class="video-playlist">
        <h6 class="title-course">Title of video playlist</h6>
        <p>10 lessions &nbsp; . &nbsp; 50m 48s</p>
        <div class="videos">
    <div className='video active'>
    <img src='{}'/>
    <p>01.</p>
    <h6 className='title-course'>Title of video added in </h6>
    <p className='time'>3:50</p>
    </div>
    
    
    
        </div>
    </section>
    
        </main>
    
        </div>
    </>
  )
}

export default TakeCourse;
