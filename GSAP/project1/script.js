var tl = gsap.timeline();
tl.to(".nav-bars",{
    right:"0%",
    duration:1,
})
tl.from(".nav-bars h1,.nav-bars i",{
    opacity:0,
    x:150,
    duration:1.5,
    stagger:1,
    ease: "power1.in",
    scrub:1
})

tl.pause();

var navbarOpenElement = document.querySelector(".child i");
var navbarCloseElement = document.querySelector(".nav-bars i");



navbarOpenElement.addEventListener("click",()=>{
    tl.play();
})

navbarCloseElement.addEventListener("click",()=>{
    tl.reverse();
})
