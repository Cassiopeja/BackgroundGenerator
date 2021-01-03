let css = document.querySelector("h3");
let body = document.getElementById("gradient");
let inputLeft = document.querySelector(".input-left");
let inputRight = document.querySelector(".input-right");

let colorLeft = inputLeft.value;
let colorRight = inputRight.value;

let updateCss = (colorL, color) => {
    let style = `linear-gradient(to right, ${colorL}, ${colorRight})`
    css.innerText = "background: " + style;
    body.style.background = style;
}

inputLeft.addEventListener("input", (e) => {
    colorLeft = e.target.value;
    updateCss(colorLeft, colorRight);
});

inputRight.addEventListener("input", (e) => {
    colorRight = e.target.value;
    updateCss(colorLeft, colorRight);
});




