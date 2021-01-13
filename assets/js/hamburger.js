// Look for .hamburger
var hamburger = document.querySelector(".hamburger");
var sitelinks = document.querySelector(".site-links");
// On click
hamburger.addEventListener("click", function() {
	// Toggle class "is-active"
  	hamburger.classList.toggle("is-active");
  	// Do something else, like open/close menu
	if (window.getComputedStyle(hamburger).display === "block") {

		if (hamburger.classList.contains("is-active")) {
			sitelinks.style.display = "block";
		} else {
			sitelinks.style.display = "none";
		}
	} else if (window.getComputedStyle(hamburger).display === "none") {
		sitelinks.style.display = "block";
	}
});
