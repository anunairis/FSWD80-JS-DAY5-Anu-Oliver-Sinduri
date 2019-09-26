function printShopping() {
	var i = 0;
	var shopping = document.getElementById('shoppingItems');
	var text = ""
	for (i=0; i<items.length; i++) {
		text += "<img src=" + items[i].imgs + " style = 'width=100px; height=100px;'>";
		text += "<h2>" + items[i].name + "</h2>";
		text += "<h3>" + items[i].price + "</h3>";
	}
	shopping.innerHTML = text;
}

printShopping();


