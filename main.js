const box = document.querySelector(".box-face");
const lineBox = document.querySelector(".line-box");
let startMoved = "test";
let reverseMoved = 0;

const changeBox = gsap.timeline({ paused: true });

changeBox
  .to(".box-face", { y: -15, duration: 0.1 })
  .to(".box-face", { y: 15, duration: 0.1 })
  .to(".box-face", { y: 0, duration: 0.1 })
  .to(".pos", { opacity: 0, duration: 1 }, "<")
  .to(".pos", { visibility: "hidden" })
  .to(".box", { width: 800 })
  .to(".box-face", { width: 800 }, "<")
  .to(".box-face", { borderRadius: 0 }, "<")
  .to(".box-top", { visibility: "visible" })
  .to(".box", { translateZ: -25, rotateX: "-90deg", duration: 1.5 });

const reverseBox = gsap.timeline({ paused: true });

reverseBox
  .to(".box", { translateZ: 0, rotateX: 0, duration: 1.5 })
  .to(".box-top", { visibility: "hidden" })
  .to(".box-face", { width: 100 })
  .to(".box", { width: 100 }, "<")
  .to(".box-face", { borderRadius: "10px" }, "<")
  .to(".question", { visibility: "visible" })
  .to(".pos", { visibility: "visible" }, "<")
  .to(".question", { opacity: 1 })
  .to(".pos", { opacity: 1 }, "<");

box.addEventListener("click", () => {
  anime(startMoved, changeBox);
});

lineBox.addEventListener("click", () => {
  anime(reverseMoved, reverseBox);
});

function anime(s, animetion) {
  s ? animetion.restart() : animetion.play();
  s += 1;
}
