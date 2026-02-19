const bodyEl = document.querySelector("body");

bodyEl.addEventListener("mousemove", ()=>{
    const xPos= event.offsetX;
    const yPos = event.offsetY;
    const spanEl= document.createElement("span");
    bodyEl.appendChild(spanEl);
});