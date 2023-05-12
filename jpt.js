const buttons = document.querySelectorAll(".buttons");
const options = document.querySelectorAll(".options");
const images = document.querySelectorAll('.imgs');
const bnbText = document.getElementById('bnb_word')
const walletText = document.querySelector('.btn_cwallect')
const globe = document.querySelector('#img_globe')
const toggleButton = document.querySelector(".toggle")
const options6 = document.getElementById('options6')
const ifoPAGE = document.querySelector('.ifoMain')
const bodyDisappear = document.querySelector('.bodyDisappear')
const btnDetails = document.querySelectorAll('.btnDetails')
const arrow = document.querySelectorAll('.darrow')
const heheDetails = document.querySelectorAll('.hehe')
const smallerAds = document.querySelectorAll('.adSmall')
const ifoPageButton = document.querySelector('#ifoPAGEBtn') 

// Fred
//Media query to remove a word
function good() {
    if (window.matchMedia("(max-width: 1127px)").matches) {
        walletText.textContent ='Connect'
        bnbText.textContent = 'BNB';
       
    } else {
        walletText.innerHTML ='Connect Wallet'
        bnbText.innerHTML = 'BNB Smart Chain';
    }
    if (window.matchMedia("(max-width: 767px)").matches) {
        bnbText.innerHTML = '';
        images.style.width = '20px'
    } 
}

window.onload = good;
window.onresize = good;

.
buttons.forEach((button, index) => {
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
/* globe.addEventListener('mouseover', function todo() {
    options6.style.visibility = "visible";
    options6.style.display = "flex";
    options6.addEventListener("mouseover", function showOptions() {
        options6.style.visibility = "visible";
    });
})
globe.addEventListener('mouseout', function () {
    setTimeout(removes, 60);
    options6.addEventListener('mouseout', () => {
        removes();
    });
});

function removes() {
    if (!globe.matches(':hover') && !options6.matches(':hover')) {
        options6.style.visibility = 'hidden';
        options6.style.display = "none";

    }
}

function remove() {
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
    setTimeout(remove, 60);
    options[5].addEventListener('mouseout', () => {
        remove();
    });
});
toggleButton.addEventListener("change", () => {
    if (toggleButton.checked){
        toggleButton.style.transform = "translate(100%)"
        document.querySelector('body').style.background='white'

    }
    else{
        toggleButton.style.transform = "translate(-100%)"
        document.querySelector('body').style.background='#08060b'
    }
})
*/
// Fred ends

const pageUp = document.querySelector('.page-up');

window.addEventListener('scroll', () => {
  if (window.pageYOffset > 450) {
    pageUp.style.display = 'flex';
    pageUp.style.visibility =  'visible'
  } else {
    pageUp.style.display = 'none';
  }
});

// IFO SECTION
ifoPageButton.addEventListener('click',function (){
    window.location.href = "IFO.html";
})
btnDetails.forEach(function (button,index){
    var clicked = true
    //changes Details to hide when clicked and arrow rotates 180deg
    button.addEventListener('click',function (){
        if (clicked) {
            if (index === 0) {
                heheDetails[0].innerText = 'hide'
                arrow[0].style.transform = 'rotate(180deg)'
                clicked = false
            }
            if (index === 1) {
                heheDetails[1].innerText = 'hide'
                arrow[1].style.transform = 'rotate(180deg)'
                smallerAds[0].style.setProperty('display','block')
                clicked = false
            }
            if (index === 2) {
                heheDetails[2].innerText = 'hide'
                arrow[2].style.transform = 'rotate(180deg)'
                smallerAds[1].style.setProperty('display','block')
                clicked = false
            }
            if (index === 3) {
                heheDetails[3].innerText = 'hide'
                arrow[3].style.transform = 'rotate(180deg)'
                smallerAds[2].style.setProperty('display','block')
                clicked = false
            }
            if (index === 4) {
                heheDetails[4].innerText = 'hide'
                arrow[4].style.transform = 'rotate(180deg)'
                smallerAds[3].style.setProperty('display','block')
                clicked = false
            }
            if (index === 5) {
                heheDetails[5].innerText = 'hide'
                arrow[5].style.transform = 'rotate(180deg)'
                smallerAds[4].style.setProperty('display','block')
                clicked = false
            }
            if (index === 6) {
                heheDetails[6].innerText = 'hide'
                arrow[6].style.transform = 'rotate(180deg)'
                smallerAds[5].style.setProperty('display','block')
                clicked = false
            }
        }
        else if (!clicked){
            if (index === 0){
                arrow[0].style.transform = 'rotate(0)'
                heheDetails[0].innerText = 'Details'
                clicked = true
            }
            if (index === 1){
                arrow[1].style.transform = 'rotate(0)'
                smallerAds[0].style.removeProperty('display')
                heheDetails[1].innerText = 'Details'
                clicked = true
            }
            if (index === 2){
                arrow[2].style.transform = 'rotate(0)'
                smallerAds[1].style.removeProperty('display')
                heheDetails[2].innerText = 'Details'
                clicked = true
            }
            if (index === 3){
                arrow[3].style.transform = 'rotate(0)'
                smallerAds[2].style.removeProperty('display')
                heheDetails[3].innerText = 'Details'
                clicked = true
            }
            if (index === 4){
                arrow[4].style.transform = 'rotate(0)'
                smallerAds[3].style.removeProperty('display')
                heheDetails[4].innerText = 'Details'
                clicked = true
            }
            if (index === 5){
                arrow[5].style.transform = 'rotate(0)'
                smallerAds[4].style.removeProperty('display')
                heheDetails[5].innerText = 'Details'
                clicked = true
            }
            if (index === 6){
                arrow[6].style.transform = 'rotate(0)'
                smallerAds[5].style.removeProperty('display')
                heheDetails[6].innerText = 'Details'
                clicked = true
            }
            if (index === 7){
                arrow[7].style.transform = 'rotate(0)'
                smallerAds[6].style.removeProperty('display')
                heheDetails[7].innerText = 'Details'
                clicked = true
            }
        }
           
    })
})
//IFO SECTION ENDS
   

