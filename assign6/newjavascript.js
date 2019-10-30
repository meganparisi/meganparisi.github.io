/ Global counting variable to keep track of number of orders / 

var cartCount = 0;
var purchases = [];
 

/ Functions to change color of clicked quantity button and add active status / 

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

/ Functions to change the color of glaze buttons when clicked and add active status /  

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

/ creates alert when add to cart is clicked /  

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


/ sets cart count next to My Cart on nav bar /  

function setCartCount() {
	var newPurchase = JSON.parse(localStorage.getItem("finalPurchase"));
	var purchaseLength = newPurchase.length;
	document.getElementById("myCart").innerHTML = "My Cart " + "(" + purchaseLength + ")";
}

function setOtherCartCounts() {
	count = JSON.parse(localStorage.getItem("newCartCount"));
	if (count !== null) {
		document.getElementById("myCart").innerHTML = "My Cart " + "(" + count + ")";
	}
}

/ creates cartItem class /  

function cartItem(item, quantity, glaze, price) {
	this.item = item;
	this.quantity = quantity;
	this.glaze = glaze;
	this.price = price;
} 

/ creates new object based on purchase choices and stores selected purchase in local storage / 

function addToCartOriginal() {
	quantity = Number(checkClickedQuant());
	glaze = checkClickedGlaze();
	price = quantity * 3;
	item = "Original Roll"; 
	var purchase = new cartItem(item, quantity, glaze, price);
	if (localStorage.getItem("finalPurchase") !== null) {
		purchases = JSON.parse(localStorage.getItem("finalPurchase"));
		purchases.push(purchase);
		localStorage.setItem("finalPurchase", JSON.stringify(purchases));
	}
	else {
		purchases = [purchase];
		localStorage.setItem("finalPurchase", JSON.stringify(purchases));
	}
	setCartCount();
}

/ loops through purchases in local storage and creates table to display info / 

function displayCart3() {
	var newPurchase = JSON.parse(localStorage.getItem("finalPurchase"));
	var purchaseLength = newPurchase.length;
	var table = document.getElementById("cartTable");
	rowIDs = []
	for (var i = 0; i < purchaseLength; i ++) {
		var row = document.createElement("tr");
		row.id = "row"+i
		rowIDs.push(i);
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
		var btn = document.createElement('submit');
		btn.type = "button";
		btn.className = "remove";
		btn.innerHTML = "Remove";
		btn.onclick = function() { removeFromStorage(); };
		cell5.appendChild(btn);
		row.appendChild(cell5);
	}
}

/ removes an order from the cart by removing from the table and from local storage  / 

function removeFromStorage() {
	var cell = event.target.parentNode;
	var row = cell.parentNode;
	var i = row.rowIndex; 
	purchases = JSON.parse(localStorage.getItem("finalPurchase"));
	purchases.splice(i-1,1);
	localStorage.setItem("finalPurchase", JSON.stringify(purchases));
	row.parentNode.removeChild(row);
	setCartCount();
}
