import styles from "./Screen.css"
import {playMusic} from "./Song";

import click from "./music/click.mp3"

import volHigh from "./images/volume/volume-high.png"
import volLow from "./images/volume/volume-low.png"
import volOff from "./images/volume/volume-off.png"

function ScreenControl() {
    
    const container = document.createElement("div")
    const bar = document.createElement("div");
    const meter = document.createElement("div");
    const knob = document.createElement("div");
    const background = document.createElement("div");
    const audio = document.createElement("audio");
    const volumeBtn = document.createElement("div");

    content.appendChild(audio);
    content.appendChild(background);
    content.appendChild(container);
    container.appendChild(bar);
    container.appendChild(knob);
    container.appendChild(volumeBtn)
    bar.appendChild(meter);


    container.style.opacity = `${0}%`
    container.className = "container";
    setTimeout(() => {
        container.classList.add("fadeIn");
        container.style.opacity = `${100}%`
    }, 1000);
    
    bar.className = "bar";
    meter.className = "meter"
    knob.className = "knob";
    volumeBtn.className = "volBtn"
    background.className = "background";

    audio.volume = 0.8;

    const volumeControl = () => {

        let volValue = audio.volume;

        volumeBtn.addEventListener("hover", () => {
            //change the visibility of the bar
            //
        })

        volumeBtn.addEventListener("click", () => {
            if(audio.volume != 0){
                audio.volume = 0;
                console.log(volOff);
                volumeBtn.style.backgroundImage = `url(${volOff})`;
            }
            else{
                // volValue = value of the ball top
                volumeBtn.style.backgroundImage = `url(${volHigh})`;
                audio.volume = volValue;
                console.log(volValue);
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

        if(angle%20 === 0){
            let knobClick = new Audio(click);
            knobClick.play();
        }
        
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
    
    knob.addEventListener("click", () => {
        playMusic();
    });
    return {volumeControl}
}

export const createScreen = () => {
    ScreenControl().volumeControl()
}
