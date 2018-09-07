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
				event.target.style.opacity = (+ 0.5);
			});
		}
	}
}

function activateButtons() {
	document.getElementById("classicInactive").id = "classicActive";
	document.getElementById("colorfulInactive").id = "colorfulActive";
	document.getElementById("start").innerHTML = "Reset";
	document.getElementById("start").id = "reset";
}




// 1) start button changes to reset button
// 2) 
// 3) classic and Colorful buttons turn on from grey
// 4) Reset button prompts up to allow the modification of the grid size
// 5) reset button clears the colors but not the grid