(window.webpackJsonp=window.webpackJsonp||[]).push([[35],{"55RO":function(e,t,n){"use strict";n.d(t,"b",(function(){return o})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return h})),n.d(t,"g",(function(){return E})),n.d(t,"a",(function(){return w})),n.d(t,"e",(function(){return c}));var r=n("mXGw"),i=n.n(r),c=function(){var e=Object(r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia("(prefers-reduced-motion: no-preference)").matches)),t=e[0],n=e[1];return Object(r.useEffect)((function(){var e,t,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia("(prefers-reduced-motion: no-preference)"),t=function(e){return n(!e.matches)},null===(r=e)||void 0===r||r.addListener(t));return function(){var n;null===(n=e)||void 0===n||n.removeListener(t)}}),[]),t};function o(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),i=Object(r.useRef)(null),o=Object(r.useRef)(!0),s=c();function a(){var e=u(i);e&&e.removeAttribute("style")}var f=Object(r.useCallback)((function(){if(!s&&!o.current){var r=u(i);if(r)if(r.style.display="block",r.style.overflow="hidden",e)r.style.height="0",r.style.height=r.scrollHeight+"px";else{if(0===r.scrollHeight)return void r.removeAttribute("style");r.style.height=r.scrollHeight+"px",t.current=requestAnimationFrame((function(){n.current=requestAnimationFrame((function(){r.style.height="0px"}))}))}}}),[e]);return Object(r.useLayoutEffect)((function(){f()}),[e,f]),Object(r.useEffect)((function(){var e=u(i);return e&&e.addEventListener("transitionend",a),function(){e&&e.removeEventListener("transitionend",a)}}),[e]),Object(r.useEffect)((function(){var e=t.current,r=n.current;return o.current=!1,function(){e&&cancelAnimationFrame(e),r&&cancelAnimationFrame(r)}}),[t,n]),[i,f]}function u(e){return e.current&&(e.current.el||e.current)}function s(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}i.a.useEffect((function(){return e&&document&&document.addEventListener("click",n),function(){e&&document&&document.removeEventListener("click",n)}}))}n("eOg2"),n("e3wf");var a,f=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},d=function(e,t,n){var i=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=i.current;if(f()){var c=e.current;r&&r.disconnect(),r=new MutationObserver(t),c&&r.observe(c,n)}return function(){f()&&r&&r.disconnect()}}),[e,t,n])},l=(n("qoUV"),n("mK0O")),b=n("F5Dj");function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function p(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(a||(a={}));var v={resized:a.resized},O=function(e,t){return{isSmallDevice:e<=b.e.small,isMediumDevice:e>b.e.small&&e<b.e.medium,isLargeDevice:e>b.e.medium&&e<b.e.large,isXlDevice:e>b.e.large,isPortrait:t>=e,isLandscape:t<e,inner:{height:t,width:e}}},w={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},j=function(){var e="undefined"!=typeof window?window.innerWidth:0,t="undefined"!=typeof window?window.innerHeight:0;return O(e,t)},y=function(e,t){var n=t.type,r=t.width,i=t.height;switch(n){case v.resized:return p(p({},e),O(r,i))}};function g(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var h=function(){var e=Object(r.useReducer)(y,w,j),t=e[0],n=e[1],i=function(){return requestAnimationFrame((function(){return n({type:v.resized,width:window.innerWidth,height:window.innerHeight})}))};return Object(r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?g(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):g(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)},E=function(e){var t=e.ref,n=e.timeout,i=void 0===n?0:n,c=e.autoScroll,o=void 0===c||c,u=e.options,s=void 0===u?{behavior:"smooth"}:u,a=function(){(null==t?void 0:t.current)&&t.current.scrollIntoView(s)};return Object(r.useEffect)((function(){if(o){var e=setTimeout(a,i);return function(){return clearTimeout(e)}}}),[t,i,o]),[a]}},"5neE":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return O}));var r=n("+I+c"),i=n("mXGw"),c=n.n(i),o=n("/FXl"),u=n("7XvJ"),s=n("6CzD"),a=n("55RO"),f=function(){var e=Object(i.useState)(!1),t=e[0],n=e[1],r=Object(i.useState)([]),o=r[0],u=r[1],f=Object(i.useRef)(null),d=Object(i.useRef)();d.current=o;return Object(a.d)(f,(function(e){u([].concat(Object(s.a)(d.current||[]),Object(s.a)(e.map((function(e){return e.target.textContent||""})))))}),{characterData:!0,subtree:!0}),c.a.createElement("section",null,c.a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--right-1",onClick:function(){return n(!t)}},"Endre status"),c.a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:function(){return u([])}},"Nullstill liste"),c.a.createElement("p",{ref:f,className:"jkl-spacing--top-1 jkl-body"},"Nåværende status: ",c.a.createElement("strong",null,t?"Åpen":"Lukket"),c.a.createElement("br",null),"Liste over endringer:"),0!==o.length&&c.a.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},o.map((function(e,t){return c.a.createElement("li",{className:"jkl-list__item",key:t},e)}))))},d={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",t)}},b=l("Ingress"),m=l("ComponentExample"),p={_frontmatter:d},v=u.a;function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(o.b)(v,Object.assign({},p,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)(b,{mdxType:"Ingress"},"Med useMutationObserver kan du lytte på endringer i DOMet."),Object(o.b)("p",null,"Dette er en tynn wrapper over MutationObserver APIet som gjør det lettere å ta det i bruk i React. Den er nyttig om du f.eks. ønsker å spore når en bruker trykker på et element der du ikke har tilgang på ",Object(o.b)("inlineCode",{parentName:"p"},"onChange"),"-funksjonen, som ",Object(o.b)("inlineCode",{parentName:"p"},"Accordion"),"."),Object(o.b)(m,{component:f,mdxType:"ComponentExample"}))}O.isMDXComponent=!0},e3wf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("mXGw");function i(e,t,n){function i(e){t&&!t.includes(e.key)||n(e)}"string"==typeof t&&(t=[t]),Object(r.useEffect)((function(){var t=e&&e.current;return t&&t.addEventListener("keydown",i),function(){t&&t.removeEventListener("keydown",i)}}))}},eOg2:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("mXGw"),i=n.n(r);function c(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}i.a.useEffect((function(){return e&&document&&document.addEventListener("focusin",n),function(){e&&document&&document.removeEventListener("focusin",n)}}))}},qoUV:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var r=n("mXGw"),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},c=function(e,t,n,c){var o=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=o.current;if(i()){var u=e.current;r&&r.disconnect(),r=new IntersectionObserver(t,c),u&&r.observe(u)}else n();return function(){i()&&r&&r.disconnect()}}),[e,t,n,c])}}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-mutation-observer-mdx-3a3c39d247d34af4e7d5.js.map