// Hamburger menu
/////////////////
let hamburger = document.querySelector(".hamburger");
let sitelinks = document.querySelector(".site-links");
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

// kmapper.org visual
//////////////////////
let s_width = screen.width;
let kmapper_link = document.getElementById("kmapper-link");

function showKmap() {
	document.getElementById("kmapper-preview").style.display = "block";
};

function hideKmap() {
	document.getElementById("kmapper-preview").style.display = "none";
};

// Always add event listener if big screen
if (s_width > 832) {
	kmapper_link.addEventListener("mouseover", showKmap);
	kmapper_link.addEventListener("mouseout", hideKmap);
};

// Check screen resizing
window.addEventListener("resize", function() {
	s_width = screen.width;

	if (s_width > 832) { // Add event listener if big screen
		kmapper_link.addEventListener("mouseover", showKmap);
		kmapper_link.addEventListener("mouseout", hideKmap);
	} else { // Remove event listener if small screen
		kmapper_link.removeEventListener("mouseover", showKmap);
		kmapper_link.removeEventListener("mouseout", hideKmap);
	}
});