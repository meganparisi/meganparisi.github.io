/ Global counting variable to keep track of number of orders / 

var cartCount = 0;

/ functions to change the color of quantity buttons when clicked and add active status /  

function changeColor1() {
	var quant1 = document.getElementById("quant1");
	var quant3 = document.getElementById("quant3");
	var quant6 = document.getElementById("quant6");
	var quant12 = document.getElementById("quant12");
	quant1.style.backgroundColor = "rgba(255, 150, 129, .90)";
	quant3.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant6.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant12.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant1.classList.add("active");
	if (quant3.classList.contains("active")) {
		quant3.classList.remove("active");
	}
	if (quant6.classList.contains("active")) {
		quant6.classList.remove("active");
	}
	if (quant12.classList.contains("active")) {
		quant12.classList.remove("active");
	}
}

function changeColor3() {
	var quant1 = document.getElementById("quant1");
	var quant3 = document.getElementById("quant3");
	var quant6 = document.getElementById("quant6");
	var quant12 = document.getElementById("quant12");
	quant1.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant3.style.backgroundColor = "rgba(255, 150, 129, .90)";
	quant6.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant12.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant3.classList.add("active");
	if (quant1.classList.contains("active")) {
		quant1.classList.remove("active");
	}
	if (quant6.classList.contains("active")) {
		quant6.classList.remove("active");
	}
	if (quant12.classList.contains("active")) {
		quant12.classList.remove("active");
	}

}

function changeColor6() {
	var quant1 = document.getElementById("quant1");
	var quant3 = document.getElementById("quant3");
	var quant6 = document.getElementById("quant6");
	var quant12 = document.getElementById("quant12");
	quant1.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant3.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant6.style.backgroundColor = "rgba(255, 150, 129, .90)";
	quant12.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant6.classList.add("active");
	if (quant1.classList.contains("active")) {
		quant1.classList.remove("active");
	}
	if (quant3.classList.contains("active")) {
		quant3.classList.remove("active");
	}
	if (quant12.classList.contains("active")) {
		quant12.classList.remove("active");
	}
}

function changeColor12() {
	var quant1 = document.getElementById("quant1");
	var quant3 = document.getElementById("quant3");
	var quant6 = document.getElementById("quant6");
	var quant12 = document.getElementById("quant12");
	quant1.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant3.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant6.style.backgroundColor = "rgba(255, 150, 129, .50)";
	quant12.style.backgroundColor = "rgba(255, 150, 129, .90)";
	quant12.classList.add("active");
	if (quant1.classList.contains("active")) {
		quant1.classList.remove("active");
	}
	if (quant3.classList.contains("active")) {
		quant3.classList.remove("active");
	}
	if (quant6.classList.contains("active")) {
		quant6.classList.remove("active");
	}
}

/ functions to change the color of glaze buttons when clicked and add active status /  

function noGlazeColor(){
	var noGlaze = document.getElementById("none");
	var sugar = document.getElementById("sugar");
	var vanilla = document.getElementById("vanilla");
	var chocolate = document.getElementById("chocolate");
	noGlaze.style.backgroundColor = "rgba(255, 150, 129, .90)";
	sugar.style.backgroundColor = "rgba(255, 150, 129, .50)";
	vanilla.style.backgroundColor = "rgba(255, 150, 129, .50)";
	chocolate.style.backgroundColor = "rgba(255, 150, 129, .50)";
	noGlaze.classList.add("activeGlaze")
	if (sugar.classList.contains("activeGlaze")) {
		sugar.classList.remove("activeGlaze");
	}
	if (vanilla.classList.contains("activeGlaze")) {
		vanilla.classList.remove("activeGlaze");
	}
	if (chocolate.classList.contains("activeGlaze")) {
		chocolate.classList.remove("activeGlaze");
	}

}

function vanillaColor(){
	var noGlaze = document.getElementById("none");
	var sugar = document.getElementById("sugar");
	var vanilla = document.getElementById("vanilla");
	var chocolate = document.getElementById("chocolate");
	noGlaze.style.backgroundColor = "rgba(255, 150, 129, .50)";
	sugar.style.backgroundColor = "rgba(255, 150, 129, .50)";
	vanilla.style.backgroundColor = "rgba(255, 150, 129, .90)";
	chocolate.style.backgroundColor = "rgba(255, 150, 129, .50)";
	vanilla.classList.add("activeGlaze")
	if (sugar.classList.contains("activeGlaze")) {
		sugar.classList.remove("activeGlaze");
	}
	if (noGlaze.classList.contains("activeGlaze")) {
		noGlaze.classList.remove("activeGlaze");
	}
	if (chocolate.classList.contains("activeGlaze")) {
		chocolate.classList.remove("activeGlaze");
	}

}

function sugarColor(){
	var noGlaze = document.getElementById("none");
	var sugar = document.getElementById("sugar");
	var vanilla = document.getElementById("vanilla");
	var chocolate = document.getElementById("chocolate");
	noGlaze.style.backgroundColor = "rgba(255, 150, 129, .50)";
	sugar.style.backgroundColor = "rgba(255, 150, 129, .90)";
	vanilla.style.backgroundColor = "rgba(255, 150, 129, .50)";
	chocolate.style.backgroundColor = "rgba(255, 150, 129, .50)";
	sugar.classList.add("activeGlaze")
	if (vanilla.classList.contains("activeGlaze")) {
		vanilla.classList.remove("activeGlaze");
	}
	if (noGlaze.classList.contains("activeGlaze")) {
		noGlaze.classList.remove("activeGlaze");
	}
	if (chocolate.classList.contains("activeGlaze")) {
		chocolate.classList.remove("activeGlaze");
	}
}

function chocolateColor(){
	var noGlaze = document.getElementById("none");
	var sugar = document.getElementById("sugar");
	var vanilla = document.getElementById("vanilla");
	var chocolate = document.getElementById("chocolate");
	noGlaze.style.backgroundColor = "rgba(255, 150, 129, .50)";
	sugar.style.backgroundColor = "rgba(255, 150, 129, .50)";
	vanilla.style.backgroundColor = "rgba(255, 150, 129, .50)";
	chocolate.style.backgroundColor = "rgba(255, 150, 129, .90)";
	chocolate.classList.add("activeGlaze")
	if (vanilla.classList.contains("activeGlaze")) {
		vanilla.classList.remove("activeGlaze");
	}
	if (noGlaze.classList.contains("activeGlaze")) {
		noGlaze.classList.remove("activeGlaze");
	}
	if (sugar.classList.contains("activeGlaze")) {
		sugar.classList.remove("activeGlaze");
	}
}

/ checks for and returns active quantity button /  

function checkClickedQuant() {
	clickedQuantArr = document.getElementsByClassName("active");
	for (var i = 0; i < clickedQuantArr.length; i++) {
		var clickedQuant = clickedQuantArr[i].innerText;
	}
	return clickedQuant;
}

/ checks for and returns active glaze button /  

function checkClickedGlaze() {
	clickedGlazeArr = document.getElementsByClassName("activeGlaze");
	for (var i =0; i <clickedGlazeArr.length; i++) {
		var clickedGlaze = clickedGlazeArr[i].innerText;
	}
	return clickedGlaze;
}

/ creates alert when add to cart is clicked and updates count next to My Cart to reflect number of orders /  

function cartMessage() {
	clickedQuant = checkClickedQuant();
	clickedGlaze = checkClickedGlaze();
	if (clickedQuant == 1 && clickedGlaze == "None") {
		alert (clickedQuant + " roll with no glaze has been added to your cart!");
	} else if (clickedQuant == 1) {
		alert (clickedQuant + " " + clickedGlaze + " roll has been added to your cart!");
	} else if (clickedGlaze == "None"){
		alert (clickedQuant + " rolls with no glaze have been added to your cart!");
	} else {
		alert (clickedQuant + " " + clickedGlaze + " rolls have been added to your cart!");
	}
	cartCount = cartCount + 1;
	cart = document.getElementById("myCart").innerHTML = "My Cart " + "(" + cartCount + ")";
	console.log(cart);
	return cartCount;
	
}
