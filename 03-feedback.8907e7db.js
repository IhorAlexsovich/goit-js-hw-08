function e(e){return e&&e.__esModule?e.default:e}var t="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},r={},a={},o=t.parcelRequired7c6;null==o&&((o=function(e){if(e in r)return r[e].exports;if(e in a){var t=a[e];delete a[e];var o={id:e,exports:{}};return r[e]=o,t.call(o.exports,o,o.exports),o.exports}var n=new Error("Cannot find module '"+e+"'");throw n.code="MODULE_NOT_FOUND",n}).register=function(e,t){a[e]=t},t.parcelRequired7c6=o);var n=o("8zd4h");const l=document.querySelector(".feedback-form");function s(){const e=localStorage.getItem("feedback-form-state");if(e){const t=JSON.parse(e);return l.email.value=t.email,l.message.value=t.message,t}}l.addEventListener("input",e(n)((function(e){i[e.target.name]=e.target.value,localStorage.setItem("feedback-form-state",JSON.stringify(i))}),500)),s();let i=s()||{email:"",message:""};l.addEventListener("submit",(function(e){if(e.preventDefault(),!localStorage.length)return;{const e=localStorage.getItem("feedback-form-state"),t=JSON.parse(e);console.log(t)}e.currentTarget.reset(),localStorage.removeItem("feedback-form-state"),i.email="",i.message=""}));
//# sourceMappingURL=03-feedback.8907e7db.js.map
