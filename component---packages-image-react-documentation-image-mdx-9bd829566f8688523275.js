(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{SJCg:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return x})),a.d(t,"default",(function(){return Q}));var n=a("+I+c"),l=a("mXGw"),r=a.n(l),i=a("/FXl"),o=a("7XvJ"),m=a("Abof"),s=a("8Jek"),c=a.n(s),u=function(e){var t=e.thumbnail,a=e.defaultSize,n=e.objectPosition,l=void 0===n?"initial":n,i=e.largeSize,o=e.alt,s=e.isSmallDevice,u=e.className,d=void 0===u?"":u,b=e.inverted,A=void 0!==b&&b,p=e.backgroundColor,g=Object(m.e)({lowQualitySrc:null!=t?t:"",highQualitySrc:i&&!s?i:a}),k=g.src,j=g.isBlurred;return r.a.createElement("div",{className:d},r.a.createElement("picture",{className:c()("jkl-image__container",{"jkl-image--inverted":A})},r.a.createElement("img",{"data-testid":"jkl-image-blurred",style:{objectPosition:l,backgroundColor:p},alt:"",src:t,className:c()("jkl-image","jkl-image__blur-container",{"jkl-image__blur-container--blur":j,"jkl-image__blur-container--blur-out":!j,"jkl-image__blur-container--no-thumbnail":!t})}),r.a.createElement("img",{"data-testid":"jkl-image",style:{objectPosition:l,backgroundColor:p},src:k,alt:o,className:c()("jkl-image",{"jkl-image--empty":""===k})})))},d=a("tlZ9"),b=a.n(d),A=a("c3GW"),p=a.n(A),g=a("y6fO"),k=a.n(g),j=(a("nKCe"),function(e){var t=e.boolValues,a=e.choiceValues,n=Object(m.g)().isSmallDevice,i=Object(l.useState)(!1),o=i[0],s=i[1],c=!(!t||!t.Invertert),d=t&&t.Bakgrunn,A=t&&t.Thumbnail,g=t&&t.LargeSize,j=a?a.Farge:"Default";return r.a.createElement("div",{className:"example-img-wrapper"},r.a.createElement("p",{className:"jkl-body jkl-layout-spacing--medium-bottom"},"Denne komponenten er til for å optimalisere innlasting av bilder, det gjør den litt vanskelig å visualisere, siden den prøver å huske så godt den kan. For å se effekten ordentlig, skru ned hastigheten i nettverksloggen din. For å se effekten på nytt, gjør en hard refresh (ctrl+shift+r), still inn komponenten og trykk på last bilde."),r.a.createElement("button",{className:"jkl-layout-spacing--medium-bottom",onClick:function(){return o?window.location.reload():s(!0)}},o?"Last siden på nytt":"Last bilde"),o&&r.a.createElement("div",{className:"jkl-layout-spacing--medium-bottom"},r.a.createElement("p",{className:"jkl-body"},"With largeSize"),r.a.createElement(u,{className:"example-class",defaultSize:b.a,alt:"dog",largeSize:g?p.a:void 0,thumbnail:A?k.a:void 0,isSmallDevice:n,inverted:c,backgroundColor:d&&"Default"!==j?j:void 0})))}),f=["Invertert","Thumbnail","LargeSize","Bakgrunn"],N=[{name:"Farge",values:["Default","MediumSlateBlue","lime","deeppink","rebeccapurple"],defaultValue:0}],x={},E=function(e){return function(t){return console.warn("Component "+e+" was not imported, exported, or provided by MDXProvider as global scope"),Object(i.mdx)("div",t)}},v=E("Experimental"),B=E("Ingress"),O=E("ComponentExample"),h={_frontmatter:x},y=o.a;function Q(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(i.mdx)(y,Object.assign({},h,a,{components:t,mdxType:"MDXLayout"}),Object(i.mdx)(v,{mdxType:"Experimental"},"Bildekomponent er ikke 100% ferdigstilt, den kan brukes, men forvent at APIet kan forandre seg."),Object(i.mdx)(B,{mdxType:"Ingress"},"Bildekomponent med blur up. Den støtter to størrelser på bilder og thumbnail. Nyttig for å laste mindre bilder på små dingser, og høyere oppløsning på større. Hvis man legger ved en thumbnail, så vil den vises blurret ut først, og byttes ut med det ekte bilde når det er lastet. Hvis man ikke legger ved thumbnail, så blurrer vi opp fra grå 20 eller 80, i light og dark-mode respektivt. Hvis du ønsker kan du sette bakgrunnsfarge isteden for thumbnail. Feks plukk ut en av de fremtredene fargene i bildet og bruk det som default staten."),Object(i.mdx)(O,{component:j,knobs:{boolProps:f,choiceProps:N},mdxType:"ComponentExample"}),Object(i.mdx)("ul",null,Object(i.mdx)("li",{parentName:"ul"},"Thumbnail",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Ca 40px i bredde"),Object(i.mdx)("li",{parentName:"ul"},"Max 5 kB"))),Object(i.mdx)("li",{parentName:"ul"},"DefaultSize",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Brukes for mobil"),Object(i.mdx)("li",{parentName:"ul"},"Max 800px i bredde"),Object(i.mdx)("li",{parentName:"ul"},"Under 500 kB"))),Object(i.mdx)("li",{parentName:"ul"},"LargeSize",Object(i.mdx)("ul",{parentName:"li"},Object(i.mdx)("li",{parentName:"ul"},"Brukes for større skjermer"),Object(i.mdx)("li",{parentName:"ul"},"Bruk fornuft")))))}Q.isMDXComponent=!0},c3GW:function(e,t,a){e.exports=a.p+"static/largeSize-203e31a1e2587cbaac6061792f6f24bd.jpg"},nKCe:function(e,t,a){},tlZ9:function(e,t,a){e.exports=a.p+"static/defaultSize-ad5cb8f0eb32b75b297adacf5cb301dc.jpg"},y6fO:function(e,t){e.exports="data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wBDABALDA4MChAODQ4SERATGCgaGBYWGDEjJR0oOjM9PDkzODdASFxOQERXRTc4UG1RV19iZ2hnPk1xeXBkeFxlZ2P/2wBDARESEhgVGC8aGi9jQjhCY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2NjY2P/wAARCAA4ACgDASIAAhEBAxEB/8QAHwAAAQUBAQEBAQEAAAAAAAAAAAECAwQFBgcICQoL/8QAtRAAAgEDAwIEAwUFBAQAAAF9AQIDAAQRBRIhMUEGE1FhByJxFDKBkaEII0KxwRVS0fAkM2JyggkKFhcYGRolJicoKSo0NTY3ODk6Q0RFRkdISUpTVFVWV1hZWmNkZWZnaGlqc3R1dnd4eXqDhIWGh4iJipKTlJWWl5iZmqKjpKWmp6ipqrKztLW2t7i5usLDxMXGx8jJytLT1NXW19jZ2uHi4+Tl5ufo6erx8vP09fb3+Pn6/8QAHwEAAwEBAQEBAQEBAQAAAAAAAAECAwQFBgcICQoL/8QAtREAAgECBAQDBAcFBAQAAQJ3AAECAxEEBSExBhJBUQdhcRMiMoEIFEKRobHBCSMzUvAVYnLRChYkNOEl8RcYGRomJygpKjU2Nzg5OkNERUZHSElKU1RVVldYWVpjZGVmZ2hpanN0dXZ3eHl6goOEhYaHiImKkpOUlZaXmJmaoqOkpaanqKmqsrO0tba3uLm6wsPExcbHyMnK0tPU1dbX2Nna4uPk5ebn6Onq8vP09fb3+Pn6/9oADAMBAAIRAxEAPwDrgaXNRA07NAEgNOBqENTg1AEuaKZuooAzdRv49NsZbqXlUHAHVj2FcL/bWpXUrTtczKm7IWNiFWu9uIUuFRZM4R1cY9QciuAv/It9XuIVgxGsjKEGcYxQwQ0+Ib5Ztv2m4IBx/rDk1op4g1OyCXDSefF0eNx29QawxYDbv3HOPueo9Aa0IIoLq4itYspFLKFIB6KevXvikFj0Cyu476ziuYTlJFyPb2oqlpOn/wBmvcxx/LbM4MSZzjuT+uPwoqhFjdzXF+K41g1ZpeP3yA4zjnoR+g/OuvZ9uT6VjXVrFqtjIkoKlnLBjyVPai1xXscwkjhOMFquaJIJNbtPLXLKckHt0H5jrWbNBNZTLHcxsCG+92b3B71v+EtMkS4bUJFG0r+6HU89/wAqlLUpy0OyJ5oqKGTzolcoyE9m60VZJQvneKznkUfMsbEZHGccVBausYmEmFAIbJ9CP8QaKKTdk2CV5JFfU41mtEZlSSD7+HBIHHXirNtH9lkR4ctFIg3ID37Giiqirszk7L5l+0maSa4jYABGBTH90j/EGiiihlR2P//Z"}}]);
//# sourceMappingURL=component---packages-image-react-documentation-image-mdx-9bd829566f8688523275.js.map