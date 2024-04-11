export const plusOneYear = () => {
  let plusOneYear = new Date();
  plusOneYear.setFullYear(plusOneYear.getFullYear() + 1);
  return plusOneYear;
};

export const getCookie = (cName) => {
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
};

export const checkCookieLang = (pageLang, translation) => {
  // Get document language
  let docLang = document.documentElement.lang;
  // Get cookie "lang"
  let cookie = getCookie("lang");
  if (!cookie) {
    // Cookie "lang" doesn't exist
    // Get today plus one year
    let cExpires = plusOneYear();
    // Set cookie with current page language
    document.cookie =
      "lang=" +
      pageLang +
      "; path=/; SameSite=strict; expires=" +
      String(cExpires);
  } else {
    // Cookie exists
    // Check document language vs. cookie "lang"
    if (docLang != cookie) {
      // Redirect to translation if they are not the same
      window.location.replace(translation);
    }
  }
};

export const setLangCookie = () => {
  // Overwrite cookie "lang" when language is changed
  // Get the DE | EN elements on the page
  let langDE = document.getElementById("lang-DE");
  let langEN = document.getElementById("lang-EN");
  // Check if #lang-DE exists (it's not defined on DE pages)
  if (langDE) {
    // Add click event to overwrite cookie "lang"
    langDE.addEventListener("click", () => {
      let cExpires = plusOneYear(); // Today plus one year
      document.cookie = `lang=de; path=/; SameSite=strict; expires=${String(
        cExpires
      )}`;
    });
  }
  // Check if #lang-EN exists (it's not defined on EN pages)
  if (langEN) {
    // Add click event to overwrite cookie "lang"
    langEN.addEventListener("click", () => {
      let cExpires = plusOneYear(); // Today plus one year
      document.cookie = `lang=en; path=/; SameSite=strict; expires=${String(
        cExpires
      )}`;
    });
  }
};

export const checkAnalyticsConsent = () => {
  // Check cookie from cookieconsent
  let analyticsConsent = getCookie("cookieconsent_status")
  analyticsConsent === "deny" || analyticsConsent === null ? null : loadGoogleAnalytics()
}

export const addCookieConsentEventListener = () => {
  window.addEventListener("load", function() {
    // Find the Allow button element
    let allowButton = document.querySelector(".cc-btn.cc-allow");
    // Add click event listener to the Allow button
    allowButton.addEventListener("click", function() {
      loadGoogleAnalytics();
    });
  });
}

function loadGoogleAnalytics() {
  // Create a script element for Google Analytics
  let gaScript = document.createElement("script");
  gaScript.src = "https://www.googletagmanager.com/gtag/js?id=G-JWT33TKH0S";
  gaScript.async = true;

  // Get the first element in the head section (should be the first child)
  let firstHeadElement = document.head.firstChild;

  // Insert the script element before the first element in the head section
  document.head.insertBefore(gaScript, firstHeadElement);

  // Define the gtag function to configure Google Analytics
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag("js", new Date());
  gtag("config", "G-JWT33TKH0S");
}

export const cookieConsentDE = {
  palette: {
    popup: {
      background: "#ffffff",
      text: "#333447",
    },
    button: {
      background: "#514efd",
    }
  },
  position: "bottom-right",
  type: "opt-in",
  content: {
    message:
      "Diese Website nutzt Cookies von Google Analytics, um die Website und Ihre Erfahrung zu verbessern.",
    link: "Mehr erfahren",
    allow: "Akzeptieren",
    deny: "Ablehnen"
  }
};

export const cookieConsentEN = {
  palette: {
    popup: {
      background: "#ffffff",
      text: "#333447"
    },
    button: {
      background: "#514efd"
    },
  },
  position: "bottom-right",
  type: "opt-in",
  content: {
    message:
      "This website uses cookies from Google Analytics to improve the website and your experience.",
  }
};
