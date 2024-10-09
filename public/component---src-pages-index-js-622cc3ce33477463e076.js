"use strict";(self.webpackChunklucas_bevins_s_weird_site=self.webpackChunklucas_bevins_s_weird_site||[]).push([[678],{3204:function(e){const t=/[\p{Lu}]/u,a=/[\p{Ll}]/u,r=/^[\p{Lu}](?![\p{Lu}])/gu,n=/([\p{Alpha}\p{N}_]|$)/u,s=/[_.\- ]+/,i=new RegExp("^"+s.source),l=new RegExp(s.source+n.source,"gu"),o=new RegExp("\\d+"+n.source,"gu"),c=(e,n)=>{if("string"!=typeof e&&!Array.isArray(e))throw new TypeError("Expected the input to be `string | string[]`");if(n={pascalCase:!1,preserveConsecutiveUppercase:!1,...n},0===(e=Array.isArray(e)?e.map((e=>e.trim())).filter((e=>e.length)).join("-"):e.trim()).length)return"";const s=!1===n.locale?e=>e.toLowerCase():e=>e.toLocaleLowerCase(n.locale),c=!1===n.locale?e=>e.toUpperCase():e=>e.toLocaleUpperCase(n.locale);if(1===e.length)return n.pascalCase?c(e):s(e);return e!==s(e)&&(e=((e,r,n)=>{let s=!1,i=!1,l=!1;for(let o=0;o<e.length;o++){const c=e[o];s&&t.test(c)?(e=e.slice(0,o)+"-"+e.slice(o),s=!1,l=i,i=!0,o++):i&&l&&a.test(c)?(e=e.slice(0,o-1)+"-"+e.slice(o-1),l=i,i=!1,s=!0):(s=r(c)===c&&n(c)!==c,l=i,i=n(c)===c&&r(c)!==c)}return e})(e,s,c)),e=e.replace(i,""),e=n.preserveConsecutiveUppercase?((e,t)=>(r.lastIndex=0,e.replace(r,(e=>t(e)))))(e,s):s(e),n.pascalCase&&(e=c(e.charAt(0))+e.slice(1)),((e,t)=>(l.lastIndex=0,o.lastIndex=0,e.replace(l,((e,a)=>t(a))).replace(o,(e=>t(e)))))(e,c)};e.exports=c,e.exports.default=c},8032:function(e,t,a){a.d(t,{L:function(){return h},M:function(){return L},P:function(){return k},S:function(){return G},_:function(){return l},a:function(){return i},b:function(){return d},g:function(){return p},h:function(){return o}});var r=a(7294),n=(a(3204),a(5697)),s=a.n(n);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e},i.apply(this,arguments)}function l(e,t){if(null==e)return{};var a,r,n={},s=Object.keys(e);for(r=0;r<s.length;r++)t.indexOf(a=s[r])>=0||(n[a]=e[a]);return n}const o=()=>"undefined"!=typeof HTMLImageElement&&"loading"in HTMLImageElement.prototype;function c(){return"undefined"!=typeof GATSBY___IMAGE&&GATSBY___IMAGE}function u(e,t,a){const r={};let n="gatsby-image-wrapper";return c()||(r.position="relative",r.overflow="hidden"),"fixed"===a?(r.width=e,r.height=t):"constrained"===a&&(c()||(r.display="inline-block",r.verticalAlign="top"),n="gatsby-image-wrapper gatsby-image-wrapper-constrained"),{className:n,"data-gatsby-image-wrapper":"",style:r}}function d(e,t,a,r,n){return void 0===n&&(n={}),c()||(n=i({height:"100%",left:0,position:"absolute",top:0,transform:"translateZ(0)",transition:"opacity 250ms linear",width:"100%",willChange:"opacity"},n)),i({},a,{loading:r,shouldLoad:e,"data-main-image":"",style:i({},n,{opacity:t?1:0})})}function p(e,t,a,r,n,s,l,o){const u={};s&&(u.backgroundColor=s,"fixed"===a?(u.width=r,u.height=n,u.backgroundColor=s,u.position="relative"):("constrained"===a||"fullWidth"===a)&&(u.position="absolute",u.top=0,u.left=0,u.bottom=0,u.right=0)),l&&(u.objectFit=l),o&&(u.objectPosition=o);const d=i({},e,{"aria-hidden":!0,"data-placeholder-image":"",style:i({opacity:t?0:1,transition:"opacity 500ms linear"},u)});return c()||(d.style={height:"100%",left:0,position:"absolute",top:0,width:"100%"}),d}const g=["children"],m=function(e){let{layout:t,width:a,height:n}=e;return"fullWidth"===t?r.createElement("div",{"aria-hidden":!0,style:{paddingTop:n/a*100+"%"}}):"constrained"===t?r.createElement("div",{style:{maxWidth:a,display:"block"}},r.createElement("img",{alt:"",role:"presentation","aria-hidden":"true",src:"data:image/svg+xml;charset=utf-8,%3Csvg%20height='"+n+"'%20width='"+a+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E",style:{maxWidth:"100%",display:"block",position:"static"}})):null},h=function(e){let{children:t}=e,a=l(e,g);return r.createElement(r.Fragment,null,r.createElement(m,i({},a)),t,null)},f=["src","srcSet","loading","alt","shouldLoad"],y=["fallback","sources","shouldLoad"],b=function(e){let{src:t,srcSet:a,loading:n,alt:s="",shouldLoad:o}=e,c=l(e,f);return r.createElement("img",i({},c,{decoding:"async",loading:n,src:o?t:void 0,"data-src":o?void 0:t,srcSet:o?a:void 0,"data-srcset":o?void 0:a,alt:s}))},w=function(e){let{fallback:t,sources:a=[],shouldLoad:n=!0}=e,s=l(e,y);const o=s.sizes||(null==t?void 0:t.sizes),c=r.createElement(b,i({},s,t,{sizes:o,shouldLoad:n}));return a.length?r.createElement("picture",null,a.map((e=>{let{media:t,srcSet:a,type:s}=e;return r.createElement("source",{key:t+"-"+s+"-"+a,type:s,media:t,srcSet:n?a:void 0,"data-srcset":n?void 0:a,sizes:o})})),c):c};var v;b.propTypes={src:n.string.isRequired,alt:n.string.isRequired,sizes:n.string,srcSet:n.string,shouldLoad:n.bool},w.displayName="Picture",w.propTypes={alt:n.string.isRequired,shouldLoad:n.bool,fallback:n.exact({src:n.string.isRequired,srcSet:n.string,sizes:n.string}),sources:n.arrayOf(n.oneOfType([n.exact({media:n.string.isRequired,type:n.string,sizes:n.string,srcSet:n.string.isRequired}),n.exact({media:n.string,type:n.string.isRequired,sizes:n.string,srcSet:n.string.isRequired})]))};const E=["fallback"],k=function(e){let{fallback:t}=e,a=l(e,E);return t?r.createElement(w,i({},a,{fallback:{src:t},"aria-hidden":!0,alt:""})):r.createElement("div",i({},a))};k.displayName="Placeholder",k.propTypes={fallback:n.string,sources:null==(v=w.propTypes)?void 0:v.sources,alt:function(e,t,a){return e[t]?new Error("Invalid prop `"+t+"` supplied to `"+a+"`. Validation failed."):null}};const L=function(e){return r.createElement(r.Fragment,null,r.createElement(w,i({},e)),r.createElement("noscript",null,r.createElement(w,i({},e,{shouldLoad:!0}))))};L.displayName="MainImage",L.propTypes=w.propTypes;const C=["as","className","class","style","image","loading","imgClassName","imgStyle","backgroundColor","objectFit","objectPosition"],S=["style","className"],x=e=>e.replace(/\n/g,""),_=function(e,t,a){for(var r=arguments.length,n=new Array(r>3?r-3:0),i=3;i<r;i++)n[i-3]=arguments[i];return e.alt||""===e.alt?s().string.apply(s(),[e,t,a].concat(n)):new Error('The "alt" prop is required in '+a+'. If the image is purely presentational then pass an empty string: e.g. alt="". Learn more: https://a11y-style-guide.com/style-guide/section-media.html')},T={image:s().object.isRequired,alt:_},I=["as","image","style","backgroundColor","className","class","onStartLoad","onLoad","onError"],N=["style","className"],A=new Set;let O,j;const R=function(e){let{as:t="div",image:n,style:s,backgroundColor:c,className:d,class:p,onStartLoad:g,onLoad:m,onError:h}=e,f=l(e,I);const{width:y,height:b,layout:w}=n,v=u(y,b,w),{style:E,className:k}=v,L=l(v,N),C=(0,r.useRef)(),S=(0,r.useMemo)((()=>JSON.stringify(n.images)),[n.images]);p&&(d=p);const x=function(e,t,a){let r="";return"fullWidth"===e&&(r='<div aria-hidden="true" style="padding-top: '+a/t*100+'%;"></div>'),"constrained"===e&&(r='<div style="max-width: '+t+'px; display: block;"><img alt="" role="presentation" aria-hidden="true" src="data:image/svg+xml;charset=utf-8,%3Csvg%20height=\''+a+"'%20width='"+t+"'%20xmlns='http://www.w3.org/2000/svg'%20version='1.1'%3E%3C/svg%3E\" style=\"max-width: 100%; display: block; position: static;\"></div>"),r}(w,y,b);return(0,r.useEffect)((()=>{O||(O=a.e(731).then(a.bind(a,6731)).then((e=>{let{renderImageToString:t,swapPlaceholderImage:a}=e;return j=t,{renderImageToString:t,swapPlaceholderImage:a}})));const e=C.current.querySelector("[data-gatsby-image-ssr]");if(e&&o())return e.complete?(null==g||g({wasCached:!0}),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)):(null==g||g({wasCached:!0}),e.addEventListener("load",(function t(){e.removeEventListener("load",t),null==m||m({wasCached:!0}),setTimeout((()=>{e.removeAttribute("data-gatsby-image-ssr")}),0)}))),void A.add(S);if(j&&A.has(S))return;let t,r;return O.then((e=>{let{renderImageToString:a,swapPlaceholderImage:l}=e;C.current&&(C.current.innerHTML=a(i({isLoading:!0,isLoaded:A.has(S),image:n},f)),A.has(S)||(t=requestAnimationFrame((()=>{C.current&&(r=l(C.current,S,A,s,g,m,h))}))))})),()=>{t&&cancelAnimationFrame(t),r&&r()}}),[n]),(0,r.useLayoutEffect)((()=>{A.has(S)&&j&&(C.current.innerHTML=j(i({isLoading:A.has(S),isLoaded:A.has(S),image:n},f)),null==g||g({wasCached:!0}),null==m||m({wasCached:!0}))}),[n]),(0,r.createElement)(t,i({},L,{style:i({},E,s,{backgroundColor:c}),className:k+(d?" "+d:""),ref:C,dangerouslySetInnerHTML:{__html:x},suppressHydrationWarning:!0}))},q=(0,r.memo)((function(e){return e.image?(c(),(0,r.createElement)(R,e)):null}));q.propTypes=T,q.displayName="GatsbyImage";const P=["src","__imageData","__error","width","height","aspectRatio","tracedSVGOptions","placeholder","formats","quality","transformOptions","jpgOptions","pngOptions","webpOptions","avifOptions","blurredOptions","breakpoints","outputPixelDensities"];function M(e){return function(t){let{src:a,__imageData:n,__error:s}=t,o=l(t,P);return s&&console.warn(s),n?r.createElement(e,i({image:n},o)):(console.warn("Image not loaded",a),null)}}const W=M((function(e){let{as:t="div",className:a,class:n,style:s,image:o,loading:c="lazy",imgClassName:g,imgStyle:m,backgroundColor:f,objectFit:y,objectPosition:b}=e,w=l(e,C);if(!o)return console.warn("[gatsby-plugin-image] Missing image prop"),null;n&&(a=n),m=i({objectFit:y,objectPosition:b,backgroundColor:f},m);const{width:v,height:E,layout:_,images:T,placeholder:I,backgroundColor:N}=o,A=u(v,E,_),{style:O,className:j}=A,R=l(A,S),q={fallback:void 0,sources:[]};return T.fallback&&(q.fallback=i({},T.fallback,{srcSet:T.fallback.srcSet?x(T.fallback.srcSet):void 0})),T.sources&&(q.sources=T.sources.map((e=>i({},e,{srcSet:x(e.srcSet)})))),r.createElement(t,i({},R,{style:i({},O,s,{backgroundColor:f}),className:j+(a?" "+a:"")}),r.createElement(h,{layout:_,width:v,height:E},r.createElement(k,i({},p(I,!1,_,v,E,N,y,b))),r.createElement(L,i({"data-gatsby-image-ssr":"",className:g},w,d("eager"===c,!1,q,c,m)))))})),z=function(e,t){for(var a=arguments.length,r=new Array(a>2?a-2:0),n=2;n<a;n++)r[n-2]=arguments[n];return"fullWidth"!==e.layout||"width"!==t&&"height"!==t||!e[t]?s().number.apply(s(),[e,t].concat(r)):new Error('"'+t+'" '+e[t]+" may not be passed when layout is fullWidth.")},F=new Set(["fixed","fullWidth","constrained"]),H={src:s().string.isRequired,alt:_,width:z,height:z,sizes:s().string,layout:e=>{if(void 0!==e.layout&&!F.has(e.layout))return new Error("Invalid value "+e.layout+'" provided for prop "layout". Defaulting to "constrained". Valid values are "fixed", "fullWidth" or "constrained".')}};W.displayName="StaticImage",W.propTypes=H;const G=M(q);G.displayName="StaticImage",G.propTypes=H},6558:function(e,t,a){a.r(t),a.d(t,{Head:function(){return i}});var r=a(7294),n=a(4160),s=a(8032);const i=()=>r.createElement("title",null,"Home Page");t.default=()=>r.createElement("main",null,r.createElement("h1",null,"Lucas Bevins's Weird Site"),r.createElement(n.rU,{to:"/about"},"About"),r.createElement("p",null,"I'm making this by following the Gatsby Tutorial."),r.createElement(s.S,{alt:"pfp",src:"../images/pfp.png"}))}}]);
//# sourceMappingURL=component---src-pages-index-js-622cc3ce33477463e076.js.map