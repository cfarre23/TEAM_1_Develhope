let buttons = document.querySelectorAll('.scale_borders');

buttons.forEach((button, index) =>{
    button.addEventListener('mouseover',()=>{
        button.style.display ='flex'
    })
}
)