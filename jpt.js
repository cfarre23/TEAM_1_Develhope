const buttons = document.querySelectorAll(".buttons");
const options = document.querySelectorAll(".options");
const images = document.querySelectorAll('.imgs');


buttons.forEach((button,index) =>{
    let timeoutId;
    const divs = options[index]
    button.addEventListener("mouseover", function showOptions() {
        options[index].style.visibility = "visible";
        divs.addEventListener("mouseover", function showOptions() {
            options[index].style.visibility = "visible";
        });
    });

//
    button.addEventListener('mouseout', () => {
        timeoutId = setTimeout(() => {
            hideBoth();
        }, 40);
    });

    divs.addEventListener('mouseout', () => {
            hideBoth();
    });

    // Function to hide the div
    function hideBoth() {
        // Hide the div only if both the button and the div are not being hovered over
        if (!button.matches(':hover') && !divs.matches(':hover')) {
            divs.style.visibility = 'hidden';
        }
    }
})
images.forEach((image, index) =>{
    image.addEventListener('mouseover', function todo() {
        if (index == 2){
            options[6].style.visibility = "visible";
            options[6].style.display = "flex";
            options[5].style.display = 'flex'
        }
    })
    image.addEventListener('mouseout', function remove(){
        if (index == 2){
            options[6].style.visibility = "hidden";
            options[6].style.display = "none";
        }
    })
});




