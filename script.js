let sketchArea = 36;
let gridColor = "black";
let colorOpacity = 0;


//let loadClassic = document.querySelector("#classic");
//	loadClassic.classList.toggle("classicActive");
//let loadColorful = document.querySelector("#colorful");
//	loadColorful.classList.toggle("colorfulActive");
//let loadStart = document.querySelector("#start");
//	loadStart.classList.toggle("resetActive");

let gridStart = document.querySelector("#start");
gridStart.addEventListener("click", function () { 
	console.log("startClicked");
	let e = document.querySelector("#sketchOutline");
	let size = sketchArea
	for (i = 0; i < size; i++) {
		for (x = 1; x <= size; x++) {
			let cell = document.createElement("div");
			let cellSize = 600 / size;
			console.log(cellSize);
			cell.setAttribute("class", "cell");
			cell.setAttribute("style", "width: " + cellSize + "px; height: " + cellSize +"px; background-color: "
				+ gridColor + "; opacity: " + colorOpacity + ";");
			sketchOutline.appendChild(cell);
			cell.addEventListener ("mouseover", function (event) {
				console.log('what?');
				event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
			});
		}
	}
	activateButtons();
});

function activateButtons() {
	let classic = document.querySelector("#classic");
		classic.classList.toggle("inactive");
		classic.classList.toggle("classicActive");
	let start = document.querySelector("#start");
		start.classList.toggle("start");
		start.classList.toggle("resetActive");
	let colorful = document.querySelector("#colorful");
		colorful.classList.toggle("inactive");
		colorful.classList.toggle("colorfulActive");
//	document.querySelector("#start").setAttribute("class", "startInactive");
	//let gridStart = 
	//	gridStart.innerHTML = "Reset";
}


// Adds the RESET functionality to reset button
//let re = document.querySelector("#reset");
//re.addEventListener ("click", function (event) {
//	console.log("reset clicked");
//	colorOpacity = 0;
//	let sketchOutline = document.querySelector("#sketchOutline");
//	while (sketchOutline.firstChild) {
//		sketchOutline.removeChild(sketchOutline.firstChild)
//	};
//
//	resizeGrid();
//});
//
//function resizeGrid(){
//	let gridUpdate = window.prompt("Pick a grid size 1-100!", "16");
//	let userChoice = parseInt(gridUpdate);
//	if (userChoice === null || userChoice === NaN || userChoice < 1 || userChoice > 100) {
////		colorOpacity = 0;
//
//		divGrid(16);
//	} else {
//		let userChoice = parseInt(gridUpdate);
//		userChoice = sketchArea;
//		divGrid(sketchArea);
//
//	}
//}


// 1) Reset button prompts to allow the modification of the grid size
// 2) Classic button changes the colors to black/white
// 3) Colorful button adds random colors 
// 4) Start button disapears
// 5) reset button appears after clicking start button

