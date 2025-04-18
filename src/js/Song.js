
import lofi1 from '../music/lofi/lofi1.mp3';
import lofi2 from '../music/lofi/lofi2.mp3';
import lofi3 from '../music/lofi/lofi3.mp3';
import lofi4 from '../music/lofi/lofi4.mp3';
import lofi5 from '../music/lofi/lofi5.mp3';

import ambient1 from "../music/ambient/green-to-blue.mp3";
import ambient2 from "../music/ambient/hope-to-see-you-again.mp3";
import ambient3 from "../music/ambient/overthinking.mp3";
import ambient4 from "../music/ambient/farewell.mp3";
import ambient5 from "../music/ambient/hope-will-never-fade.mp3";

import rain from "../music/nature/thunder-rain.mp3";
import forest from "../music/nature/forest.mp3"

function GenreGenerator() {
    class Genre {
        constructor(name, ...song) {
            this.name = name;
            this.song = song;
        }
    }

    const createGenre = (genre, ...song) => {
        let newGenre = new Genre(genre, ...song);
        return newGenre;
    }
    return {createGenre}
}

function SongLibrary() {

    let playlist = [];

    let lofi = "lofi";
    let ambient = "ambient";
    let nature = "nature";

    lofi = GenreGenerator().createGenre(lofi, lofi1, lofi2, lofi3, lofi4, lofi5);
    ambient = GenreGenerator().createGenre(ambient, ambient1, ambient2, ambient3, ambient4, ambient5);
    nature = GenreGenerator().createGenre(nature, rain, forest);

    let genreList = [lofi , ambient, nature];

    return {playlist, genreList}
}

function MusicManager() {

    const bar = document.querySelector(".bar");
    const meter = document.querySelector(".meter");
    const audio = document.querySelector("audio");
    
    let playlist = SongLibrary().playlist;
    let genreList = SongLibrary().genreList;

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

        if (audio.src != ""){
            audio.src = '';
            audio.currentTime = 0;
            audio.pause();
        }

        audio.src = `${list[randomSong]}`;
        audio.play();
        list.splice(randomSong, 1);
    }

    const playSongList = () => {

        calcMeterPos();
        playRandomSong(playlist[0]);

        audio.addEventListener("ended", () => {

            if (typeof(playlist[0][0]) === "undefined"){
                playlist = SongLibrary().playlist;
                genreList = SongLibrary().genreList;
                console.log(playlist, genreList);
                calcMeterPos();
                playRandomSong(playlist[0]);
            }
            else{playRandomSong(playlist[0]);}
        });
    }
    return {playSongList}
}

export const playMusic = () => {
    MusicManager().playSongList();
} 