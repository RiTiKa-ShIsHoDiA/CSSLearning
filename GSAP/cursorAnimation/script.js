var cursor = document.querySelector(".parent");
var mainCursor = document.querySelector(".cursor");
var imgContainer = document.querySelector(".img")

cursor.addEventListener("mousemove",(args)=>{
   console.log("mouse enter", args);
   gsap.to(mainCursor,{
      x:args.x,
      y:args.y,
      duration:0.89,
      ease: "power3.out",
   })
})
imgContainer.addEventListener("mouseenter",(args)=>{
    console.log("mouse enter", args);
    mainCursor.innerHTML = "View More"
    gsap.to(mainCursor,{
       scale:3.5, 
       x:args.x,
       y:args.y,
       duration:0.89,
       ease: "power3.out",
       backgroundColor:"#e88e8e"
    })
 })

 imgContainer.addEventListener("mouseleave",(args)=>{
    console.log("mouse enter", args);
     mainCursor.innerHTML = ""
    gsap.to(mainCursor,{
        scale:1,
       x:8,
       y:9,
       duration:0.89,
       ease: "power3.out",
       backgroundColor:"#ffffff"
    })
 })