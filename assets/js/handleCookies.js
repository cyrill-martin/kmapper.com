var kmapper;(()=>{"use strict";var e={d:(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},o:(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r:e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})}},t={};e.r(t),e.d(t,{addCookieConsentEventListener:()=>a,checkCookieConsent:()=>r,checkCookieLang:()=>i,cookieConsentDE:()=>l,cookieConsentEN:()=>d,getCookie:()=>o,plusOneYear:()=>n,setLangCookie:()=>c});var n=function(){var e=new Date;return e.setFullYear(e.getFullYear()+1),e},o=function(e){var t=document.cookie,n=t.indexOf(" "+e+"=");if(-1==n&&(n=t.indexOf(e+"=")),-1==n)t=null;else{n=t.indexOf("=",n)+1;var o=t.indexOf(";",n);-1==o&&(o=t.length),t=decodeURI(t.substring(n,o))}return t},i=function(e,t){var i=document.documentElement.lang,c=o("lang"),r=o("cookieconsent_status");if(c)i!=c&&window.location.replace(t);else if("allow"===r){var a=n();document.cookie="lang="+e+"; path=/; SameSite=strict; expires="+String(a)}},c=function(){var e=document.getElementById("lang-DE"),t=document.getElementById("lang-EN");e&&e.addEventListener("click",(function(){var e=n();document.cookie="lang=de; path=/; SameSite=strict; expires=".concat(String(e))})),t&&t.addEventListener("click",(function(){var e=n();document.cookie="lang=en; path=/; SameSite=strict; expires=".concat(String(e))}))},r=function(){var e=o("cookieconsent_status");"deny"!==e&&null!==e&&c()},a=function(){window.addEventListener("load",(function(){document.querySelector(".cc-btn.cc-allow").addEventListener("click",(function(){c()})),document.querySelector(".cc-btn.cc-deny").addEventListener("click",(function(){var e;e="lang",console.log("delete",e),document.cookie=e+"=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/"}))}))},l={palette:{popup:{background:"#ffffff",text:"#333447"},button:{background:"#514efd"}},position:"bottom-right",type:"opt-in",content:{message:"Diese Website nutzt ein Cookie, um sich die ausgwählte Sprache zu merken.",link:"Mehr erfahren",allow:"Akzeptieren",deny:"Ablehnen"}},d={palette:{popup:{background:"#ffffff",text:"#333447"},button:{background:"#514efd"}},position:"bottom-right",type:"opt-in",content:{message:"This website uses one cookie to remember the selected language."}};kmapper=t})();