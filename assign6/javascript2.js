/ Global counting variable to keep track of number of orders / 

var cartCount = 0;
var purchases = [];
 

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

function setButtonStatus() {
	buttons = document.getElementsByClassName("remove");
	console.log("buttons");
	var buttonsLength = buttons.length;
	for (var i = 0; i < buttonsLength; i++) {
		buttons[i].onclick = removeFromCart(this.id);
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
	
}

function setCartCount() {
	var table = document.getElementById("cartTable");
	for (var i = 1, row; row=table.rows[i]; i++) {
		cartCount = cartCount + 1;
	}
	document.getElementById("myCart").innerHTML = "My Cart " + "(" + cartCount + ")";
	localStorage.setItem("newCartCount", JSON.stringify(cartCount));
}

function setOtherCartCounts() {
	console.log("this happened");
	count = JSON.parse(localStorage.getItem("newCartCount"));
	document.getElementById("myCart").innerHTML = "My Cart " + "(" + count + ")";
}

function cartItem(item, quantity, glaze, price) {
	this.item = item;
	this.quantity = quantity;
	this.glaze = glaze;
	this.price = price;
} 

function addToCartOriginal() {
	quantity = Number(checkClickedQuant());
	glaze = checkClickedGlaze();
	price = quantity * 3;
	item = "Original Roll"; 
	var purchase = new cartItem(item, quantity, glaze, price);
	if (localStorage.getItem("finalPurchase") !== 'null') {
		purchases = JSON.parse(localStorage.getItem("finalPurchase"));
		purchases.push(purchase);
		localStorage.setItem("finalPurchase", JSON.stringify(purchases));
	}
	else {
		purchases.push(purchase);
		localStorage.setItem("finalPurchase", JSON.stringify(purchases));
	}
}

function displayCart3() {
	var newPurchase = JSON.parse(localStorage.getItem("finalPurchase"));
	var purchaseLength = newPurchase.length;
	var table = document.getElementById("cartTable");
	for (var i = 0; i < purchaseLength; i ++) {
		var row = document.createElement("tr");
		row.id = "row"+i
		table.appendChild(row);
		var cell1 = document.createElement("td");
		var node1 = document.createTextNode(newPurchase[i].item);
		cell1.appendChild(node1);
		row.appendChild(cell1);
		var cell2 = document.createElement("td");
		var node2 = document.createTextNode(newPurchase[i].quantity);
		cell2.appendChild(node2);
		row.appendChild(cell2);
		var cell3 = document.createElement("td");
		var node3 = document.createTextNode(newPurchase[i].glaze);
		cell3.appendChild(node3);
		row.appendChild(cell3);
		var cell4 = document.createElement("td");
		var node4 = document.createTextNode("$"+newPurchase[i].price);
		cell4.appendChild(node4);
		row.appendChild(cell4);
		var cell5 = document.createElement("td");
		var btn = document.createElement('input');
		btn.type = "button";
		btn.className = "remove";
		btn.onclick = function() { removeFromStorage(); };
		console.log(newPurchase[i]);
		cell5.appendChild(btn);
		row.appendChild(cell5);
	}
}

function removeFromStorage() {
	purchases = JSON.parse(localStorage.getItem("finalPurchase"));
	purchases.pop();
	localStorage.setItem("finalPurchase", JSON.stringify(purchases));
}


function removeFromCart(givenId) {
	console.log('here');
	var table = document.getElementById("cartTable");
	for (var i = 0, row; row=table.rows[i]; i++) {
		console.log(row.id+"ROWID");
		console.log(givenId+"GIVENID");
		if (row.id == givenId) {
			console.log("matching ids");
			row.parentNode.removeChild(row);
			console.log('here');
		}
	}

}