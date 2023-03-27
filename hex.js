const chars = ["0","1","2","3","4","5","6","7","8","9","A","B","C","D","E","F"];
const btn = document.getElementById("btn");
const heartColor = document.getElementById("path4145");
const colorText = document.querySelector(".heartColor");

btn.addEventListener("click", function () {
  	
  	let hex = "#";
  	for(let i=0; i<6; i++){
  		const randomNumber = getRandomNumber();
  		hex+=chars[randomNumber];
  	}


		heartColor.style.fill = hex;
  	colorText.textContent = hex;
});



function getRandomNumber() {
  return Math.floor(Math.random() * chars.length);
}
let current = 0;
for (var i = 0; i < document.links.length; i++) {
    if (document.links[i].href === document.URL) {
        current = i;
    }
}
document.links[current].className = 'current';