!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=20)}({20:function(e,t){document.onkeyup=function(e){if(u())switch(e.keyCode){case 37:return r();case 39:return o();case 70:return c()}},chrome.runtime.onMessage.addListener((function(e){switch(e){case"today":return n();case"prev":return r();case"next":return o();case"find":return c()}}));var n=function(){try{document.querySelector('[jsname="P6mm8"]').click()}catch(e){console.log("error")}},r=function(){try{document.querySelector('[jsname="VfNHU"]').click()}catch(e){alert(e),console.log("error")}},o=function(){try{document.querySelector('[jsname="OCpkoe"]').click()}catch(e){console.log("error")}},c=function(){try{document.querySelector('[jsname="KzBUhd"]').click()}catch(e){console.log("error")}},u=function(){var e=document.getElementById("aso_search_form_anchor"),t=document.querySelector(".d1dlne.WvJxMd"),n=document.querySelector(".RDlrG.Inn9w.iWO5td"),r=window.location.href;return!("gb_8e gb_Ff gb_9e"===e.className||document.body.contains(n)||"true"===t.getAttribute("data-expanded")||r.indexOf("eventedit")>=0||r.indexOf("settings")>=0)}}});