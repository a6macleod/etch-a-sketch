let sketchArea = 16;
let gridColor = "green";
let colorOpacity = 0;

// BEGINNING GRID 16
createGrid();

// RESTART BUTTON CLICK
let gridStart = document.querySelector("#reset");
gridStart.addEventListener("click", function () { 
	clearGrid()
	resizeGrid(); 
	});

// CLASSIC button functionality 
let classic = document.querySelector("#classic");
	classic.addEventListener("click", function () {
		console.log("Classic Button clicked");
		gridColor = "black";
		let cell = document.querySelectorAll(".cell");
		cell.forEach((cell) => {
			cell.addEventListener("mouseover", function (event) {
				event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
				event.target.style.backgroundColor = "black";

			});
		})
});

// COLORFUL button functionality 
let colorful = document.querySelector("#colorful");
	colorful.addEventListener("click", function () {
//		gridColor = randomColor();
		let cell = document.querySelectorAll(".cell");
		cell.forEach((cell) => {
			cell.addEventListener("mouseover", function (event) {
				event.target.style.opacity = 1;
				event.target.style.backgroundColor = randomColor();
			})
		})
	}); 	

// CREAT NEW GRID
function createGrid (){
	let e = document.querySelector("#sketchOutline");
	let size = sketchArea
	for (i = 0; i < size; i++) {
		for (x = 1; x <= size; x++) {
			let cell = document.createElement("div");
			let cellSize = 600 / size;
			console.log(cellSize);
			cell.setAttribute("class", "cell");
			cell.setAttribute("style", "width: " + cellSize + "px; height: " + cellSize +
				"px; background-color: " + gridColor + "; opacity: " + colorOpacity + ";");
			sketchOutline.appendChild(cell);
//			hoverCell();
			cell.addEventListener ("mouseover", function (event) {
			console.log('what?');
			event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
			});
		}
	}
}

// CLEAR GRID
function clearGrid() {
	console.log("reset clicked");
	colorOpacity = 0;
	let sketchOutline = document.querySelector("#sketchOutline");
	while (sketchOutline.firstChild) {
		sketchOutline.removeChild(sketchOutline.firstChild)
	};
}

// RESIZE GRID
function resizeGrid(){
	let gridUpdate = window.prompt("Pick a grid size 1-100!", "16");
	let userChoice = parseInt(gridUpdate);
	console.log(userChoice);
	if (userChoice === null || userChoice === NaN || userChoice < 1 || userChoice > 100) {
		sketchArea = 16;
		createGrid();
	} else {
		sketchArea = userChoice;
		console.log(sketchArea)
		createGrid();
	}
}

function randomColor () {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() *16)];
	}
	return color;
}
// 1) Colorful button adds random colors 
// 2) 
// 3) From Prompt Null will resize grid back to 16
// 4) From Prompt NaN will resize grid back to 16
// 5) Colorful button changes cell color to colors without clearing the grid

