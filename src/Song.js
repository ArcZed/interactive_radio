import lofi from './music/lofi.mp3';
import ambient from "./music/ambient.mp3"
import nature from "./music/nature.mp3"

export const playMusic = () => {

    const bar = document.querySelector(".bar");
    const meter = document.querySelector(".meter");
    const audio = document.querySelector("audio")

    console.log(typeof(lofi))
    

    let playlist = [];
    let genreList = [lofi, ambient, nature];

    //get meter pos
    let meterPos = parseInt(window.getComputedStyle(meter).getPropertyValue("left"));
    console.log(meterPos);

    if (meterPos > 0 && meterPos < bar.scrollWidth/3) {
        playlist.push(genreList[0]);
    }
    else if (meterPos >  bar.scrollWidth/3 && meterPos < bar.scrollWidth*2/3) {
        playlist.push(genreList[1]);
    }
    else {playlist.push(genreList[2]);}
    
    playlist.forEach((song, i) => {

        audio.pause();
        audio.src = `${playlist[i]}`;
        audio.play();
        console.log(audio)
    });
    setInterval(() => {
        console.log(audio.volume);
    }, 500);
    audio.addEventListener("ended", () => {
        audio.play();
    })
}