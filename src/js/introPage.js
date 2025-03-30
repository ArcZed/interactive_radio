const content = document.querySelector("#content");
const container = document.querySelector(".container")

export const createPage = () => {
   
    const introPage = document.createElement("div");
    const dialog = document.createElement("dialog")
    const title = document.createElement("h1");
    const description = document.createElement("h3");
    const click = document.createElement("h4");

    introPage.className = "introPage";

    title.textContent = "RAD.IO";
    description.innerHTML = "Find Your Ideal <br> Study & Relaxation <br> Soundtrack.";
    click.textContent = "Click anywhere to start";

    content.appendChild(introPage)
    introPage.appendChild(dialog)
    dialog.appendChild(title);
    dialog.appendChild(description);
    dialog.appendChild(click);

    const blob1 = document.createElement("div");
    const blob2 = document.createElement("div");
    const blob3 = document.createElement("div");
    const blob4 = document.createElement("div");
    const blob5 = document.createElement("div");
    const blobContainer = document.createElement("div");

    introPage.appendChild(blobContainer);
    blobContainer.appendChild(blob1);
    blobContainer.appendChild(blob2);
    blobContainer.appendChild(blob3);
    blobContainer.appendChild(blob4);

    blobContainer.appendChild(blob5);


    blobContainer.className = "blobContainer";
    blob1.className = "blob1";
    blob2.className = "blob2";
    blob3.className = "blob3";
    blob4.className = "blob4";
    blob5.className = "blob5";

    container.style.opacity = `${0}%`

    console.log(container);

    let blobRadius = parseInt(blob5.offsetWidth);

    console.log(blobRadius);
    
    introPage.addEventListener("mousemove", (e) => {

        let mouseX = e.clientX
        let mouseY = e.clientY 

        blob5.style.transform = `translate(${mouseX}px, ${mouseY}px) translate(-50%,-50%)`
       
    })

    introPage.addEventListener("click", () => {
        introPage.classList.add("fadeOut");
        container.classList.add("fadeIn");
        container.style.opacity = `${100}%`

        introPage.addEventListener("animationend", () => {
            setTimeout(() => {
                content.removeChild(introPage);
            }, 2000);
        });
    });

    return {introPage}
}