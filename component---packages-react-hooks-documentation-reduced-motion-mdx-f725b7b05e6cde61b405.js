(window.webpackJsonp=window.webpackJsonp||[]).push([[31],{"55RO":function(e,n,t){"use strict";t.d(n,"b",(function(){return c})),t.d(n,"c",(function(){return s})),t.d(n,"d",(function(){return f})),t.d(n,"f",(function(){return y})),t.d(n,"g",(function(){return k})),t.d(n,"a",(function(){return j})),t.d(n,"e",(function(){return o}));var r=t("mXGw"),i=t.n(r),o=function(){var e=Object(r.useState)(!("undefined"==typeof window||!window.matchMedia||window.matchMedia("(prefers-reduced-motion: no-preference)").matches)),n=e[0],t=e[1];return Object(r.useEffect)((function(){var e,n,r;"undefined"!=typeof window&&window.matchMedia&&(e=window.matchMedia("(prefers-reduced-motion: no-preference)"),n=function(e){return t(!e.matches)},null===(r=e)||void 0===r||r.addListener(n));return function(){var t;null===(t=e)||void 0===t||t.removeListener(n)}}),[]),n};function c(e){var n=Object(r.useRef)(),t=Object(r.useRef)(),i=Object(r.useRef)(null),c=Object(r.useRef)(!0),s=o();function a(){var e=u(i);e&&e.removeAttribute("style")}var d=Object(r.useCallback)((function(){if(!s&&!c.current){var r=u(i);r&&(r.style.display="block",r.style.overflow="hidden",e?(r.style.height="0",r.style.height=r.scrollHeight+"px"):(r.style.height=r.scrollHeight+"px",n.current=requestAnimationFrame((function(){t.current=requestAnimationFrame((function(){r.style.height="0px"}))}))))}}),[e]);return Object(r.useLayoutEffect)((function(){d()}),[e,d]),Object(r.useEffect)((function(){var e=u(i);return e&&e.addEventListener("transitionend",a),function(){e&&e.removeEventListener("transitionend",a)}}),[e]),Object(r.useEffect)((function(){var e=n.current,r=t.current;return c.current=!1,function(){e&&cancelAnimationFrame(e),r&&cancelAnimationFrame(r)}}),[n,t]),[i,d]}function u(e){return e.current&&(e.current.el||e.current)}function s(e,n){function t(t){e&&e.current&&!e.current.contains(t.target)&&n()}i.a.useEffect((function(){return e&&document&&document.addEventListener("click",t),function(){e&&document&&document.removeEventListener("click",t)}}))}t("eOg2"),t("e3wf");var a,d=function(){return"undefined"!=typeof window&&"undefined"!=typeof MutationObserver},f=function(e,n,t){var i=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=i.current;if(d()){var o=e.current;r&&r.disconnect(),r=new MutationObserver(n),o&&r.observe(o,t)}return function(){d()&&r&&r.disconnect()}}),[e,n,t])},l=(t("qoUV"),t("mK0O")),m=t("F5Dj");function b(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?b(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):b(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}!function(e){e.resized="WINDOW_RESIZED"}(a||(a={}));var v={resized:a.resized},O=function(e,n){return{isSmallDevice:e<m.d.small,isMediumDevice:e>m.d.small&&e<m.d.medium,isLargeDevice:e>m.d.medium&&e<m.d.large,isXlDevice:e>m.d.large,isPortrait:n>=e,isLandscape:n<e,inner:{height:n,width:e}}},j={isSmallDevice:!1,isMediumDevice:!1,isLargeDevice:!1,isXlDevice:!1,isLandscape:!1,isPortrait:!1,inner:{height:0,width:0}},w=function(){var e="undefined"!=typeof window?window.innerWidth:0,n="undefined"!=typeof window?window.innerHeight:0;return O(e,n)},g=function(e,n){var t=n.type,r=n.width,i=n.height;switch(t){case v.resized:return p(p({},e),O(r,i))}};function h(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}var y=function(){var e=Object(r.useReducer)(g,j,w),n=e[0],t=e[1],i=function(){return requestAnimationFrame((function(){return t({type:v.resized,width:window.innerWidth,height:window.innerHeight})}))};return Object(r.useEffect)((function(){return"undefined"!=typeof window&&window.addEventListener("resize",i),function(){"undefined"!=typeof window&&window.removeEventListener("resize",i)}}),[]),function(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?h(Object(t),!0).forEach((function(n){Object(l.a)(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):h(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}({},n)},k=function(e){var n=e.ref,t=e.timeout,i=void 0===t?0:t,o=e.autoScroll,c=void 0===o||o,u=e.options,s=void 0===u?{behavior:"smooth"}:u,a=function(){n&&n.current&&n.current.scrollIntoView(s)};return Object(r.useEffect)((function(){if(c){var e=setTimeout(a,i);return function(){return clearTimeout(e)}}}),[n,i,c]),[a]}},e3wf:function(e,n,t){"use strict";t.d(n,"a",(function(){return i}));var r=t("mXGw");function i(e,n,t){function i(e){n&&!n.includes(e.key)||t(e)}"string"==typeof n&&(n=[n]),Object(r.useEffect)((function(){var n=e&&e.current;return n&&n.addEventListener("keydown",i),function(){n&&n.removeEventListener("keydown",i)}}))}},eOg2:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("mXGw"),i=t.n(r);function o(e,n){function t(t){e&&e.current&&!e.current.contains(t.target)&&n()}i.a.useEffect((function(){return e&&document&&document.addEventListener("focusin",t),function(){e&&document&&document.removeEventListener("focusin",t)}}))}},"mw+9":function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return m})),t.d(n,"default",(function(){return O}));var r,i=t("+I+c"),o=t("mXGw"),c=t.n(o),u=t("/FXl"),s=t("7XvJ"),a=t("55RO"),d=c.a.createContext({prefersReducedMotion:!1}),f=function(){var e=Object(o.useContext)(d).prefersReducedMotion;return c.a.createElement("section",{className:"hooks-example key-listener-example jkl-spacing--bottom-3"},c.a.createElement("h2",{className:"jkl-h2 jkl-spacing--bottom-2"},"Din dings har en redusert bevegelse "+(e?"på":"av")))},l=function(){var e=Object(a.e)();return c.a.createElement(d.Provider,{value:{prefersReducedMotion:e}},c.a.createElement(f,null))},m={},b=(r="Ingress",function(e){return console.warn("Component "+r+" was not imported, exported, or provided by MDXProvider as global scope"),Object(u.b)("div",e)}),p={_frontmatter:m},v=s.a;function O(e){var n=e.components,t=Object(i.a)(e,["components"]);return Object(u.b)(v,Object.assign({},p,t,{components:n,mdxType:"MDXLayout"}),Object(u.b)(b,{mdxType:"Ingress"},"useReducedMotion gjør at man kan sjekke om brukeren har satt preferedReducedMotion, dermed kan vi unngå å gjøre js-animasjoner, ikke bare css-animasjoner."),Object(u.b)("h2",null,"Bruk"),Object(u.b)("p",null,"Denne baserer seg på en event listener, så som andre hooks med eventlyttere bør denne implementeres så høyt opp i applikasjonen din som nødvendig for å unngå å lage for mange listeners. Bruk gjerne en React Context i stedet for å strø flere av denne komponenten rundt der man gjør JS-animasjoner. ",Object(u.b)("a",Object.assign({parentName:"p"},{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/@media/prefers-reduced-motion"}),"Les om reduced motion på mdn"),"."),Object(u.b)("p",null,"Husk at reduced motion ikke betyr at ",Object(u.b)("em",{parentName:"p"},"all")," bevegelse må bort, men det skal være enkle, forklarende bevelgelser. Unngå store og kompliserte bevelgelser. Unngå også bevelgelser som ikke er initiert av brukeren. Parallax-effekter skal også skrus av. Ta en titt på ",Object(u.b)("a",Object.assign({parentName:"p"},{href:"/jokul/"}),"forsiden")," og ",Object(u.b)("a",Object.assign({parentName:"p"},{href:"/jokul/profil/bildebruk"}),"bildesiden")),Object(u.b)(l,{mdxType:"ReducedMotionExample"}))}O.isMDXComponent=!0},qoUV:function(e,n,t){"use strict";t.d(n,"a",(function(){return o}));var r=t("mXGw"),i=function(){return"undefined"!=typeof window&&"undefined"!=typeof IntersectionObserver},o=function(e,n,t,o){var c=Object(r.useRef)(null);Object(r.useEffect)((function(){var r=c.current;if(i()){var u=e.current;r&&r.disconnect(),r=new IntersectionObserver(n,o),u&&r.observe(u)}else t();return function(){i()&&r&&r.disconnect()}}),[e,n,t,o])}}}]);
//# sourceMappingURL=component---packages-react-hooks-documentation-reduced-motion-mdx-f725b7b05e6cde61b405.js.map