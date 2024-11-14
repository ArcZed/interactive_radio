import styles from '../src/intro.css';

const content = document.querySelector("#content");

export const createPage = () => {
   
    const introPage =document.createElement("div");
    const title = document.createElement("h1");
    const description = document.createElement("h3");
    const click = document.createElement("h3");

    introPage.className = "introPage"

    title.textContent = "RAD.IO";
    description.textContent = "Choose a playlist for your studying and relaxing";
    click.textContent = "Click anywhere to start";

    content.appendChild(introPage)
    introPage.appendChild(title);
    introPage.appendChild(description);
    introPage.appendChild(click);

    introPage.addEventListener("click", () => {
        introPage.classList.add("fadeOut");
        setTimeout(() => {
            content.removeChild(introPage);
        }, 1000);
    });

    return {introPage}
}