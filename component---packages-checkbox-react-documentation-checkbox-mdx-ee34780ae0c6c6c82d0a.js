(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{"+3ca":function(e,r,n){"use strict";n.r(r),n.d(r,"_frontmatter",(function(){return m})),n.d(r,"default",(function(){return f}));n("abGl"),n("gZHo"),n("Fdmb"),n("Ir+3"),n("1c7q");var t=n("mXGw"),a=n.n(t),o=n("/FXl"),l=n("7XvJ"),i=(n("jr56"),n("8Jek")),s=n.n(i),c=n("bGYK");function k(e){var r=e.children,n=e.name,o=e.value,l=e.checked,i=e.invalid,k=e.onChange,b=e.className,m=e.inline,d=void 0!==m&&m,u=e.forceCompact,p=e.inverted,v=s()("jkl-checkbox",b,{"jkl-checkbox--compact":u,"jkl-checkbox--inline":d,"jkl-checkbox--error":i,"jkl-checkbox--inverted":p}),g=Object(t.useState)("jkl-checkbox-"+Object(c.a)(8))[0];return a.a.createElement("div",{className:v},a.a.createElement("input",{className:"jkl-checkbox__input","data-testid":"jkl-checkbox-input","aria-invalid":i,checked:l,type:"checkbox",name:n,value:o,onChange:k,id:g}),a.a.createElement("label",{htmlFor:g,className:"jkl-checkbox__label"},a.a.createElement("span",{className:"jkl-checkbox__check-mark"}),r))}var b=function(e){var r=e.boolValues,n=a.a.useState(!1),t=n[0],o=n[1];return a.a.createElement(k,{name:"checklist",value:"checkbox",checked:t,invalid:r&&r["Med feil"],inverted:r&&r.Invertert,forceCompact:r&&r.Kompakt,onChange:function(){return o(!t)}},"Jeg vil bli kontaktet via epost")};var m={},d=function(e){return function(r){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(o.b)("div",r)}},u=d("Ingress"),p=d("ComponentExample"),v={_frontmatter:m},g=l.a;function f(e){var r=e.components,n=function(e,r){if(null==e)return{};var n,t,a={},o=Object.keys(e);for(t=0;t<o.length;t++)n=o[t],r.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(g,Object.assign({},v,n,{components:r,mdxType:"MDXLayout"}),Object(o.b)(u,{mdxType:"Ingress"},'Når en avmerkingsboks står alene, er det gjerne for å bekrefte noe, for eksempel: "Jeg bekrefter at opplysningene jeg har gitt er riktige". Vi bruker flere avmerkingsbokser sammen når vi vil gi brukerne en liste med valg, der de kan velge ett eller flere alternativer.'),Object(o.b)(p,{component:b,knobs:{boolProps:["Kompakt","Med feil","Invertert"]},mdxType:"ComponentExample"}),Object(o.b)("h2",null,"Bruk"),Object(o.b)("p",null,"En gruppe avmerkingsbokser må ha en god overskrift, og ledeteksten til hver avmerkingsboks må beskrive alternativet. En avmerkingsboks som står alene trenger ikke noen overskrift, så lenge ledeteksten er god og beskrivende."),Object(o.b)("p",null,"Du kan sette boksene under eller etter hverandre, men vi anbefaler at du plasserer dem under hverandre. Standard status for avmerkingsbokser er ",Object(o.b)("em",{parentName:"p"},"ikke valgt"),"."),Object(o.b)("h2",null,"Tekst og validering"),Object(o.b)("p",null,"Velg størrelse på overskriften til en gruppe avmerkingsbokser etter prinsippene for skjemadesign. Ha en kort og tydelig overskrift, som beskriver hva brukeren skal velge. Hvis du trenger å gi mer forklaring, kan du sette en hjelpetekst under gruppen."),Object(o.b)("p",null,"Hvis avmerkingsboksene ikke validerer, vises det en feilmelding som forklarer hva som er galt. Denne feilmeldingen erstatter en eventuell hjelpetekst du har der fra før, og bør formuleres slik at brukeren både får hjelp og får vite hva som er feil."),Object(o.b)("p",null,'Eksempel:\nHjelpetekst: "Oppgi fødselsnummeret ditt, 11 siffer". Feilmelding: "Du må oppgi fødselsnummeret ditt, 11 siffer".'))}f.isMDXComponent=!0},bGYK:function(e,r,n){"use strict";n.d(r,"a",(function(){return t}));n("Eb4t"),n("Fdmb"),n("ZJc7");var t=function(){for(var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:21,r="",n=crypto.getRandomValues(new Uint8Array(e));e--;){var t=63&n[e];r+=t<36?t.toString(36):t<62?(t-26).toString(36).toUpperCase():t<63?"_":"-"}return r}}}]);
//# sourceMappingURL=component---packages-checkbox-react-documentation-checkbox-mdx-ee34780ae0c6c6c82d0a.js.map