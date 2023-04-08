const buttons = document.querySelectorAll(".buttons");
const options = document.querySelectorAll(".options");
const images = document.querySelectorAll('.imgs');
const bnbText = document.querySelector('.bnb_word')


//Media query to remove a word
function good(){
if(window.innerWidth <= 1127){
    bnbText.innerHTML = 'BNB';
}
else {
    bnbText.innerHTML = 'BNB Smart Chain';
}
}
window.onload = good;
window.onresize = good;

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
        divs.addEventListener('mouseout', () => {
            hideBoth();
        });
    });


    // Function to hide the div
    function hideBoth() {
        // Only hide the div if both the button and the div are not currently being hovered over
        const buttonNotHovered = !button.matches(':hover');
        const divNotHovered = !divs.matches(':hover');

        if (buttonNotHovered && divNotHovered) {
            divs.style.visibility = 'hidden';
        }
    }

})
images.forEach((image, index) => {
    image.addEventListener('mouseover', function todo() {
        if (index === 2) {
            options[6].style.visibility = "visible";
            options[6].style.display = "flex";
            options[6].addEventListener("mouseover", function showOptions() {
                options[6].style.visibility = "visible";
            });
            options[5].style.display = 'flex';
            options[5].style.marginLeft = '-5rem';
        }
    })

    image.addEventListener('mouseout', function () {
        setTimeout(remove, 40);
        options[6].addEventListener('mouseout', () => {
            remove();
        });
    });

    function remove() {
        if (index === 2) {
            if (!image.matches(':hover') && !options[6].matches(':hover')) {
                options[6].style.visibility = 'hidden';
                options[6].style.display = "none";
            }
        }
        if (!bnbDiv.matches(':hover') && !options[5].matches(':hover')) {
            options[5].style.visibility = 'hidden';
            options[5].style.display = "none";
        }
    }
    const bnbDiv = document.querySelector('#div_bnb')
    bnbDiv.addEventListener('mouseover', function todo() {
            options[5].style.visibility = "visible";
            options[5].style.display = "flex";
            options[5].addEventListener("mouseover", function showOptions() {
                options[5].style.visibility = "visible";
            });
    })
    bnbDiv.addEventListener('mouseout', function () {
        setTimeout(remove, 40);
        options[5].addEventListener('mouseout', () => {
            remove();
        });
    });
});

