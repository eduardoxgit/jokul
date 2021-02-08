(window.webpackJsonp=window.webpackJsonp||[]).push([[65],{HcH2:function(e,n,t){"use strict";t.r(n),t.d(n,"_frontmatter",(function(){return i})),t.d(n,"default",(function(){return k}));var r=t("+I+c"),l=(t("mXGw"),t("/FXl")),a=t("7XvJ"),i={},m={_frontmatter:i},o=a.a;function k(e){var n=e.components,t=Object(r.a)(e,["components"]);return Object(l.mdx)(o,Object.assign({},m,t,{components:n,mdxType:"MDXLayout"}),Object(l.mdx)("h1",null,"Slik skriver du kode til Jøkul"),Object(l.mdx)("p",null,"Jøkul er et designsystem: Et bibliotek med komponenter. Det gir litt andre utfordringer enn når du driver med klientutvikling. Her får du en liten innføring i hvordan vi jobber med Jøkul. Jøkul blir brukt til å utvikle mange forskjellige løsninger, og må derfor dekke forskjellige behov og ønsker. Det er viktig at vi balanserer funksjonalitet, brukervennlighet, pakkestørrelse og kompleksitet i hver enkelt komponent."),Object(l.mdx)("h2",null,"Dette bruker vi"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Språk: ",Object(l.mdx)("a",{parentName:"li",href:"https://www.typescriptlang.org/docs/home.html"},"Typescript")),Object(l.mdx)("li",{parentName:"ul"},"JS-rammeverk: ",Object(l.mdx)("a",{parentName:"li",href:"https://reactjs.org/"},"React")),Object(l.mdx)("li",{parentName:"ul"},"Byggverktøy: ",Object(l.mdx)("a",{parentName:"li",href:"https://rollupjs.org/guide/en/"},"Rollup")," og ",Object(l.mdx)("a",{parentName:"li",href:"https://gulpjs.com/"},"Gulp")),Object(l.mdx)("li",{parentName:"ul"},"Test runner: ",Object(l.mdx)("a",{parentName:"li",href:"https://jestjs.io/"},"Jest")),Object(l.mdx)("li",{parentName:"ul"},"Testrammeverk: ",Object(l.mdx)("a",{parentName:"li",href:"https://testing-library.com/docs/react-testing-library/intro"},"React Testing Library")),Object(l.mdx)("li",{parentName:"ul"},"CSS-preprosessor: ",Object(l.mdx)("a",{parentName:"li",href:"https://sass-lang.com/"},"Sass")),Object(l.mdx)("li",{parentName:"ul"},"CSS-metodikk: ",Object(l.mdx)("a",{parentName:"li",href:"http://getbem.com"},"BEM"))),Object(l.mdx)("h2",null,"Slik setter du opp utviklingsmiljøet på din egen maskin"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"Klon eller fork ",Object(l.mdx)("a",{parentName:"li",href:"https://github.com/fremtind/jokul"},"Jøkul-biblioteket")," fra GitHub."),Object(l.mdx)("li",{parentName:"ol"},"Lag en ny branch og gi den et fornuftig navn etter hva du skal lage."),Object(l.mdx)("li",{parentName:"ol"},"Bygg prosjektet med kommandoene ",Object(l.mdx)("inlineCode",{parentName:"li"},"yarn")," og ",Object(l.mdx)("inlineCode",{parentName:"li"},"yarn build")," fra rot i prosjektet.")),Object(l.mdx)("h2",null,"Slik har vi organisert pakkene"),Object(l.mdx)("p",null,"Alle komponentene er organisert under ",Object(l.mdx)("inlineCode",{parentName:"p"},"/packages"),". De som slutter på ",Object(l.mdx)("inlineCode",{parentName:"p"},"-react")," er React-pakker. De som ikke har en endelse, er stilpakker. Stilpakkene skal være generelle og du kan bruke dem uten noe JavaScript-rammeverk. Hver enkelt pakke inneholder et eksempel, som du kan kan starte med ",Object(l.mdx)("inlineCode",{parentName:"p"},"yarn dev")," fra hver enkelt pakke. Noen av stilpakkene mangler eksempler, fordi det kreves en del JavaScript for å få eksempelet til å kjøre. ",Object(l.mdx)("inlineCode",{parentName:"p"},"Select")," og ",Object(l.mdx)("inlineCode",{parentName:"p"},"Datepicker")," er eksempler på dette."),Object(l.mdx)("h2",null,"Slik lager du en ny pakke"),Object(l.mdx)("ol",null,Object(l.mdx)("li",{parentName:"ol"},"Gå til rot og kjør kommandoen ",Object(l.mdx)("inlineCode",{parentName:"li"},"lerna create <pakke-navn>"),"."),Object(l.mdx)("li",{parentName:"ol"},"Du får noen spørsmål om pakken. Fyll ut så godt du kan. Husk at navnet på pakken skal starte med ",Object(l.mdx)("inlineCode",{parentName:"li"},"@fremtind/jkl-"),"."),Object(l.mdx)("li",{parentName:"ol"},"Når pakken er opprettet, finner du en pakke av typen du skal lage (stil eller React). Kopier de script- og oppsettfilene du trenger, for eksempel ",Object(l.mdx)("inlineCode",{parentName:"li"},"tsconfig-for-declarations.json")," for React-pakker eller ",Object(l.mdx)("inlineCode",{parentName:"li"},"gulpfile.js")," for stilpakker.")),Object(l.mdx)("h2",null,"Slik lenker du pakker sammen"),Object(l.mdx)("p",null,"Hvis du vil legge til en pakke i en annen, kan du fra hvor som helst i prosjektet kjøre ",Object(l.mdx)("inlineCode",{parentName:"p"},"lerna add <pakke-som-skal-legges-til> --scope=<pakken-den-skal-inn-i>"),". For eksempel vil ",Object(l.mdx)("inlineCode",{parentName:"p"},"lerna add @fremtind/jkl-core scope=@fremtind/jkl-button")," legge til ",Object(l.mdx)("inlineCode",{parentName:"p"},"jkl-core")," som en avhengighet i ",Object(l.mdx)("inlineCode",{parentName:"p"},"jkl-button"),"-pakken. Når du legger til avhengigheter på denne måten, kan Lerna bruke den lokale versjonen av ",Object(l.mdx)("inlineCode",{parentName:"p"},"jkl-core")," i stedet for å laste ned fra NPM, slik at du kan utvikle raskere. Dette fungerer bare for andre pakker i Jøkul."),Object(l.mdx)("h2",null,"Slik legger du til en avhengighet"),Object(l.mdx)("p",null,"Det finnes avhengigheter på ulike nivåer i Jøkul. Globale avhengigheter, for eksempel de som trengs til å kjøre en byggejobb, ligger på rotnivå. Du kan legge til en ny pakke på rotnivå, med kommandoen ",Object(l.mdx)("inlineCode",{parentName:"p"},"yarn add pakke -W"),". For å legge til som en utviklingsavhengighet bruker du ",Object(l.mdx)("inlineCode",{parentName:"p"},"-DW"),"."),Object(l.mdx)("p",null,'Lokale avhengigheter, som trengs for at en pakke skal fungere i bruk, legger vi vanligvis på pakkenivå. Se "Slik lenker du pakker sammen". Bruk kommandoen ',Object(l.mdx)("inlineCode",{parentName:"p"},"yarn add")," for å legge til pakker som ikke er en del av Jøkul. Før du gjør det, er det lurt å tenke på om de skal sendes med komponenten eller om brukeren av komponenten har ansvaret for å ha avhengigheten i sitt prosjekt. React bør for eksempel være en ",Object(l.mdx)("inlineCode",{parentName:"p"},"peerDependency"),", slik at brukeren ikke ender opp med flere utgaver av React i sin pakke."),Object(l.mdx)("h2",null,"Ende til ende tester"),Object(l.mdx)("p",null,"Hvis du lager en ny komponent, så kan du installere Cypress lokalt og utvikle ny integrasjons- og visuell regresjonstest av komponenten din."),Object(l.mdx)("p",null,"Hvis du gjør endring i en komponent som har visuell regresjonstest, sørg for at endringen din er ønsket og forventet på alle støttede plattformer. Så sletter du de eksisterende snapshotene av komponenten i prosjektet."),Object(l.mdx)("p",null,"Grunnen til at vi ikke vil ha lokale snapshots inn, er fordi vi ønsker at konteineren som kjører testene på vår CI server er fastiten. Den vil ikke rendere 100% likt som din maskin, så får å unngå konflikter lar vi CI serveren styre. Den vil commite inn de nye eller oppdaterte snapshotene hvis testene passerer."),Object(l.mdx)("h2",null,"Les mer"),Object(l.mdx)("ul",null,Object(l.mdx)("li",{parentName:"ul"},"Tester: ",Object(l.mdx)("a",{parentName:"li",href:"/komigang/tester"},"Kom i gang med tester")),Object(l.mdx)("li",{parentName:"ul"},"Pullrequests: ",Object(l.mdx)("a",{parentName:"li",href:"/komigang/pullrequests"},"Bidra til Jøkul på GitHub")),Object(l.mdx)("li",{parentName:"ul"},"Portalen: ",Object(l.mdx)("a",{parentName:"li",href:"/komigang/portalen"},"Dokumentasjon til portalen"))))}k.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-texts-getstarted-getting-started-dev-mdx-56418bdb80d67b210a67.js.map