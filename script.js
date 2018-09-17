let sketchArea = 16;
let gridColor = "green";
let colorOpacity = 0;

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
		clearGrid();
		createGrid();
});

// COLORFUL button functionality 
//let colorful = document.querySelector("#colorful");
//	colorful.addEventListener("click", function () {
//		let diffColors = gridColor;
//		blackColor = "black";
//		createGrid();
//	}); 	

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

function resizeGrid(){
	let gridUpdate = window.prompt("Pick a grid size 1-100!", "16");
	let userChoice = parseInt(gridUpdate);
	console.log(userChoice);
	if (userChoice === null || userChoice === NaN || userChoice < 1 || userChoice > 100) {
		createGrid();
	} else {
		sketchArea = userChoice;
		console.log(sketchArea)
		createGrid();

	}
}


// 1) Colorful button adds random colors 
// 2) Classic button changes cell color to black without clearing grid
// 3) 
// 4) 
// 5) 

