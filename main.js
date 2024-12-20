import { images } from "./images.js";

let maxScroll = document.body.scrollHeight - window.innerHeight;
const MAX_FRAMES = 150;
const main = document.querySelector("main");
const img = document.createElement("img");

window.addEventListener("resize", () => {
  maxScroll = document.body.scrollHeight - window.innerHeight;
});

img.src = `${images[0].p}`;
img.classList.add("img-moto");
main.appendChild(img);

const updateImages = (frames) => {
  img.src = `${images[frames].p}`;
};

window.addEventListener("scroll", () => {
  const scrollPosition = window.scrollY;

  const scrollFraction = scrollPosition / maxScroll;

  const frames = Math.round(scrollFraction * MAX_FRAMES);

  updateImages(frames);
  main.appendChild(img);
});
