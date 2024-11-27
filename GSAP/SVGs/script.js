var intialPaths = 'M 10 80 Q 89 89 1000 80';
var finalpath = 'M 10 80 Q 89 89 1000 80';
var string = document.querySelector(".string");
string.addEventListener("mousemove",(dets)=>{
    var currentpath = `M 10 80 Q ${dets.y} ${dets.y} 1000 80`;
    gsap.to("svg path",{
        duration:1.5,
        scrub:3,
        ease: "power3.out", // for smoothness  easing 
        attr:{d:currentpath}
    })
    console.log("dets",currentpath)
})
string.addEventListener("mouseleave",function(){
    gsap.to("svg path",{
        ease: "elastic.out(1,0.2)",
        duration:0.5,
        attr:{d:finalpath}
    })
    console.log("mouseleave",finalpath)

})