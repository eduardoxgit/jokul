(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{"55RO":function(e,t,n){"use strict";n.d(t,"b",(function(){return c})),n.d(t,"c",(function(){return s})),n.d(t,"d",(function(){return d})),n.d(t,"f",(function(){return g})),n.d(t,"g",(function(){return k})),n.d(t,"a",(function(){return w})),n.d(t,"e",(function(){return o}));var r=n("mXGw"),i=n.n(r),o=function(){var e=Object(r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia("(prefers-reduced-motion: no-preference)").matches)),t=e[0],n=e[1];return Object(r.useEffect)((function(){var e,t,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia("(prefers-reduced-motion: no-preference)"),t=function(e){return n(!e.matches)},null===(r=e)||void 0===r||r.addListener(t));return function(){var n;null===(n=e)||void 0===n||n.removeListener(t)}}),[]),t};function c(e){var t=Object(r.useRef)(),n=Object(r.useRef)(),i=Object(r.useRef)(null),c=Object(r.useRef)(!0),s=o();function f(){var e=u(i);e&&e.removeAttribute("style")}var a=Object(r.useCallback)((function(){if(!s&&!c.current){var r=u(i);if(r)if(r.style.display="block",r.style.overflow="hidden",e)r.style.height="0",r.style.height=r.scrollHeight+"px";else{if(0===r.scrollHeight)return void r.removeAttribute("style");r.style.height=r.scrollHeight+"px",t.current=requestAnimationFrame((function(){n.current=requestAnimationFrame((function(){r.style.height="0px"}))}))}}}),[e]);return Object(r.useLayoutEffect)((function(){a()}),[e,a]),Object(r.useEffect)((function(){var e=u(i);return e&&e.addEventListener("transitionend",f),function(){e&&e.removeEventListener("transitionend",f)}}),[e]),Object(r.useEffect)((function(){var e=t.current,r=n.current;return c.current=!1,function(){e&&cancelAnimationFrame(e),r&&cancelAnimationFrame(r)}}),[t,n]),[i,a]}function u(e){return e.current&&(e.current.el||e.current)}function s(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}i.a.useEffect((function(){return e&&document&&document.addEventListener("click",n),function(){e&&document&&document.removeEventListener("click",n)}}))}n("eOg2"),n("e3wf");var f,a=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},d=function(e,t,n){var i=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=i.current;if(a()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(t),o&&r.observe(o,n)}return function(){a()&&r&&r.disconnect()}}),[e,t,n])},l=(n("qoUV"),n("mK0O")),m=n("F5Dj");function b(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function v(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?b(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):b(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(f||(f={}));var p={resized:f.resized},O=function(e,t){return{isSmallDevice:e<m.d.small,isMediumDevice:e>m.d.small&&e<m.d.medium,isLargeDevice:e>m.d.medium&&e<m.d.large,isXlDevice:e>m.d.large,isPortrait:t>=e,isLandscape:t<e,inner:{height:t,width:e}}},w={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},j=function(){var e="undefined"!=typeof window?window.innerWidth:0,t="undefined"!=typeof window?window.innerHeight:0;return O(e,t)},y=function(e,t){var n=t.type,r=t.width,i=t.height;switch(n){case p.resized:return v(v({},e),O(r,i))}};function h(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}var g=function(){var e=Object(r.useReducer)(y,w,j),t=e[0],n=e[1],i=function(){return requestAnimationFrame((function(){return n({type:p.resized,width:window.innerWidth,height:window.innerHeight})}))};return Object(r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?h(Object(n),!0).forEach((function(t){Object(l.a)(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):h(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},t)},k=function(e){var t=e.ref,n=e.timeout,i=void 0===n?0:n,o=e.autoScroll,c=void 0===o||o,u=e.options,s=void 0===u?{behavior:"smooth"}:u,f=function(){(null==t?void 0:t.current)&&t.current.scrollIntoView(s)};return Object(r.useEffect)((function(){if(c){var e=setTimeout(f,i);return function(){return clearTimeout(e)}}}),[t,i,c]),[f]}},e3wf:function(e,t,n){"use strict";n.d(t,"a",(function(){return i}));var r=n("mXGw");function i(e,t,n){function i(e){t&&!t.includes(e.key)||n(e)}"string"==typeof t&&(t=[t]),Object(r.useEffect)((function(){var t=e&&e.current;return t&&t.addEventListener("keydown",i),function(){t&&t.removeEventListener("keydown",i)}}))}},eOg2:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("mXGw"),i=n.n(r);function o(e,t){function n(n){(null==e?void 0:e.current)&&!e.current.contains(n.target)&&t()}i.a.useEffect((function(){return e&&document&&document.addEventListener("focusin",n),function(){e&&document&&document.removeEventListener("focusin",n)}}))}},jZiY:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return d})),n.d(t,"default",(function(){return O}));var r=n("+I+c"),i=n("mXGw"),o=n.n(i),c=n("/FXl"),u=n("7XvJ"),s=n("6CzD"),f=n("55RO"),a=function(){var e=Object(i.useState)([]),t=e[0],n=e[1],r=Object(i.useState)(!1),c=r[0],u=r[1],a=Object(i.useRef)(null),d=Object(i.useRef)();d.current=t;return Object(f.c)(a,(function(){c&&n([].concat(Object(s.a)(d.current||[]),["Klikk utenfor"]))})),o.a.createElement("section",{ref:a},o.a.createElement("p",{className:"jkl-body jkl-spacing--bottom-1"},"Klikk utenfor eksempelet for å se klikket listet opp under. Klikk inne i eksempelet vil ikke listes opp"),o.a.createElement("button",{className:"jkl-button jkl-button--secondary jkl-spacing--right-1",onClick:function(){return u(!c)}},c?"Skru av":"Skru på"),o.a.createElement("button",{className:"jkl-button jkl-button--tertiary",onClick:function(){return n([])}},"Nullstill liste"),0!==t.length&&o.a.createElement("ul",{className:"jkl-list jkl-list--unordered jkl-body"},t.map((function(e,t){return o.a.createElement("li",{className:"jkl-list__item",key:t},e)}))))},d={},l=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(c.b)("div",t)}},m=l("Ingress"),b=l("ComponentExample"),v={_frontmatter:d},p=u.a;function O(e){var t=e.components,n=Object(r.a)(e,["components"]);return Object(c.b)(p,Object.assign({},v,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)(m,{mdxType:"Ingress"},"useClickOutside lar deg lytte på klikk utenfor et element. Det kan være nyttig for å lukke modaler o.l."),Object(c.b)(b,{component:a,mdxType:"ComponentExample"}))}O.isMDXComponent=!0},qoUV:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var r=n("mXGw"),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,t,n,o){var c=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=c.current;if(i()){var u=e.current;r&&r.disconnect(),r=new IntersectionObserver(t,o),u&&r.observe(u)}else n();return function(){i()&&r&&r.disconnect()}}),[e,t,n,o])}}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-click-outside-mdx-b8ef7b24872d2ff5faf9.js.map