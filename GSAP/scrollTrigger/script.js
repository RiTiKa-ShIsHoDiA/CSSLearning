gsap.to("#page1 #box, #page2 #box, #page3 #box",{
    rotate:360,
    delay:1,
    scale:1,
    duration:2,
    scrollTrigger:"#page2 #box"
})
gsap.from("#page2 #box",{
    rotate:720,
    delay:1,
    scale:0,
    duration:1,
    opacity:0,
    scrollTrigger:{
        trigger:"#page2 #box",
        scroller:"body",
        markers:true,
        start:"top 60%",
        end:"end 30%",
        scrub:5,
        pin:true,
    }
})

// gsap.from("#page2 h1",{
//     x:500,
//     opacity:0,
//     duration:2,
//     delay:1,
//     rotate:180,
//     scrollTrigger:{
//         trigger:"#page2 h1",
//         scroller:"body",
//         markers:true,

//     }
// })

// gsap.from("#page2 h2",{
//     x:-500,
//     opacity:0,
//     duration:2,
//     delay:1,
//     rotate:180,
//     scrollTrigger:{
//         trigger:"#page2 h2",
//         scroller:"body",
//     }
// })