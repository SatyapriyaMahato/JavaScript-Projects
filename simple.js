const colors = ["Blue", "Green", "Yellow","Black","Pink","Purple"];
const btn = document.getElementById("btn");
const heartColor = document.getElementById("path4145");
const colorText = document.querySelector(".heartColor");

btn.addEventListener("click", function () {
  	const randomNumber = getRandomNumber();

	heartColor.style.fill = colors[randomNumber];
  	colorText.textContent = colors[randomNumber];
});



function getRandomNumber() {
  return Math.floor(Math.random() * colors.length);
}
let current = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'current';