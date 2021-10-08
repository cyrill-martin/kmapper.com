// Cookie handling
// Function to get today + one year
function plusOneYear() {
  let plusOneYear = new Date();
  plusOneYear.setFullYear(plusOneYear.getFullYear() + 1);
  return plusOneYear;
}
// Function to check the existence of a cookie by name
function getCookie(cName) {
  let cValue = document.cookie,
    cStart = cValue.indexOf(" " + cName + "=");
  if (cStart == -1) cStart = cValue.indexOf(cName + "=");
  if (cStart == -1) {
    // Null if cookie doesn't exist
    cValue = null;
  } else {
    cStart = cValue.indexOf("=", cStart) + 1;
    let cEnd = cValue.indexOf(";", cStart);
    if (cEnd == -1) {
      cEnd = cValue.length;
    }
    // Value of cookie if it exists
    cValue = decodeURI(cValue.substring(cStart, cEnd));
  }
  return cValue;
}
// Check language
function checkCookieLang(pageLang, translation) {
  // Get document language
  let docLang = document.documentElement.lang;
  // Get cookie "lang"
  let cookie = getCookie("lang");
  if (!cookie) {
    // Cookie "lang" doesn't exist
    // Get today plus one year
    let cExpires = plusOneYear();
    // Set cookie with current page language
    document.cookie = "lang=" + pageLang + "; path=/; SameSite=strict; expires=" + String(cExpires);
  } else {
    // Cookie exists
    // Check document language vs. cookie "lang"
    if (docLang != cookie) {
      // Redirect to translation if they are not the same
      // {{ translation }} is assigned above
      window.location.replace(translation);
    }
  }
}
function setLangCookie() {
  // Overwrite cookie "lang" when language is changed
  // Get the DE | EN elements on the page
  let langDE = document.getElementById("lang-DE");
  let langEN = document.getElementById("lang-EN");
  // Check if #lang-DE exists (it's not defined on DE pages)
  if (langDE) {
    // Add click event to overwrite cookie "lang"
    langDE.addEventListener("click", function () {
      let cExpires = plusOneYear(); // Today plus one year
      document.cookie =
        "lang=de; path=/; SameSite=strict; expires=" + String(cExpires);
    });
  }
  // Check if #lang-EN exists (it's not defined on EN pages)
  if (langEN) {
    // Add click event to overwrite cookie "lang"
    langEN.addEventListener("click", function () {
      let cExpires = plusOneYear(); // Today plus one year
      document.cookie =
        "lang=en; path=/; SameSite=strict; expires=" + String(cExpires);
    });
  }
}

const cookieConsentDE = {
  palette: {
    popup: {
      background: "#ffffff",
      text: "#333447",
    },
    button: {
      background: "#514efd",
    },
  },
  position: "bottom-right",
  content: {
    message:
      "Diese Website platziert ein Cookie, um sich an Ihre ausgewählte Sprache zu erinnern.",
    dismiss: "Verstanden",
    link: "Mehr erfahren",
  },
};

const cookieConsentEN = {
  palette: {
    popup: {
      background: "#ffffff",
      text: "#333447",
    },
    button: {
      background: "#514efd",
      message: "test",
    },
  },
  position: "bottom-right",
  content: {
    message:
      "This website places one cookie to remember your selected language.",
  },
};
