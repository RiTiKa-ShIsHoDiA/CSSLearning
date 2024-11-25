// gsap.to("#box1",{
//     x:1000,
//     duration:2,
//     delay:1.5,
//     rotate:360,
//     backgroundColor:"blue",
//     borderRadius:"50%",
// })
// gsap.to("#box2",{
//     x:1000,
//     duration:3,
//     delay:3.5,
//     rotate:360,
//     backgroundColor:"green",
//     borderRadius:"50%",
// })
// gsap.to("#box3",{
//     x:1000,
//     duration:3,
//     delay:5,
//     rotate:360,
//     backgroundColor:"yellow",
//     borderRadius:"50%",
// })

var tl = gsap.timeline();
tl.to("#box1",{
    rotate:360,
    x:1000,
    duration:2,
    borderRadius:"50%",
})
tl.to("#box2",{
    rotate:360,
    x:1000,
    duration:2,
    borderRadius:"50%",
})
tl.to("#box3",{
    rotate:360,
    x:1000,
    duration:2,
    borderRadius:"50%",
})