var tl = gsap.timeline();
tl.from("#part1 h2",{
    y:-20,
    opacity:0,
    duration:2,
})
tl.from("#part2 li",{
  y:-48,
  duration:1,
  opacity:0,
  stagger:1.4,
  color:"red"
})

tl.from("h1",{
    y:-50,
    duration:2,
    scale:0.7,
    opacity:0,

})