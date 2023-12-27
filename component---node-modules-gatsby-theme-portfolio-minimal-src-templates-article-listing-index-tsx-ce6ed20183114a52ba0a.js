"use strict";(self.webpackChunkportfolio=self.webpackChunkportfolio||[]).push([[226],{6636:function(e,t,a){a.d(t,{T:function(){return g}});var n=a(7294),l=a(1883),i=a(8032);!function(e,t){void 0===t&&(t={});var a=t.insertAt;if(e&&"undefined"!=typeof document){var n=document.head||document.getElementsByTagName("head")[0],l=document.createElement("style");l.type="text/css","top"===a&&n.firstChild?n.insertBefore(l,n.firstChild):n.appendChild(l),l.styleSheet?l.styleSheet.cssText=e:l.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var r=a(5400),s="style-module--Banner--d401d",o="style-module--Card--c661d",c="style-module--Category--eeb92",d="style-module--DescriptionWrapper--5f867",u="style-module--Details--5ba4b",m="style-module--Image--43f10",f="style-module--ImageWrapper--50300",p="style-module--ReadingTime--a0392",h="style-module--Title--de70d";function g(e){const{globalState:t}=(0,r.j1)(),a=t.theme===r.Q2.Dark,g=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),y=n.createElement("article",{className:o,style:a?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&n.createElement("div",{className:s},e.data.image&&e.data.image.src&&n.createElement(i.G,{className:f,imgClassName:m,objectFit:e.data.image.objectFit||"cover",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),n.createElement("div",{className:d},n.createElement("span",{className:c},n.createElement("u",null,e.data.category)),n.createElement("h4",{className:h},e.data.title),n.createElement("div",{className:u},`${["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(b=e.data.publishedAt).getMonth()]} ${b.getDate()}, ${b.getFullYear()}`,e.data.readingTime&&n.createElement("span",{className:p},e.data.readingTime))));var b;return g?n.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},y):n.createElement(l.Link,{to:e.data.link,title:e.data.title},y)}},6922:function(e,t,a){a.d(t,{z:function(){return s},L:function(){return r}});var n=a(7294),l=a(1883),i="style-module--Button--82b1f";let r=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function s(e){if(e.type===r.LINK){if(e.url)return e.externalLink?n.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):n.createElement(l.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error(`Button should be a ${e.type} but no URL is given!`)}if(e.type===r.BUTTON||e.type===r.SUBMIT){if(!e.onClickHandler)throw new Error(`Button should be a ${e.type} but no onClickHandler is given!`);return n.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}},9845:function(e,t,a){a.d(t,{$:function(){return s}});var n=a(7294),l="style-module--ContentWrapper --36dde",i="style-module--Heading--2c002",r="style-module--Section--1d871";function s(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(l).join(" "):l,n.createElement("section",{id:e.anchor,className:r},n.createElement("div",{className:t},e.heading&&n.createElement("h3",{className:i},e.heading),e.children))}},6360:function(e,t,a){a.d(t,{i:function(){return i}});var n=a(7294),l="style-module--SlideContainer--60bf2";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(l).join(" "):l,n.createElement("div",{className:t,style:e.style},e.children)}},6778:function(e,t,a){a.r(t),a.d(t,{default:function(){return b}});var n=a(5785),l=a(7294),i=a(344),r=a(9845),s=a(533),o=a(6360),c=a(6636),d=a(6922),u="style-module--Filter--31377",m="style-module--Listing--52eca",f="style-module--LoadMore--8b4c0",p="style-module--Option--83bb9",h="style-module--Options--3515b",g="style-module--Selected--f3165",y=a(1643);function b(e){var t;const a=e.pageContext.articles,[b,$]=l.useState(function(e){const t=[],a=[];return e.forEach((e=>{e.categories.forEach((n=>{if(a.includes(n)){const a=t.map((e=>e.label)).indexOf(n);t[a].relatedArticleIds.push(e.id)}else t.push({label:n,selected:!1,relatedArticleIds:[e.id]}),a.push(n)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(a)),[v,E]=l.useState(9);let k=[];const N=-1!==b.map((e=>e.selected)).indexOf(!0);N&&(k=b.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,a)=>a.indexOf(e)===t)));const x=null!==(t=(0,y._)(e.pageContext.entityName))&&void 0!==t?t:"Articles";return l.createElement(l.Fragment,null,l.createElement(s.p,{title:`All ${x}`,useTitleTemplate:!0}),l.createElement(i.T,null,l.createElement(r.$,{anchor:"articleListing",heading:x},l.createElement("div",{className:u},"Select categories to filter ",x.toLocaleLowerCase(),l.createElement(o.i,{additionalClasses:[h]},b.map(((e,t)=>l.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,n.Z)(b),a=t.map((e=>e.label)).indexOf(e);t[a].selected=!t[a].selected,$(t)}(e.label),className:[p,!0===e.selected?g:null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),l.createElement("div",{className:m},a.filter((e=>!N||k.includes(e.id))).slice(0,v).map(((e,t)=>l.createElement(c.T,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),N&&k.length>v||!N&&a.length>v?l.createElement("div",{className:f},l.createElement(d.z,{type:d.L.BUTTON,label:"Load More",onClickHandler:()=>function(e,t){const a=v+3;(t&&t>=a||!t&&e>=a)&&E(a)}(a.length,N?k.length:void 0)})):null)))}},1643:function(e,t,a){function n(e,t){if(!e)return;if(void 0!==t&&1===t)return e;const a={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},n={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment","bison","cod","offspring","pike","salmon","shrimp","swine","trout","aircraft","hovercraft","spacecraft","sugar","tuna","you","wood"].indexOf(e.toLowerCase())>=0)return e;for(const l in n){const t=new RegExp(`${l}$`,"i"),a=n[l];if(t.test(e))return e.replace(t,a)}for(const l in a){const t=new RegExp(l,"i");if(t.test(e))return e.replace(t,a[l])}return e}a.d(t,{_:function(){return n}})}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-ce6ed20183114a52ba0a.js.map