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
const viewBtn = document.querySelector(".contactBtn"),
popup = document.querySelector(".popup"),
close = popup.querySelector(".close");
viewBtn.onclick = ()=>{
	popup.classList.toggle("show");
}
close.onclick = ()=>{
	viewBtn.click();
}

//scroll to top
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
	// Do something on scroll
	var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
	if ((rootElement.scrollTop / scrollTotal ) > 0.80) {
		// Show button
		scrollToTopBtn.classList.add("showBtn")
	} else {
		// Hide button
		scrollToTopBtn.classList.remove("showBtn")
	}
}

function scrollToTop() {
	// Scroll to top logic
	rootElement.scrollTo({
		top: 0,
		behavior: "smooth"
	})
}
scrollToTopBtn.addEventListener("click", scrollToTop)
document.addEventListener("scroll", handleScroll)
