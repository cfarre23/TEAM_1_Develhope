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
const EarnBtn = document.querySelector('#earnBtn')
const WinBtn = document.querySelector('#winBtn')
const NftBtn = document.querySelector('#nftBtn')
const DotsBtn = document.querySelector('#dotsBtn')
const Earn = document.querySelector('#earn')
const Win = document.querySelector('#win')
const Nft = document.querySelector('#nft')
const Dots = document.querySelector('#dots')


// Fred Homepage Section Starts
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

//Mobile site Navbar
EarnBtn.addEventListener('mouseover',function (){
    Earn.style.display = 'flex'
    Win.style.display = 'none'
    Nft.style.display = 'none'
    Dots.style.display = 'none'
})
EarnBtn.addEventListener('mouseout',function (){
        Earn.style.display = 'none'
        Win.style.display = 'none'
        Nft.style.display = 'none'
        Dots.style.display = 'none'
})
WinBtn.addEventListener('mouseover',function (){
    Earn.style.display = 'none'
    Win.style.display = 'flex'
    Nft.style.display = 'none'
    Dots.style.display = 'none'
})
WinBtn.addEventListener('mouseout',function (){
    Earn.style.display = 'none'
    Win.style.display = 'none'
    Nft.style.display = 'none'
    Dots.style.display = 'none'
})
NftBtn.addEventListener('mouseover',function (){
    Earn.style.display = 'none'
    Win.style.display = 'none'
    Nft.style.display = 'flex'
    Dots.style.display = 'none'
})
NftBtn.addEventListener('mouseout',function (){
    Earn.style.display = 'none'
    Win.style.display = 'none'
    Nft.style.display = 'none'
    Dots.style.display = 'none'
})
DotsBtn.addEventListener('mouseover',function (){
    Earn.style.display = 'none'
    Win.style.display = 'none'
    Nft.style.display = 'none'
    Dots.style.display = 'flex'
})
DotsBtn.addEventListener('mouseout',function (){
    Earn.style.display = 'none'
    Win.style.display = 'none'
    Nft.style.display = 'none'
    Dots.style.display = 'none'
})
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

globe.addEventListener('mouseover', function todo() {
    options[5].style.visibility = "visible";
    options[5].style.display = "flex";
    options[5].addEventListener("mouseover", function showOptions() {
        options6.style.visibility = "visible";
    });
})
globe.addEventListener('mouseout', function () {
    setTimeout(removes, 60);
    options[5].addEventListener('mouseout', () => {
        removes();
    });
});

function removes() {
    if (!globe.matches(':hover') && !options[5].matches(':hover')) {
        options[5].style.visibility = 'hidden';
        options[5].style.display = "none";

    }
}

function remove() {
    if (!bnbDiv.matches(':hover') && !options6.matches(':hover')) {
        options6.style.visibility = 'hidden';
        options6.style.display = "none";
    }
}


const bnbDiv = document.querySelector('#div_bnb')
bnbDiv.addEventListener('mouseover', function todo() {
    options6.style.visibility = "visible";
    options6.style.display = "flex";
    options6.addEventListener("mouseover", function showOptions() {
        options[5].style.visibility = "visible";
    });
})
bnbDiv.addEventListener('mouseout', function () {
    setTimeout(remove, 60);
    options6.addEventListener('mouseout', () => {
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

// Fred Homepage Section ends

const pageUp = document.querySelector('.page-up');

window.addEventListener('scroll', () => {
    if (window.pageYOffset > 450) {
        pageUp.style.display = 'flex';
        pageUp.style.visibility =  'visible'
    } else {
        pageUp.style.display = 'none';
    }
});



