// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var sitepages = document.querySelector(".site-pages");
// On click
hamburger.addEventListener("click", function() {
	// Toggle class "is-active"
  	hamburger.classList.toggle("is-active");
  	// Do something else, like open/close menu
	if (window.getComputedStyle(hamburger).display === "block") {

		if (hamburger.classList.contains("is-active")) {
			sitepages.style.display = "block";
		} else {
			sitepages.style.display = "none";
		}
	} else if (window.getComputedStyle(hamburger).display === "none") {
		sitepages.style.display = "block";
	}
});

// && window.getComputedStyle(sitepages).display === "none"
