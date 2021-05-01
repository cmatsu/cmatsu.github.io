filterSelection("all")
function filterSelection(c) {
	var x, i;
	x = document.getElementsByClassName("filterColumn");
	if (c == "all") c = "";
	for (i = 0; i < x.length; i++) {
		removeClass(x[i], "show");
		if (x[i].className.indexOf(c) > -1) addClass(x[i], "show");
	}
}

function addClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		if (arr1.indexOf(arr2[i]) == -1) {element.className += " " + arr2[i];}
	}
}

function removeClass(element, name) {
	var i, arr1, arr2;
	arr1 = element.className.split(" ");
	arr2 = name.split(" ");
	for (i = 0; i < arr2.length; i++) {
		while (arr1.indexOf(arr2[i]) > -1) {
			arr1.splice(arr1.indexOf(arr2[i]), 1);
		}
	}
	element.className = arr1.join(" ");
}

// Add active class to the current button (highlight it)
var filterBtnContainer = document.getElementById("filterBtnContainer");
var filterBtns = filterBtnContainer.getElementsByClassName("filterBtn");
for (var i = 0; i < filterBtns.length; i++) {
	filterBtns[i].addEventListener("click", function(){
		var current = filterBtnContainer.getElementsByClassName("active");
		if (current.length > 0) {
			current[0].className = current[0].className.replace(" active", "");
		}
		this.className += " active";
	});
}
