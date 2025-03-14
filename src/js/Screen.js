
import {playMusic} from "./Song";

import click from "../music/click.mp3"

import volHigh from "../images/volume/volume-2.svg"
import volLow from "../images/volume/volume-1.svg"
import volOff from "../images/volume/volume.svg"

function ScreenControl() {

    const container = document.querySelector(".container");
    const bar = document.querySelector(".bar");
    const meter = document.querySelector(".meter");
    const knob = document.querySelector(".knob");
    const background = document.querySelector(".background");
    const audio = document.querySelector("audio");
    const volumeBtn = document.querySelector(".volBtn");

    // container.style.opacity = `${0}%`
    // container.className = "container";
    // setTimeout(() => {
    //     container.classList.add("fadeIn");
    //     container.style.opacity = `${100}%`
    // }, 1000);
    
    // volumeBtn.setAttribute("src", volHigh);    
    volumeBtn.innerHTML = `
        <svg color="white" width="60" height="60" viewBox="0 0 24 24" fill="none" 
        stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2">
        <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
    `
    audio.volume = 1;

    const createVolSlider = () => {
        
    }

    const volumeControl = () => {

        

        let volValue = audio.volume;

        volumeBtn.addEventListener("click", () => {
            console.log("run");
            if(audio.volume != 0) {
                audio.volume = 0;
               volumeBtn.innerHTML = `
                <svg width="60" height="60" color="white" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"/></svg>
                `
            }
            else {
                // volValue = value of the ball's top attr
                audio.volume = volValue;
                volumeBtn.innerHTML = `
                <svg color="white" width="60" height="60" viewBox="0 0 24 24" fill="none" 
                stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="feather feather-volume-2">
                <polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M19.07 4.93a10 10 0 0 1 0 14.14M15.54 8.46a5 5 0 0 1 0 7.07"></path></svg>
            `
            }
        });
    }

    const calcDeg = (e) => {
        
        const w = knob.clientWidth/2;
        const h = knob.clientHeight/2;

        const x = e.clientX - knob.offsetLeft;
        const y = e.clientY - knob.offsetTop;

        const deltaX = w -x;
        const deltaY = h - y;

        const rad = Math.atan2(deltaY, deltaX);

        const deg = rad * (180/Math.PI);

        return Math.floor(deg);
    }

    const moveBar = (start) => {

        let barMeter = start - 90;
        
        if (barMeter < 0){
            barMeter = 360 + barMeter;
        }
        barMeter = ((bar.offsetWidth - meter.offsetWidth)*barMeter)/360; 
        meter.style.left = `${barMeter}px`;

    }

    const rotate = (e) => {
        let angle = calcDeg(e) - 90;
        knob.style.transform = `rotate(${angle}deg)`;
        moveBar(calcDeg(e));

        // if(angle%20 === 0){
        //     let knobClick = new Audio(click);
        //     knobClick.play();
        // }
        
    }

    
    knob.addEventListener("mousedown", () => {

        window.addEventListener("mousemove", rotate);
        knob.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", rotate);
        });
        window.addEventListener("mouseup", () => {
            window.removeEventListener("mousemove", rotate);
        });
    });
    
    knob.addEventListener("mousedown", () => {

        knob.addEventListener("mouseup", () => {

            playMusic();
        });
    });
    return {volumeControl}
}

export const createScreen = () => {

    ScreenControl().volumeControl();
}
