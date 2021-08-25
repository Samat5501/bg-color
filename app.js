const colors = [
  "rgb(0, 128, 0)",
  "rgb(255, 0, 0)",
  "rgba(133, 122, 200)",
  "rgb(241, 83, 39)",
  "rgb(255, 255, 0)",
  "rgb(255, 192, 203)",
  "rgb(212, 50, 212)",
  "rgb(180, 236, 105)",
  "rgb(228, 179, 18)",
  "rgb(26, 109, 30)",
  "rgb(26, 109, 102)",
];

const btn = document.getElementById('btn');
const color = document.querySelector('.color');

btn.addEventListener('click', () => {
    
    const randomNumber = getRandomNumber();
    console.log();
    document.body.style.backgroundColor = colors[randomNumber];
    btn.style.backgroundColor = colors[randomNumber];
    color.textContent = colors[randomNumber];

});
function getRandomNumber() {
    return Math.floor(Math.random() * colors.length);
}

const htm1 = document.querySelector('.htm1');
const htm2 = document.querySelector('.htm2');
const htm3 = document.querySelector('.htm3');
htm1.addEventListener('click', () => {
    htm1.classList.add('topBlue');
    htm2.classList.remove('topBlue');
    htm3.classList.remove('topBlue');
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



