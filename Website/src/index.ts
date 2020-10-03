       import MediaPlayer from 'videomediaplayer'
       import autoPlay from 'videomediaplayer/lib/plguins/autoPlay'
       import autoPause from "videomediaplayer/lib/plguins/autoPause"
       import Ads from "videomediaplayer/lib/ads/index"
       //declaracion de botones y selecoter
       const video = document.querySelector("body > main > video");
       const buttonPlay: HTMLElement = document.querySelector("#playButton");
       const buttonMute: HTMLElement = document.querySelector("#muteButton")
       //usando prototypes
       

       const player = new MediaPlayer( {
           el: video,
           plugin: [new autoPlay() , new autoPause(), new Ads()]
       });
       
      
       buttonMute.onclick =() => {
           if (player.media.muted === true){
               player.media.muted = false 
           } else {
               player.media.muted = true
           }
       }

       buttonPlay.onclick = () => {
           if ( player.media.paused ===true) {
               player.play();
            
           }
           else {
               player.pause();
           }     
       }

       if ("serviceWorker" in navigator) {
           navigator.serviceWorker.register("../sw.js").then(regis =>  { 
               console.log("service Worker installed")
           }).catch(err => {
               console.log("service Worker Error", err.message)
           }) 
       } else {
           console.log("Navigator dont support Service Worker, Update Now")
       }