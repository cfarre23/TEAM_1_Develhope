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

function animateValue(obj, start, end, duration) {
    let startTimestamp = null;
    const step = (timestamp) => {
        if (!startTimestamp) startTimestamp = timestamp;
        const progress = Math.min((timestamp - startTimestamp) / duration, 1);
        obj.innerHTML = Math.floor(progress * (end - start) + start);
        if (progress < 1) {
            window.requestAnimationFrame(step);
        }
    };
    window.requestAnimationFrame(step);
}

const obj = document.getElementById("json");
const obj2 = document.getElementById("json2");
animateValue(obj, 855, 85, 1500);
animateValue(obj2, 718, 18 , 1500);

// IFO SECTION
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