"use strict";(self.webpackChunkgatsby_theme_portfolio_minimal=self.webpackChunkgatsby_theme_portfolio_minimal||[]).push([[897],{6827:function(e,t,a){a.d(t,{d:function(){return g}});var l=a(6540),n=a(4794),i=a(2532);!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var l=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css","top"===a&&l.firstChild?l.insertBefore(n,l.firstChild):l.appendChild(n),n.styleSheet?n.styleSheet.cssText=e:n.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var s=a(211),r="style-module--Banner--d401d",o="style-module--Card--c661d",c="style-module--Category--eeb92",d="style-module--DescriptionWrapper--5f867",m="style-module--Details--5ba4b",u="style-module--Image--43f10",f="style-module--ImageWrapper--50300",p="style-module--ReadingTime--a0392",h="style-module--Title--de70d";function g(e){const{globalState:t}=(0,s.QN)(),a=t.theme===s.Sx.Dark,g=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),y=l.createElement("article",{className:o,style:a?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&l.createElement("div",{className:r},e.data.image&&e.data.image.src&&l.createElement(i.G,{className:f,imgClassName:u,objectFit:e.data.image.objectFit||"cover",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),l.createElement("div",{className:d},l.createElement("span",{className:c},l.createElement("u",null,e.data.category)),l.createElement("h4",{className:h},e.data.title),l.createElement("div",{className:m},`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(b=e.data.publishedAt).getMonth()]} ${b.getDate()}, ${b.getFullYear()}`,e.data.readingTime&&l.createElement("span",{className:p},e.data.readingTime))));var b;return g?l.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},y):l.createElement(n.Link,{to:e.data.link,title:e.data.title},y)}},8877:function(e,t,a){a.d(t,{$:function(){return r},V:function(){return s}});var l=a(6540),n=a(4794),i="style-module--Button--82b1f";let s=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function r(e){if(e.type===s.LINK){if(e.url)return e.externalLink?l.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):l.createElement(n.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error(`Button should be a ${e.type} but no URL is given!`)}if(e.type===s.BUTTON||e.type===s.SUBMIT){if(!e.onClickHandler)throw new Error(`Button should be a ${e.type} but no onClickHandler is given!`);return l.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}},5032:function(e,t,a){a.d(t,{w:function(){return r}});var l=a(6540),n="style-module--ContentWrapper --36dde",i="style-module--Heading--2c002",s="style-module--Section--1d871";function r(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(n).join(" "):n,l.createElement("section",{id:e.anchor,className:s},l.createElement("div",{className:t},e.heading&&l.createElement("h3",{className:i},e.heading),e.children))}},2856:function(e,t,a){a.d(t,{A:function(){return i}});var l=a(6540),n="style-module--SlideContainer--60bf2";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(n).join(" "):n,l.createElement("div",{className:t,style:e.style},e.children)}},3122:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var l=a(4506),n=a(6540),i=a(7711),s=a(5032),r=a(3420),o=a(2856),c=a(6827),d=a(8877),m="style-module--Filter--31377",u="style-module--Listing--52eca",f="style-module--LoadMore--8b4c0",p="style-module--Option--83bb9",h="style-module--Options--3515b",g="style-module--Selected--f3165",y=a(7563);function b(e){var t;const a=e.pageContext.articles,[b,$]=n.useState(function(e){const t=[],a=[];return e.forEach((e=>{e.categories.forEach((l=>{if(a.includes(l)){const a=t.map((e=>e.label)).indexOf(l);t[a].relatedArticleIds.push(e.id)}else t.push({label:l,selected:!1,relatedArticleIds:[e.id]}),a.push(l)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(a)),[E,v]=n.useState(9);let k=[];const N=-1!==b.map((e=>e.selected)).indexOf(!0);N&&(k=b.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,a)=>a.indexOf(e)===t)));const x=null!==(t=(0,y.t)(e.pageContext.entityName))&&void 0!==t?t:"Articles";return n.createElement(n.Fragment,null,n.createElement(r.G,{title:`All ${x}`,useTitleTemplate:!0}),n.createElement(i.Y,null,n.createElement(s.w,{anchor:"articleListing",heading:x},n.createElement("div",{className:m},"Select categories to filter ",x.toLocaleLowerCase(),n.createElement(o.A,{additionalClasses:[h]},b.map(((e,t)=>n.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,l.A)(b),a=t.map((e=>e.label)).indexOf(e);t[a].selected=!t[a].selected,$(t)}(e.label),className:[p,!0===e.selected?g:null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),n.createElement("div",{className:u},a.filter((e=>!N||k.includes(e.id))).slice(0,E).map(((e,t)=>n.createElement(c.d,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),N&&k.length>E||!N&&a.length>E?n.createElement("div",{className:f},n.createElement(d.$,{type:d.V.BUTTON,label:"Load More",onClickHandler:()=>v((e=>e+6))})):null)))}},7563:function(e,t,a){function l(e,t){if(!e)return;if(void 0!==t&&1===t)return e;const a={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},l={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment","bison","cod","offspring","pike","salmon","shrimp","swine","trout","aircraft","hovercraft","spacecraft","sugar","tuna","you","wood"].indexOf(e.toLowerCase())>=0)return e;for(const n in l){const t=new RegExp(`${n}$`,"i"),a=l[n];if(t.test(e))return e.replace(t,a)}for(const n in a){const t=new RegExp(n,"i");if(t.test(e))return e.replace(t,a[n])}return e}a.d(t,{t:function(){return l}})}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-10886a845c268bee21e2.js.map