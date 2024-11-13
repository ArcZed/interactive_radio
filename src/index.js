import styles from "./styles.css"
import { createPage } from "./introPage";
import { createScreen } from "./Screen";
import { playMusic } from "./Song";

const content = document.querySelector("#content");

createPage().introPage.addEventListener("click", () => {
    
    createScreen().knob.addEventListener("click", () => {
        console.log("run1")
        playMusic();
    });
    
});


