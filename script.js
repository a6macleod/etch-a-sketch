let sketchArea = 16;
let gridColor = "black";
let colorOpacity = 0;


function divGrid (v) {
	let e = document.querySelector("#sketchOutline");
	for (i = 0; i < v; i++) {
		for (x = 1; x <= v; x++) {
			let cell = document.createElement("div");
			let gridSize = 600 / sketchArea;
			console.log(gridSize);
			cell.setAttribute("class", "cell");
			cell.setAttribute("style", "width: " + gridSize + "px; height: " + gridSize +"px; background-color: "
				+ gridColor + "; opacity: " + colorOpacity + ";");
			sketchOutline.appendChild(cell);
//			clearGrid(cell);
//			newGrid(cell);
		
			cell.addEventListener ("mouseover", function (event) {
				console.log('what?');
				event.target.style.opacity = parseFloat(event.target.style.opacity) + 0.1;
			});
		}
	}
}

function activateButtons() {
	document.querySelector(".classic").setAttribute("class", "classicActive");
	document.querySelector(".colorful").setAttribute("class", "colorfulActive");
	document.querySelector(".reset").setAttribute("class", "resetActive");
	document.querySelector(".start").setAttribute("class", "startInactive");
}


// Adds the RESET to the button
let re = document.querySelector("#reset");
re.addEventListener ("click", function (event) {
	console.log("reset clicked");
	colorOpacity = 0;
	let sketchOutline = document.querySelector("#sketchOutline");
	while (sketchOutline.firstChild) {
		sketchOutline.removeChild(sketchOutline.firstChild)
	};

//	resizeGrid();
});

//function clearOpacity() {
//	colorOpacity = 0;
//	let cellClear = document.querySelectorAll(".cell");//.style.opacity = "0";
//	console.log(cellClear.length);
//	cell.setAttribute("style", "opacity: " + colorOpacity + ";");
//}	
//	let gridUpdate = prompt("Pick a grid size 1-100!", "16");
//	if (gridUpdate === null || gridUpdate === NaN || gridUpdate < 1 || gridUpdate > 100) {
//		colorOpacity = 0;
//		divGrid(16);
//	} else {
//		let userChoice = parseFloat(gridUpdate);
//		divGrid(userChoice);

//	}



// 1) 
// 2) reset button clears the grid
// 3) classic and Colorful buttons turn on from grey
// 4) Reset button prompts up to allow the modification of the grid size
// 5) 

