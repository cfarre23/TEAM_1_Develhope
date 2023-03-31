const buttons = document.querySelectorAll(".buttons");
const options = document.querySelectorAll(".options");
const images = document.querySelectorAll('.imgs');


buttons.forEach((button,index) =>{
    button.addEventListener("mouseover", function showOptions() {
        options[index].style.visibility = "visible";
    });
    button.addEventListener('mouseout',function hideOptions() {
        options[index].style.visibility = "hidden";})
} )
images.forEach((image, index) =>{
    image.addEventListener('mouseover', function todo() {
        if (index == 2){
            options[6].style.visibility = "visible";
            options[6].style.display = "flex";
        }
    })
    image.addEventListener('mouseout', function remove(){
        if (index == 2){
            options[6].style.visibility = "hidden";
            options[6].style.display = "none";
        }
    })
})




