pricesYearly = [199.99, 249.99, 399.99];
pricesMonthly = [19.99, 24.99, 39.99];
toggle = document.getElementById("toggle");

toggle.addEventListener("change", function handleToggle() {
	prices = document.getElementsByClassName("price-value");
	pricesArray = Object.values(prices);
	if (toggle.checked) {
		pricesArray.map((price, index) => (price.innerHTML = pricesYearly[index]));
	} else {
		pricesArray.map((price, index) => (price.innerHTML = pricesMonthly[index]));
	}
});
