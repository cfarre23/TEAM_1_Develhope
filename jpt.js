const button = document.getElementById("btn_trade");
const scaleBorders = document.querySelector(".scale_borders");
const options = document.querySelector(".options");

function showOptions() {
    options.style.visibility = "visible";
}

function hideOptions() {
    options.style.visibility = "hidden";
}

button.addEventListener("mouseover", showOptions);
scaleBorders.addEventListener("mouseover", showOptions);
button.addEventListener("mouseout", hideOptions);
scaleBorders.addEventListener("mouseout", hideOptions);
