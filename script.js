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
			cell.setAttribute("class", "cell");
			cell.setAttribute("style", "width: " + cellSize + "px; height: " + cellSize +
				"px; background-color: " + gridColor + "; opacity: " + colorOpacity + ";");
			sketchOutline.appendChild(cell);
			cell.addEventListener ("mouseover", function (event) {
			event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
			});
		}
	}
}

// CLEAR GRID
function clearGrid() {
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
	if (userChoice === null ||  isNaN(userChoice) || userChoice < 1 || userChoice > 100) {
		sketchArea = 16;
		createGrid();
	} else {
		sketchArea = userChoice;
		createGrid();
	}
}

function randomColor () {
	let letters = "0123456789ABCDEF";
	let color = "#";
	for (i = 0; i < 6; i++) {
		color += letters[Math.floor(Math.random() * 16)];
	}
	return color;
}
