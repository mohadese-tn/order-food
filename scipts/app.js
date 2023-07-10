// -----Select Elements
let $=document
let preload=$.querySelector('.preloader');
let header=$.querySelector('.header');
let images=$.querySelector('.images');
const horizontalScroll =$.querySelector('.box-scroll');
let cards=$.querySelectorAll('.card');
let pop=$.querySelectorAll(".pop");
const loginForm = document.getElementById("login-form");
const backDrop = document.querySelector("#backdrop");
let scrollTopbutton = document.getElementById("myBtn");



// --------------for preload
window.addEventListener('load',()=>{
    preload.classList = 'preloader hidden' ;   
})

// ---------------mouse move effect in section 1
const sensivity=100;
images.style.marginTop='-384px'
header.addEventListener('mousemove',(event)=>{
    
    console.log(event.clientX);
    const x=event.clientX/sensivity;
    const y=event.clientY/sensivity;
    
    images.style.transform=`translate(${x}px,${y}px)`;
})

// -----------------horizontal scrolling
horizontalScroll.addEventListener('wheel', (e)=> {
    const race = 650; // How many pixels to scroll

    if (e.deltaY > 0) {// Scroll right
        horizontalScroll.scrollLeft += race;
        e.preventDefault();
    }
        
    else {// Scroll left
        horizontalScroll.scrollLeft -= race;
		e.preventDefault();
    } 

});

// ---------------TOP BTN
// When the user scrolls down 20px from the top of the document, show the button
window.addEventListener("scroll",()=>{
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
        scrollTopbutton.style.display = "block";
    } else {
        scrollTopbutton.style.display = "none";
}})
// When the user clicks on the button, scroll to the top of the document
scrollTopbutton.addEventListener('click', ()=>{
    document.body.scrollTop = 0; 
    document.documentElement.scrollTop = 0;
})



// ------------------pop up order
pop.forEach((popItem)=>{
    popItem.addEventListener("click", (e)=>{
        e.preventDefault();
        console.log(popItem);
        loginForm.classList.toggle("visible");
        backDrop.classList.toggle("visible");
    })  
})
backDrop.addEventListener("click", ()=>{
    loginForm.classList.toggle("visible");
    backDrop.classList.toggle("visible");
})

