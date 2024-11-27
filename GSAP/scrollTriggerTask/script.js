gsap.to(".page2 h1",{
    transform:"translateX(-140%)",
    duration:3,
    scrollTrigger:{
        trigger:".page2",
        scroller:"body",
        markers:true,
        scrub:5,
        pin:true,
        start:"top 0%",
        end:"top 50%"

    }
})