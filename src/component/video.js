// import React from 'react';
// import videojs from 'video.js';
// import 'video.js/dist/video-js.css';
// import VideoPlaylistPlugin from 'videojs-playlist';
//  import 'videojs-playlist';
// import 'videojs-contrib-quality-levels';
// import 'videojs-extra-buttons';
// import "videojs-extra-buttons/dist/videojs-extra-buttons.css";
// import "videojs-playlist-ui";
// import "videojs-playlist-ui/dist/videojs-playlist-ui.vertical.css"
// videojs.registerPlugin('playlist', VideoPlaylistPlugin);
//  this.player.playlistUi();
// export default class VideoPlayer extends React.Component {
//     componentDidMount() {
//         this.player = videojs('preview-player');
//         // this.player.playlistUi();

//         this.player.extraButtons({
//             quickBackward: { seconds: 3 },
//             quickForward: { seconds: 3 },
//             qualitySelect: [
//                 { bandwidth: 524288, name: "Low" },
//                 { bandwidth: 1048576, name: "Mid" },
//                 { bandwidth: 2097152, name: "Hight" },
//                 { bandwidth: 4194304, name: "Hight+" }
//             ]
//         })

//         var videoList = [{
//             sources: [{
//                 src: 'http://media.w3.org/2010/05/sintel/trailer.mp4',
//                 type: 'video/mp4'
//             }],
//             poster: "http://media.w3.org/2010/05/sintel/poster.png"
//         }, {
//             sources: [{
//                 src: 'http://media.w3.org/2010/05/bunny/trailer.mp4',
//                 type: 'video/mp4'
//             }],
//             poster: 'http://media.w3.org/2010/05/bunny/poster.png'
//         }];

//         this.player.playlist(videoList)

//         this.player.playlist.autoadvance(0);
//     }

//     componentWillUnmount() {
//         if (this.player) {
//             this.player.dispose();
//         }
//     }

//     handleClick1() {
//         console.log("Video 1");
//     }
//     handleClick2() {
//         console.log("Video 2");
//     }
//     handleClick3() {
//         console.log("Video 3");
//     }

//     render() {
//         return (
//             <div class="main-preview-player">
//                 <video id="preview-player" class="video-js vjs-fluid" controls preload="auto" crossorigin="anonymous">
//                     <p class="vjs-no-js">To view this video please enable JavaScript, and consider upgrading to a web browser that <a href="http://videojs.com/html5-video-support/">supports HTML5 video</a></p>
//                 </video>

//                 //The div below is just the area in which i want to have playlist video's thumbnail
//                 //which on click will play the video connected to that thumbnail.
//                 <div class="playlist-container  preview-player-dimensions vjs-fluid">
//                     <ol class="vjs-playlist">
//                         <li>
//                             <span onClick={this.handleClick1}>Video 1</span>
//                         </li>
//                         <li>
//                             <span onClick={this.handleClick2}>Video 2</span>
//                         </li>
//                         <li>
//                             <span onClick={this.handleClick3}>Video 3</span>
//                         </li>
//                     </ol>
//                 </div>
//             </div>
//         );
//     }
// }
