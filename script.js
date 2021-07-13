// highlight selected option in navigation
var header = document.getElementById("nav");
var btns = header.getElementsByClassName("btn");
for (var i = 0; i < btns.length; i++) {
	btns[i].addEventListener("click", function() {
		var current = document.getElementsByClassName("active");
		if (current.length > 0) {
			current[0].className = current[0].className.replace(" active", "");
		}
		this.className += " active";
	});
}

function sortNav() {
	var x = document.getElementById("nav");
	if (x.className === "navLinks") {
		x.className += " responsive";
	} else {
		x.className = "navLinks";
	}
}

//modal contact
var onOff = false;
function toggle(){
	var blur = document.getElementById('blur');
	blur.classList.toggle('active');
	var popup = document.getElementById('popup');
	popup.classList.toggle('active');
	if (!onOff) {
		document.body.style.overflow = "hidden";
		document.body.style.height = "100%";
		onOff = true;
	} else {
		document.body.style.overflow = "auto";
		document.body.style.height = "auto";
		onOff = false;
	}

}

// We select the element we want to target
var target = document.querySelector("footer");

var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

// Next we want to create a function that will be called when that element is intersected
function callback(entries, observer) {
// The callback will return an array of entries, even if you are only observing a single item
entries.forEach(entry => {
if (entry.isIntersecting) {
// Show button
scrollToTopBtn.classList.add("showBtn")
} else {
// Hide button
scrollToTopBtn.classList.remove("showBtn")
}
});
}

function scrollToTop() {
rootElement.scrollTo({
top: 0,
behavior: "smooth"
})
}
scrollToTopBtn.addEventListener("click", scrollToTop);

// Next we instantiate the observer with the function we created above. This takes an optional configuration
// object that we will use in the other examples.
let observer = new IntersectionObserver(callback);
// Finally start observing the target element
observer.observe(target);
