import React, { Component } from "react";
import { useState } from "react";
import { Ref ,createRef } from "react";
import './testvideo.css'

import {
  Playlist,
  goToNextVideo,
  goToPreviousVideo
} from "reactjs-video-playlist-player";

function TestVideo() {
  const [videoList, setVideoList] = useState([
    {
      thumbnail: "https://www.iconsdb.com/icons/preview/orange/video-play-2-xxl.png",
      url:
        "https://www.youtube.com/watch?v=qFDgH6dHRA4.mp4",
      
    },
    {
     
      url:
        "/assets/videos/video5.mp4",
      
    },
    {
      thumbnail: " ",
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerEscapes.mp4",
      imgAlt: "HtmlCourse three"
    },
    {
      thumbnail: "",
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerBlazes.mp4",
      
    },
    {
      thumbnail: "",
      url:
        "http://commondatastorage.googleapis.com/gtv-videos-bucket/sample/ForBiggerJoyrides.mp4",
    
    }
  ]);

  const [currentVideo, setCurrentVideo] = useState(0);
  const vidRef = createRef(null);

  const params = {
    videos: videoList,
    autoPlay: true,
    showQueue: true,
    playForward: true,
    defaultQueueItemPlaceholderThumbnail: "https://www.iconsdb.com/icons/preview/orange/video-play-2-xxl.png",
    currentVideo: currentVideo,
    setCurrentVideo: setCurrentVideo,
    vidRef:  vidRef 
  };

  return (
    <div className="App">
      <h3 id="title" style={{marginLeft:"20px" , marginTop:"10px"}}>
        <span>Html Course</span> videoes for begginer 🎥<br />
      </h3><br /><br />
      <div className="playlist-cont">
        <Playlist playlistParams={params} />
      </div>
    </div>
  );
}

export default TestVideo;