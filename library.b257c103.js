!function(){var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n={},a=e.parcelRequired76b;null==a&&((a=function(e){if(e in t)return t[e].exports;if(e in n){var a=n[e];delete n[e];var r={id:e,exports:{}};return t[e]=r,a.call(r.exports,r,r.exports),r.exports}var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}).register=function(e,t){n[e]=t},e.parcelRequired76b=a),a("4Nugj"),a("ebqVR"),a("5xtVg");var r=a("LW3sO"),o=a("jcFG7"),l=a("cKDzr"),i=document.querySelector(".films"),c=document.querySelector('[data-queue="data-queue"]'),d=document.querySelector('[data-watched="data-watched"]');c.addEventListener("click",(function(e){f(),s.on("beforeMove",(function(e){(0,l.topFunction)();var t=e.page,n=u(f(),20,t);console.log(n);var a=(0,r.createFilmsGallery)(n);i.innerHTML=a})),d.disabled=!1,c.classList.add("active"),d.classList.remove("active"),c.disabled=!0})),d.addEventListener("click",(function(e){v(),s.on("beforeMove",(function(e){(0,l.topFunction)();var t=e.page,n=u(v(),20,t);console.log(n);var a=(0,r.createFilmsGallery)(n);i.innerHTML=a})),c.disabled=!1,c.classList.remove("active"),d.classList.add("active"),d.disabled=!0})),c.disabled=!1;var s=(0,o.pagination)(),u=function(e,t,n){return e.slice((n-1)*t,n*t)};function v(){var e=localStorage.getItem("watched"),t=JSON.parse(e),n=t.length,a=(0,r.createFilmsGallery)(u(t,20,1));return i.innerHTML=a,s.reset(n),t}function f(){var e=localStorage.getItem("queue"),t=JSON.parse(e),n=t.length,a=(0,r.createFilmsGallery)(u(t,20,1));return i.innerHTML=a,s.reset(n),t}r=a("LW3sO");a("j1lrD"),a("jcFG7");var g,p=["#ff6b01"],y=function(){var e,t=!0,n=!1,a=void 0;try{for(var r,o=g[Symbol.iterator]();!(t=(r=o.next()).done);t=!0){var l=r.value,i=l.innerHTML,c="revealColor"in l.dataset?l.dataset.revealColor:(e=p)[Math.floor(Math.random()*e.length)];l.innerHTML='<span data-reveal="content"><div data-reveal="cover" style="background-color:'.concat(c,'"></div><span data-reveal="text">').concat(i,"</span></span>")}}catch(e){n=!0,a=e}finally{try{t||null==o.return||o.return()}finally{if(n)throw a}}},m=function(){var e=window.innerHeight,t=document.documentElement.scrollTop||document.body.scrollTop,n=document.body.clientHeight<=t+e,a=!0,r=!1,o=void 0;try{for(var l,i=g[Symbol.iterator]();!(a=(l=i.next()).done);a=!0){var c=l.value;if(!c.classList.contains("loaded")){var d=c.getBoundingClientRect().top+t;(n||d<=t+.8*e)&&c.classList.add("loaded")}}}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}};document.addEventListener("DOMContentLoaded",(function(){g=document.querySelectorAll('[data-js="reveal"]'),y(),window.addEventListener("scroll",m,!1),window.dispatchEvent(new Event("scroll"))}),!1),v(),pagin.on("beforeMove",(function(e){var t=e.page,n=paginate(v(),20,t);console.log(n);var a=(0,r.createFilmsGallery)(n);gallery.innerHTML=a}))}();
//# sourceMappingURL=library.b257c103.js.map
