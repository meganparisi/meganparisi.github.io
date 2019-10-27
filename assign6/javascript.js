var quant1 = document.getElementById("quant1");
var quant3 = document.getElementById("quant3");
var quant6 = document.getElementById("quant6");
var quant12 = document.getElementById("quant12");
var allQuants = [quant1, quant3, quant6, quant12];

function changeColor(id) {
	var myQuant = document.getElementById(id);
	myQuant.style.backgroundColor = "rgba(255, 0, 0)";
}

function changeColorTwo() {
	var allQuants = [quant1, quant3, quant6, quant12];
	index = 0
	while (index < allQuants.length) { 
    	console.log(allQuants[index]); 
    	if (allQuants[index].clicked == true) {
    		allQuants[index].style.backgroundColor="green";
    	};
    	index++; 
    	console.log("made it here");
    };
}

function changeColorTakeThree() {
	console.log("Is this working??");
	var quant1 = document.getElementById("quant1");
	var quant3 = document.getElementById("quant3");
	var quant6 = document.getElementById("quant6");
	var quant12 = document.getElementById("quant12");
	if (quant1.clicked == true) {
		quant1.style.backgroundColor = "green"
	};
	if (quant3.clicked == true) {
		quant3.style.backgroundColor = "rgba(255, 150, 129, .90)"
	};
	if (quant6.clicked == true) {
		quant6.style.backgroundColor = "rgba(255, 150, 129, .90)"
	};
	if (quant12.clicked == true) {
		quant12.style.backgroundColor = "rgba(255, 150, 129, .90)"
	};

}

function changeColorTakeThree() {
	console.log("this one??");
	var quant1 = document.getElementById("quant1");
	quant1.style.backgroundColor = "rgba(255, 150, 129, .90)"
}
