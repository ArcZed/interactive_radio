
import lofi1 from './music/lofi/lofi1.mp3';
import lofi2 from './music/lofi/lofi2.mp3';
import lofi3 from './music/lofi/lofi3.mp3';
import lofi4 from './music/lofi/lofi4.mp3';
import lofi5 from './music/lofi/lofi5.mp3';
// import lofi6 from './music/lofi/lofi6.mp3';

import ambient from "./music/ambient/ambient.mp3"
import nature1 from "./music/nature/nature.mp3"

class Genre {
    constructor(name, ...song) {
        this.name = name;
        this.song = song;
    }
}

const createLofi = () => {
    let lofi = new Genre("lofi", lofi1, lofi2, lofi3, lofi4, lofi5)
    return lofi 
}

const createNature = () => {
    let nature = new Genre("nature", nature1);
    return nature
}

export const playMusic = () => {

    const bar = document.querySelector(".bar");
    const meter = document.querySelector(".meter");
    const audio = document.querySelector("audio")    

    let playlist = [];

    let lofi = createLofi();
    let nature = createNature();

    let genreList = [lofi , ambient, nature];
    console.log(genreList)
    //get meter pos
    const calcMeterPos = () => {
        let meterPos = parseInt(window.getComputedStyle(meter).getPropertyValue("left"));

        if (meterPos > 0 && meterPos < bar.scrollWidth/3) {
            playlist.push(genreList[0].song);
        }
        else if (meterPos >  bar.scrollWidth/3 && meterPos < bar.scrollWidth*2/3) {
            playlist.push(genreList[1].song);
        }
        else {playlist.push(genreList[2].song);}
    }

    const playRandomSong = (list) => {
        
        let randomSong = Math.floor(Math.random()*list.length);
        
        console.log(randomSong, lofi.song[randomSong]);

        if (audio.src != ""){
            audio.src = '';
            audio.pause();
            audio.currentTime = 0;
        }

        audio.src = `${list[randomSong]}`;
        
        audio.play();

        list.splice(randomSong, 1);
    }

    calcMeterPos();
    playRandomSong(playlist[0]);

    audio.addEventListener("ended", () => {

        
        if (typeof(playlist[0][0]) === "undefined"){
            
            lofi = createLofi();
            nature = createNature();
            genreList = [lofi , ambient, nature];
            playlist.shift();
            calcMeterPos();
            console.log(playlist)
            playRandomSong(playlist[0]);

        }
        else{playRandomSong(playlist[0]);}
    });
}