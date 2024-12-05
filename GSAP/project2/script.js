//break the word due to add span inside each word
const breakText = () => {
  var h1Ref = document.querySelector("h1");
  var h1Text = h1Ref.textContent;
  var splittedText = h1Text.split("");
  var clutter = "";
  var mid = Math.floor(splittedText.length / 2);

  splittedText.forEach((element, idx) => {
    idx < mid
      ? (clutter += `<span class = "first_part">${element}</span>`)
      : (clutter += `<span class = "second_part">${element}</span>`);
  });

  h1Ref.innerHTML = clutter;
};
breakText();

gsap.from("h1 .first_part", {
  y: 40,
  duration: 0.75,
  opacity: 0,
  delay: 0.5,
  stagger: 0.3,
});
gsap.from("h1 .second_part", {
  y: 40,
  duration: 0.75,
  opacity: 0,
  delay: 0.5,
  stagger: -0.3,
});
