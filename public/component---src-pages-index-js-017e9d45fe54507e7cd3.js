"use strict";(self.webpackChunklucas_bevins_s_weird_site=self.webpackChunklucas_bevins_s_weird_site||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,l=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,a=/([\p{Alpha}\p{N}_]|$)/u,n=/[_.\- ]+/,c=new RegExp("^"+n.source),s=new RegExp(n.source+a.source,"gu"),u=new RegExp("\\d+"+a.source,"gu"),i=(e,a)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(a={pascalCase:!1,preserveConsecutiveUppercase:!1,...a},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const n=!1===a.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(a.locale),i=!1===a.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(a.locale);if(1===e.length)return a.pascalCase?i(e):n(e);return e!==n(e)&&(e=((e,r,a)=>{let n=!1,c=!1,s=!1;for(let u=0;u<e.length;u++){const i=e[u];n&&t.test(i)?(e=e.slice(0,u)+"-"+e.slice(u),n=!1,s=c,c=!0,u++):c&&s&&l.test(i)?(e=e.slice(0,u-1)+"-"+e.slice(u-1),s=c,c=!1,n=!0):(n=r(i)===i&&a(i)!==i,s=c,c=a(i)===i&&r(i)!==i)}return e})(e,n,i)),e=e.replace(c,""),e=a.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,n):n(e),a.pascalCase&&(e=i(e.charAt(0))+e.slice(1)),((e,t)=>(s.lastIndex=0,u.lastIndex=0,e.replace(s,((e,l)=>t(l))).replace(u,(e=>t(e)))))(e,i)};e.exports=i,e.exports.default=i},8678:function(e,t,l){var r=l(7294),a=l(4160);l(9357);t.Z=e=>{let{pageTitle:t,children:l}=e;return r.createElement("div",null,r.createElement("nav",null,r.createElement("ul",null,r.createElement("li",null,r.createElement(a.default,{to:"/"},"Home")),r.createElement("li",null,r.createElement(a.default,{to:"/about"},"About")),r.createElement("li",null,r.createElement(a.default,{to:"/blog"},"Blog")))),r.createElement("main",null,r.createElement("h1",null,t),l))}},9357:function(e,t,l){var r=l(7294),a=l(4160);t.Z=e=>{let{title:t}=e;const l=(0,a.K2)("3159585216");return r.createElement("title",null,t," | ",l.site.siteMetadata.title)}},8051:function(e,t,l){l.r(t),l.d(t,{Head:function(){return u},default:function(){return i}});var r={};l.r(r);var a=l(7294),n=l(8678),c=(l(3204),l(9357));const{IndexPage:s}=()=>a.createElement("main",null,a.createElement("h1",null,"Lucas Bevins's Weird Site"),a.createElement(n.Z,{pageTitle:"Home Page"},a.createElement("p",null,"This is my weird website."),a.createElement(r.default,{src:"../images/pfp.png",alt:"A fractal of arrows"}))),u=()=>a.createElement(c.Z,{title:"Home Page"});var i=s}}]);
//# sourceMappingURL=component---src-pages-index-js-017e9d45fe54507e7cd3.js.map