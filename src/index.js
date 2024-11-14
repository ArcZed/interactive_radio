import styles from "./styles.css"
import { createPage } from "./introPage";
import { createScreen } from "./Screen";

createPage().introPage.addEventListener("click", () => {
    createScreen();
})





