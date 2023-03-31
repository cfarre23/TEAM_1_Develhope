const buttons = document.querySelectorAll(".buttons");
const options = document.querySelectorAll(".options");



buttons.forEach((button,index) =>{
    button.addEventListener("mouseover", function showOptions() {
        options[index].style.visibility = "visible";
    });
    button.addEventListener('mouseout',function hideOptions() {
        options[index].style.visibility = "hidden";})
} )






