const colors = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, "A", "B", "C", "D", "E", "F"];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");



btn.addEventListener("click", () => {
let randomColor = "#";
for (let i = 0; i < 8; i++) {
    randomColor += colors[getRandomNumber()];
    
}

  document.body.style.backgroundColor = randomColor;
  btn.style.backgroundColor = randomColor;
  color.textContent = randomColor;
});
function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}

const htm1 = document.querySelector(".htm1");
const htm2 = document.querySelector(".htm2");
const htm3 = document.querySelector(".htm3");
htm1.addEventListener("click", () => {
  htm1.classList.add("topBlue");
  htm2.classList.remove("topBlue");
  htm3.classList.remove("topBlue");
});

htm2.addEventListener("click", () => {
  htm2.classList.add("topBlue");
  htm1.classList.remove("topBlue");
  htm3.classList.remove("topBlue");
});

htm3.addEventListener("click", () => {
  htm3.classList.add("topBlue");
  htm2.classList.remove("topBlue");
  htm1.classList.remove("topBlue");
});

