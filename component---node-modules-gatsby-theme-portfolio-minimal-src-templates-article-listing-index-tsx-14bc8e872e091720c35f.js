"use strict";(self.webpackChunkgatsby_theme_portfolio_minimal=self.webpackChunkgatsby_theme_portfolio_minimal||[]).push([[828],{1268:function(e,t,n){n.d(t,{y:function(){return y}});var r=n(1504),o=n(4056),i=n(1536);!function(e,t){void 0===t&&(t={});var n=t.insertAt;if(e&&"undefined"!=typeof document){var r=document.head||document.getElementsByTagName("head")[0],o=document.createElement("style");o.type="text/css","top"===n&&r.firstChild?r.insertBefore(o,r.firstChild):r.appendChild(o),o.styleSheet?o.styleSheet.cssText=e:o.appendChild(document.createTextNode(e))}}('.styles_skeleton__tyzRD{background:#eff1f6;display:inline-block;line-height:1;overflow:hidden;position:relative}.styles_skeleton__tyzRD:before{animation:styles_skeleton-progress__aezri 1.2s ease-in-out infinite;background-image:linear-gradient(90deg,hsla(0,0%,100%,0),hsla(0,0%,100%,.6),hsla(0,0%,100%,0));content:"";height:100%;left:-500px;position:absolute;top:0;width:500px}@keyframes styles_skeleton-progress__aezri{0%{left:-500px}to{left:100%}}');var a=n(2824),c="style-module--Banner--d401d",l="style-module--Card--c661d",u="style-module--Category--eeb92",s="style-module--DescriptionWrapper--5f867",f="style-module--Details--5ba4b",d="style-module--Image--43f10",p="style-module--ImageWrapper--50300",m="style-module--ReadingTime--a0392",v="style-module--Title--de70d";function y(e){const{globalState:t}=(0,a.c9)(),n=t.theme===a.So.Dark,y=e.data.link.indexOf("://")>0||0===e.data.link.indexOf("//"),h=r.createElement("article",{className:l,style:n?{border:"0.125rem solid var(--primary-color)"}:void 0},e.showBanner&&r.createElement("div",{className:c},e.data.image&&e.data.image.src&&r.createElement(i.G,{className:p,imgClassName:d,objectFit:e.data.image.objectFit||"cover",image:e.data.image.src.childImageSharp.gatsbyImageData,alt:e.data.image.alt||e.data.title})),r.createElement("div",{className:s},r.createElement("span",{className:u},r.createElement("u",null,e.data.category)),r.createElement("h4",{className:v},e.data.title),r.createElement("div",{className:f},["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"][(b=e.data.publishedAt).getMonth()]+" "+b.getDate()+", "+b.getFullYear(),e.data.readingTime&&r.createElement("span",{className:m},e.data.readingTime))));var b;return y?r.createElement("a",{href:e.data.link,target:"_blank",rel:"noopener noreferrer",title:e.data.title},h):r.createElement(o.Link,{to:e.data.link,title:e.data.title},h)}},9356:function(e,t,n){n.d(t,{q:function(){return c},i:function(){return a}});var r=n(1504),o=n(4056),i="style-module--Button--82b1f";let a=function(e){return e.BUTTON="button",e.SUBMIT="submit",e.LINK="link",e}({});function c(e){if(e.type===a.LINK){if(e.url)return e.externalLink?r.createElement("a",{id:e.id,className:i,href:e.url,target:"_blank",rel:"noopener noreferrer","aria-label":"External Link"},e.label):r.createElement(o.Link,{id:e.id,to:e.url,className:i},e.label);throw new Error("Button should be a "+e.type+" but no URL is given!")}if(e.type===a.BUTTON||e.type===a.SUBMIT){if(!e.onClickHandler)throw new Error("Button should be a "+e.type+" but no onClickHandler is given!");return r.createElement("button",{id:e.id,className:i,type:e.type,onClick:e.onClickHandler},e.label)}throw new Error("Unknown button type specified.")}},4952:function(e,t,n){n.d(t,{i:function(){return c}});var r=n(1504),o="style-module--ContentWrapper --36dde",i="style-module--Heading--2c002",a="style-module--Section--1d871";function c(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("section",{id:e.anchor,className:a},r.createElement("div",{className:t},e.heading&&r.createElement("h3",{className:i},e.heading),e.children))}},1532:function(e,t,n){n.d(t,{u:function(){return i}});var r=n(1504),o="style-module--SlideContainer--60bf2";function i(e){let t;return t=e.additionalClasses?e.additionalClasses.concat(o).join(" "):o,r.createElement("div",{className:t,style:e.style},e.children)}},1808:function(e,t,n){n.r(t),n.d(t,{default:function(){return b}});n(7196);var r=n(8764),o=n(1504),i=n(7656),a=n(4952),c=n(6928),l=n(1532),u=n(1268),s=n(9356),f="style-module--Filter--31377",d="style-module--Listing--52eca",p="style-module--LoadMore--8b4c0",m="style-module--Option--83bb9",v="style-module--Options--3515b",y="style-module--Selected--f3165",h=n(5544);function b(e){var t;const n=e.pageContext.articles,[b,g]=o.useState(function(e){const t=[],n=[];return e.forEach((e=>{e.categories.forEach((r=>{if(n.includes(r)){const n=t.map((e=>e.label)).indexOf(r);t[n].relatedArticleIds.push(e.id)}else t.push({label:r,selected:!1,relatedArticleIds:[e.id]}),n.push(r)}))})),t.sort(((e,t)=>e.relatedArticleIds.length>t.relatedArticleIds.length?-1:1))}(n)),[x,w]=o.useState(9);let E=[];const O=-1!==b.map((e=>e.selected)).indexOf(!0);O&&(E=b.filter((e=>e.selected)).map((e=>e.relatedArticleIds)).flat(1).filter(((e,t,n)=>n.indexOf(e)===t)));const k=null!==(t=(0,h.u)(e.pageContext.entityName))&&void 0!==t?t:"Articles";return o.createElement(o.Fragment,null,o.createElement(c.y,{title:"All "+k,useTitleTemplate:!0}),o.createElement(i.K,null,o.createElement(a.i,{anchor:"articleListing",heading:k},o.createElement("div",{className:f},"Select categories to filter ",k.toLocaleLowerCase(),o.createElement(l.u,{additionalClasses:[v]},b.map(((e,t)=>o.createElement("div",{key:t,role:"button",onClick:()=>function(e){const t=(0,r.c)(b),n=t.map((e=>e.label)).indexOf(e);t[n].selected=!t[n].selected,g(t)}(e.label),className:[m,!0===e.selected?y:null].join(" ")},e.label," (",e.relatedArticleIds.length,")"))))),o.createElement("div",{className:d},n.filter((e=>!O||E.includes(e.id))).slice(0,x).map(((e,t)=>o.createElement(u.y,{key:t,showBanner:!0,data:{image:e.banner,title:e.title,category:e.categories.join(" / "),publishedAt:new Date(e.date.replace(/-/g,"/")),link:e.slug,readingTime:e.readingTime.text}})))),O&&E.length>x||!O&&n.length>x?o.createElement("div",{className:p},o.createElement(s.q,{type:s.i.BUTTON,label:"Load More",onClickHandler:()=>function(e,t){const n=x+3;(t&&t>=n||!t&&e>=n)&&w(n)}(n.length,O?E.length:void 0)})):null)))}},5544:function(e,t,n){function r(e,t){if(!e)return;if(void 0!==t&&1===t)return e;const n={"(quiz)$":"$1zes","^(ox)$":"$1en","([m|l])ouse$":"$1ice","(matr|vert|ind)ix|ex$":"$1ices","(x|ch|ss|sh)$":"$1es","([^aeiouy]|qu)y$":"$1ies","(hive)$":"$1s","(?:([^f])fe|([lr])f)$":"$1$2ves","(shea|lea|loa|thie)f$":"$1ves",sis$:"ses","([ti])um$":"$1a","(tomat|potat|ech|her|vet)o$":"$1oes","(bu)s$":"$1ses","(alias)$":"$1es","(octop)us$":"$1i","(ax|test)is$":"$1es","(us)$":"$1es","([^s]+)$":"$1s"},r={move:"moves",foot:"feet",goose:"geese",sex:"sexes",child:"children",man:"men",tooth:"teeth",person:"people"};if(["sheep","fish","deer","moose","series","species","money","rice","information","equipment","bison","cod","offspring","pike","salmon","shrimp","swine","trout","aircraft","hovercraft","spacecraft","sugar","tuna","you","wood"].indexOf(e.toLowerCase())>=0)return e;for(const o in r){const t=new RegExp(o+"$","i"),n=r[o];if(t.test(e))return e.replace(t,n)}for(const o in n){const t=new RegExp(o,"i");if(t.test(e))return e.replace(t,n[o])}return e}n.d(t,{u:function(){return r}})},1896:function(e,t,n){var r=n(9063),o=n(4596),i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not a function")}},2328:function(e,t,n){var r=n(1840),o=n(8340),i=n(368).f,a=r("unscopables"),c=Array.prototype;void 0===c[a]&&i(c,a,{configurable:!0,value:o(null)}),e.exports=function(e){c[a][e]=!0}},8424:function(e,t,n){var r=n(8428),o=String,i=TypeError;e.exports=function(e){if(r(e))return e;throw new i(o(e)+" is not an object")}},2196:function(e,t,n){var r=n(9740),o=n(4160),i=n(9480),a=function(e){return function(t,n,a){var c,l=r(t),u=i(l),s=o(a,u);if(e&&n!=n){for(;u>s;)if((c=l[s++])!=c)return!0}else for(;u>s;s++)if((e||s in l)&&l[s]===n)return e||s||0;return!e&&-1}};e.exports={includes:a(!0),indexOf:a(!1)}},5983:function(e,t,n){var r=n(1447),o=r({}.toString),i=r("".slice);e.exports=function(e){return i(o(e),8,-1)}},1544:function(e,t,n){var r=n(5624),o=Object.defineProperty;e.exports=function(e,t){try{o(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},3528:function(e,t,n){var r=n(6040);e.exports=!r((function(){return 7!==Object.defineProperty({},1,{get:function(){return 7}})[1]}))},9308:function(e,t,n){var r=n(5624),o=n(8428),i=r.document,a=o(i)&&o(i.createElement);e.exports=function(e){return a?i.createElement(e):{}}},8232:function(e){e.exports="undefined"!=typeof navigator&&String(navigator.userAgent)||""},3356:function(e,t,n){var r,o,i=n(5624),a=n(8232),c=i.process,l=i.Deno,u=c&&c.versions||l&&l.version,s=u&&u.v8;s&&(o=(r=s.split("."))[0]>0&&r[0]<4?1:+(r[0]+r[1])),!o&&a&&(!(r=a.match(/Edge\/(\d+)/))||r[1]>=74)&&(r=a.match(/Chrome\/(\d+)/))&&(o=+r[1]),e.exports=o},4656:function(e){e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6040:function(e){e.exports=function(e){try{return!!e()}catch(t){return!0}}},5744:function(e,t,n){var r=n(6040);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},892:function(e,t,n){var r=n(5744),o=Function.prototype.call;e.exports=r?o.bind(o):function(){return o.apply(o,arguments)}},1447:function(e,t,n){var r=n(5744),o=Function.prototype,i=o.call,a=r&&o.bind.bind(i,i);e.exports=r?a:function(e){return function(){return i.apply(e,arguments)}}},4960:function(e,t,n){var r=n(5624),o=n(9063);e.exports=function(e,t){return arguments.length<2?(n=r[e],o(n)?n:void 0):r[e]&&r[e][t];var n}},364:function(e,t,n){var r=n(1896),o=n(952);e.exports=function(e,t){var n=e[t];return o(n)?void 0:r(n)}},5624:function(e,t,n){var r=function(e){return e&&e.Math===Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||r("object"==typeof this&&this)||function(){return this}()||Function("return this")()},6216:function(e,t,n){var r=n(1447),o=n(6804),i=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return i(o(e),t)}},6480:function(e){e.exports={}},6836:function(e,t,n){var r=n(4960);e.exports=r("document","documentElement")},8404:function(e,t,n){var r=n(3528),o=n(6040),i=n(9308);e.exports=!r&&!o((function(){return 7!==Object.defineProperty(i("div"),"a",{get:function(){return 7}}).a}))},6212:function(e,t,n){var r=n(1447),o=n(6040),i=n(5983),a=Object,c=r("".split);e.exports=o((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"===i(e)?c(e,""):a(e)}:a},9063:function(e){var t="object"==typeof document&&document.all;e.exports=void 0===t&&void 0!==t?function(e){return"function"==typeof e||e===t}:function(e){return"function"==typeof e}},952:function(e){e.exports=function(e){return null==e}},8428:function(e,t,n){var r=n(9063);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},424:function(e){e.exports=!1},6232:function(e,t,n){var r=n(4960),o=n(9063),i=n(6056),a=n(9448),c=Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return o(t)&&i(t.prototype,c(e))}},9480:function(e,t,n){var r=n(960);e.exports=function(e){return r(e.length)}},1736:function(e){var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},8340:function(e,t,n){var r,o=n(8424),i=n(5045),a=n(4656),c=n(6480),l=n(6836),u=n(9308),s=n(5811),f="prototype",d="script",p=s("IE_PROTO"),m=function(){},v=function(e){return"<"+d+">"+e+"</"+d+">"},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},h=function(){try{r=new ActiveXObject("htmlfile")}catch(i){}var e,t,n;h="undefined"!=typeof document?document.domain&&r?y(r):(t=u("iframe"),n="java"+d+":",t.style.display="none",l.appendChild(t),t.src=String(n),(e=t.contentWindow.document).open(),e.write(v("document.F=Object")),e.close(),e.F):y(r);for(var o=a.length;o--;)delete h[f][a[o]];return h()};c[p]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=o(e),n=new m,m[f]=null,n[p]=e):n=h(),void 0===t?n:i.f(n,t)}},5045:function(e,t,n){var r=n(3528),o=n(4859),i=n(368),a=n(8424),c=n(9740),l=n(4152);t.f=r&&!o?Object.defineProperties:function(e,t){a(e);for(var n,r=c(t),o=l(t),u=o.length,s=0;u>s;)i.f(e,n=o[s++],r[n]);return e}},368:function(e,t,n){var r=n(3528),o=n(8404),i=n(4859),a=n(8424),c=n(8732),l=TypeError,u=Object.defineProperty,s=Object.getOwnPropertyDescriptor,f="enumerable",d="configurable",p="writable";t.f=r?i?function(e,t,n){if(a(e),t=c(t),a(n),"function"==typeof e&&"prototype"===t&&"value"in n&&p in n&&!n[p]){var r=s(e,t);r&&r[p]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:f in n?n[f]:r[f],writable:!1})}return u(e,t,n)}:u:function(e,t,n){if(a(e),t=c(t),a(n),o)try{return u(e,t,n)}catch(r){}if("get"in n||"set"in n)throw new l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},6056:function(e,t,n){var r=n(1447);e.exports=r({}.isPrototypeOf)},9232:function(e,t,n){var r=n(1447),o=n(6216),i=n(9740),a=n(2196).indexOf,c=n(6480),l=r([].push);e.exports=function(e,t){var n,r=i(e),u=0,s=[];for(n in r)!o(c,n)&&o(r,n)&&l(s,n);for(;t.length>u;)o(r,n=t[u++])&&(~a(s,n)||l(s,n));return s}},4152:function(e,t,n){var r=n(9232),o=n(4656);e.exports=Object.keys||function(e){return r(e,o)}},7664:function(e,t,n){var r=n(892),o=n(9063),i=n(8428),a=TypeError;e.exports=function(e,t){var n,c;if("string"===t&&o(n=e.toString)&&!i(c=r(n,e)))return c;if(o(n=e.valueOf)&&!i(c=r(n,e)))return c;if("string"!==t&&o(n=e.toString)&&!i(c=r(n,e)))return c;throw new a("Can't convert object to primitive value")}},2696:function(e,t,n){var r=n(952),o=TypeError;e.exports=function(e){if(r(e))throw new o("Can't call method on "+e);return e}},5811:function(e,t,n){var r=n(8196),o=n(320),i=r("keys");e.exports=function(e){return i[e]||(i[e]=o(e))}},9136:function(e,t,n){var r=n(5624),o=n(1544),i="__core-js_shared__",a=r[i]||o(i,{});e.exports=a},8196:function(e,t,n){var r=n(424),o=n(9136);(e.exports=function(e,t){return o[e]||(o[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.35.1",mode:r?"pure":"global",copyright:"© 2014-2024 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.35.1/LICENSE",source:"https://github.com/zloirock/core-js"})},8972:function(e,t,n){var r=n(3356),o=n(6040),i=n(5624).String;e.exports=!!Object.getOwnPropertySymbols&&!o((function(){var e=Symbol("symbol detection");return!i(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},4160:function(e,t,n){var r=n(3288),o=Math.max,i=Math.min;e.exports=function(e,t){var n=r(e);return n<0?o(n+t,0):i(n,t)}},9740:function(e,t,n){var r=n(6212),o=n(2696);e.exports=function(e){return r(o(e))}},3288:function(e,t,n){var r=n(1736);e.exports=function(e){var t=+e;return t!=t||0===t?0:r(t)}},960:function(e,t,n){var r=n(3288),o=Math.min;e.exports=function(e){var t=r(e);return t>0?o(t,9007199254740991):0}},6804:function(e,t,n){var r=n(2696),o=Object;e.exports=function(e){return o(r(e))}},8176:function(e,t,n){var r=n(892),o=n(8428),i=n(6232),a=n(364),c=n(7664),l=n(1840),u=TypeError,s=l("toPrimitive");e.exports=function(e,t){if(!o(e)||i(e))return e;var n,l=a(e,s);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!o(n)||i(n))return n;throw new u("Can't convert object to primitive value")}return void 0===t&&(t="number"),c(e,t)}},8732:function(e,t,n){var r=n(8176),o=n(6232);e.exports=function(e){var t=r(e,"string");return o(t)?t:t+""}},4596:function(e){var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},320:function(e,t,n){var r=n(1447),o=0,i=Math.random(),a=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+a(++o+i,36)}},9448:function(e,t,n){var r=n(8972);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},4859:function(e,t,n){var r=n(3528),o=n(6040);e.exports=r&&o((function(){return 42!==Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},1840:function(e,t,n){var r=n(5624),o=n(8196),i=n(6216),a=n(320),c=n(8972),l=n(9448),u=r.Symbol,s=o("wks"),f=l?u.for||u:u&&u.withoutSetter||a;e.exports=function(e){return i(s,e)||(s[e]=c&&i(u,e)?u[e]:f("Symbol."+e)),s[e]}},7196:function(e,t,n){n(2328)("flat")}}]);
//# sourceMappingURL=component---node-modules-gatsby-theme-portfolio-minimal-src-templates-article-listing-index-tsx-14bc8e872e091720c35f.js.map