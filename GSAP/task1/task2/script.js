gsap.to("#parent1",{
    x:1000,
    duration:2,
    delay:1,
    rotate:360,
    borderRadius:"50%",
    repeat:-1, //repeat animation 1 = 2 times  for -ve value it will run infinite 
    yoyo:true, // apply to then 


})
gsap.from("#parent2",{
    x:1000,
    duration:2,
    delay:1,
    backgroundColor:"green",
    opacity:0.5
})