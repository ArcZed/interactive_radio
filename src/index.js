import styles from "./css/styles.css"
import screen_styles from "./css/Screen.css"
import intro_styles from './css/intro.css';
import background_styles from  './css/background.css'
import { createPage } from "./js/introPage";
import { createScreen } from "./js/Screen";

createPage().introPage.addEventListener("click", () => {
    createScreen();
});





