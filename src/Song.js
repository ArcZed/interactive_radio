
import lofi1 from './music/lofi/lofi1.mp3';
import lofi2 from './music/lofi/lofi2.mp3';
import lofi3 from './music/lofi/lofi3.mp3';
import lofi4 from './music/lofi/lofi4.mp3';
import lofi5 from './music/lofi/lofi5.mp3';
import lofi6 from './music/lofi/lofi6.mp3';

import ambient from "./music/ambient/ambient.mp3"
import nature from "./music/nature/nature.mp3"

export const playMusic = () => {

    const bar = document.querySelector(".bar");
    const meter = document.querySelector(".meter");
    const audio = document.querySelector("audio")    

    let playlist = [];
    let lofi = [lofi1, lofi2, lofi3, lofi4, lofi5, lofi6];
    let genreList = [lofi, ambient, nature];

    var prevSong = [];

    //get meter pos
    let meterPos = parseInt(window.getComputedStyle(meter).getPropertyValue("left"));

    if (meterPos > 0 && meterPos < bar.scrollWidth/3) {
        playlist.push(genreList[0]);
    }
    else if (meterPos >  bar.scrollWidth/3 && meterPos < bar.scrollWidth*2/3) {
        playlist.push(genreList[1]);
    }
    else {playlist.push(genreList[2]);}
    
    const randomSong = (list) => {
        let currSong = Math.floor(Math.random() * list[0].length);
        
        
        
        prevSong.push(currSong);
        console.log(prevSong);
        return currSong
    }

    let currSong = randomSong(playlist)

    audio.pause();
    audio.src = `${playlist[0][currSong]}`;
    audio.play();
  
    audio.addEventListener("ended", () => {
        audio.pause();
        audio.src = `${playlist[0][currSong]}`;
        audio.play();
    });
}