//let sketchArea = 16;
//let color = black;
//let opacity = 10%;


function divGrid (v) {
	let e = document.getElementById("sketchOutline");
	for (i = 0; i < v; i++) {
		let row = document.createElement("div");
		row.className = "row";
		for (x = 1; x <= v; x++) {
			let cell = document.createElement("div");
			cell.className = "gridSquare";
			row.appendChild(cell);
		}
		e.appendChild(row);
	}
}

function activateButtons() {
	document.getElementById("classicInactive").id = "classicActive";
	document.getElementById("colorfulInactive").id = "colorfulActive";
	document.getElementById("start").innerHTML = "Reset";
	document.getElementById("start").id = "reset";
}




// 1) start button changes to reset button
// 2) Create the initial 16x16 grid (start with having a border)
// 3) classic and Colorful buttons turn on from grey
// 4) Input box opens up to allow the modification of the grid size
// 5) reset button clears the colors but not the grid