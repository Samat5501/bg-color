const colors = [
  "red",
  "yellow",
  "green",
  "blue",
  "pink",
  "grey",
  "lightblue",
  "gold",
];

const btn = document.getElementById("btn");
const color = document.querySelector(".color");

btn.addEventListener("click", () => {
  const randomNumber = getRandomNumber();
  console.log();
  document.body.style.backgroundColor = colors[randomNumber];
  btn.style.backgroundColor = colors[randomNumber];
  color.textContent = colors[randomNumber];
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


