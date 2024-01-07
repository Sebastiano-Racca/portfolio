import{s as Me,A as Be,f as O,a as M,g as I,h as fe,c as x,d as j,j as s,i as V,u as _,C as Ue,D as Ye,E as De,I as We,y as Ze,o as Ke,p as Le,R as ye,e as ae,w as Ee,T as xe,v as Ce,N as F}from"../chunks/scheduler.e99bcb8c.js";import{S as je,i as Re,a as oe,h as Ve,t as ie,j as Xe,b as de,d as ce,m as ue,e as me}from"../chunks/index.f3b46ba6.js";import{P as Je}from"../chunks/post.d598f7f2.js";import{i as He,U as re,e as le}from"../chunks/tippy.ee24462d.js";import{a as Qe}from"../chunks/image_banner.7a6e0902.js";import{Y as be}from"../chunks/youtube.905f3abb.js";/*! medium-zoom 1.0.8 | MIT License | https://github.com/francoischalifour/medium-zoom */var ee=Object.assign||function(a){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var t in o)Object.prototype.hasOwnProperty.call(o,t)&&(a[t]=o[t])}return a},ve=function(e){return e.tagName==="IMG"},$e=function(e){return NodeList.prototype.isPrototypeOf(e)},_e=function(e){return e&&e.nodeType===1},Oe=function(e){var o=e.currentSrc||e.src;return o.substr(-4).toLowerCase()===".svg"},Ie=function(e){try{return Array.isArray(e)?e.filter(ve):$e(e)?[].slice.call(e).filter(ve):_e(e)?[e].filter(ve):typeof e=="string"?[].slice.call(document.querySelectorAll(e)).filter(ve):[]}catch{throw new TypeError(`The provided selector is invalid.
Expects a CSS selector, a Node element, a NodeList or an array.
See: https://github.com/francoischalifour/medium-zoom`)}},et=function(e){var o=document.createElement("div");return o.classList.add("medium-zoom-overlay"),o.style.background=e,o},tt=function(e){var o=e.getBoundingClientRect(),t=o.top,n=o.left,i=o.width,l=o.height,m=e.cloneNode(),C=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,L=window.pageXOffset||document.documentElement.scrollLeft||document.body.scrollLeft||0;return m.removeAttribute("id"),m.style.position="absolute",m.style.top=t+C+"px",m.style.left=n+L+"px",m.style.width=i+"px",m.style.height=l+"px",m.style.transform="",m},ne=function(e,o){var t=ee({bubbles:!1,cancelable:!1,detail:void 0},o);if(typeof window.CustomEvent=="function")return new CustomEvent(e,t);var n=document.createEvent("CustomEvent");return n.initCustomEvent(e,t.bubbles,t.cancelable,t.detail),n},nt=function a(e){var o=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},t=window.Promise||function(c){function u(){}c(u,u)},n=function(c){var u=c.target;if(u===X){p();return}S.indexOf(u)!==-1&&T({target:u})},i=function(){if(!(R||!r.original)){var c=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0;Math.abs(B-c)>v.scrollOffset&&setTimeout(p,150)}},l=function(c){var u=c.key||c.keyCode;(u==="Escape"||u==="Esc"||u===27)&&p()},m=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=c;if(c.background&&(X.style.background=c.background),c.container&&c.container instanceof Object&&(u.container=ee({},v.container,c.container)),c.template){var E=_e(c.template)?c.template:document.querySelector(c.template);u.template=E}return v=ee({},v,u),S.forEach(function(y){y.dispatchEvent(ne("medium-zoom:update",{detail:{zoom:w}}))}),w},C=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{};return a(ee({},v,c))},L=function(){for(var c=arguments.length,u=Array(c),E=0;E<c;E++)u[E]=arguments[E];var y=u.reduce(function(g,A){return[].concat(g,Ie(A))},[]);return y.filter(function(g){return S.indexOf(g)===-1}).forEach(function(g){S.push(g),g.classList.add("medium-zoom-image")}),d.forEach(function(g){var A=g.type,N=g.listener,D=g.options;y.forEach(function(q){q.addEventListener(A,N,D)})}),w},b=function(){for(var c=arguments.length,u=Array(c),E=0;E<c;E++)u[E]=arguments[E];r.zoomed&&p();var y=u.length>0?u.reduce(function(g,A){return[].concat(g,Ie(A))},[]):S;return y.forEach(function(g){g.classList.remove("medium-zoom-image"),g.dispatchEvent(ne("medium-zoom:detach",{detail:{zoom:w}}))}),S=S.filter(function(g){return y.indexOf(g)===-1}),w},h=function(c,u){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return S.forEach(function(y){y.addEventListener("medium-zoom:"+c,u,E)}),d.push({type:"medium-zoom:"+c,listener:u,options:E}),w},H=function(c,u){var E=arguments.length>2&&arguments[2]!==void 0?arguments[2]:{};return S.forEach(function(y){y.removeEventListener("medium-zoom:"+c,u,E)}),d=d.filter(function(y){return!(y.type==="medium-zoom:"+c&&y.listener.toString()===u.toString())}),w},z=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=c.target,E=function(){var g={width:document.documentElement.clientWidth,height:document.documentElement.clientHeight,left:0,top:0,right:0,bottom:0},A=void 0,N=void 0;if(v.container)if(v.container instanceof Object)g=ee({},g,v.container),A=g.width-g.left-g.right-v.margin*2,N=g.height-g.top-g.bottom-v.margin*2;else{var D=_e(v.container)?v.container:document.querySelector(v.container),q=D.getBoundingClientRect(),U=q.width,se=q.height,W=q.left,ge=q.top;g=ee({},g,{width:U,height:se,left:W,top:ge})}A=A||g.width-v.margin*2,N=N||g.height-v.margin*2;var Z=r.zoomedHd||r.original,J=Oe(Z)?A:Z.naturalWidth||A,he=Oe(Z)?N:Z.naturalHeight||N,Q=Z.getBoundingClientRect(),K=Q.top,te=Q.left,k=Q.width,f=Q.height,pe=Math.min(Math.max(k,J),A)/k,qe=Math.min(Math.max(f,he),N)/f,ze=Math.min(pe,qe),Fe=(-te+(A-k)/2+v.margin+g.left)/ze,Ge=(-K+(N-f)/2+v.margin+g.top)/ze,we="scale("+ze+") translate3d("+Fe+"px, "+Ge+"px, 0)";r.zoomed.style.transform=we,r.zoomedHd&&(r.zoomedHd.style.transform=we)};return new t(function(y){if(u&&S.indexOf(u)===-1){y(w);return}var g=function U(){R=!1,r.zoomed.removeEventListener("transitionend",U),r.original.dispatchEvent(ne("medium-zoom:opened",{detail:{zoom:w}})),y(w)};if(r.zoomed){y(w);return}if(u)r.original=u;else if(S.length>0){var A=S;r.original=A[0]}else{y(w);return}if(r.original.dispatchEvent(ne("medium-zoom:open",{detail:{zoom:w}})),B=window.pageYOffset||document.documentElement.scrollTop||document.body.scrollTop||0,R=!0,r.zoomed=tt(r.original),document.body.appendChild(X),v.template){var N=_e(v.template)?v.template:document.querySelector(v.template);r.template=document.createElement("div"),r.template.appendChild(N.content.cloneNode(!0)),document.body.appendChild(r.template)}if(r.original.parentElement&&r.original.parentElement.tagName==="PICTURE"&&r.original.currentSrc&&(r.zoomed.src=r.original.currentSrc),document.body.appendChild(r.zoomed),window.requestAnimationFrame(function(){document.body.classList.add("medium-zoom--opened")}),r.original.classList.add("medium-zoom-image--hidden"),r.zoomed.classList.add("medium-zoom-image--opened"),r.zoomed.addEventListener("click",p),r.zoomed.addEventListener("transitionend",g),r.original.getAttribute("data-zoom-src")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("srcset"),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading"),r.zoomedHd.src=r.zoomed.getAttribute("data-zoom-src"),r.zoomedHd.onerror=function(){clearInterval(D),console.warn("Unable to reach the zoom image target "+r.zoomedHd.src),r.zoomedHd=null,E()};var D=setInterval(function(){r.zoomedHd.complete&&(clearInterval(D),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",p),document.body.appendChild(r.zoomedHd),E())},10)}else if(r.original.hasAttribute("srcset")){r.zoomedHd=r.zoomed.cloneNode(),r.zoomedHd.removeAttribute("sizes"),r.zoomedHd.removeAttribute("loading");var q=r.zoomedHd.addEventListener("load",function(){r.zoomedHd.removeEventListener("load",q),r.zoomedHd.classList.add("medium-zoom-image--opened"),r.zoomedHd.addEventListener("click",p),document.body.appendChild(r.zoomedHd),E()})}else E()})},p=function(){return new t(function(c){if(R||!r.original){c(w);return}var u=function E(){r.original.classList.remove("medium-zoom-image--hidden"),document.body.removeChild(r.zoomed),r.zoomedHd&&document.body.removeChild(r.zoomedHd),document.body.removeChild(X),r.zoomed.classList.remove("medium-zoom-image--opened"),r.template&&document.body.removeChild(r.template),R=!1,r.zoomed.removeEventListener("transitionend",E),r.original.dispatchEvent(ne("medium-zoom:closed",{detail:{zoom:w}})),r.original=null,r.zoomed=null,r.zoomedHd=null,r.template=null,c(w)};R=!0,document.body.classList.remove("medium-zoom--opened"),r.zoomed.style.transform="",r.zoomedHd&&(r.zoomedHd.style.transform=""),r.template&&(r.template.style.transition="opacity 150ms",r.template.style.opacity=0),r.original.dispatchEvent(ne("medium-zoom:close",{detail:{zoom:w}})),r.zoomed.addEventListener("transitionend",u)})},T=function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=c.target;return r.original?p():z({target:u})},$=function(){return v},Y=function(){return S},G=function(){return r.original},S=[],d=[],R=!1,B=0,v=o,r={original:null,zoomed:null,zoomedHd:null,template:null};Object.prototype.toString.call(e)==="[object Object]"?v=e:(e||typeof e=="string")&&L(e),v=ee({margin:0,background:"#fff",scrollOffset:40,container:null,template:null},v);var X=et(v.background);document.addEventListener("click",n),document.addEventListener("keyup",l),document.addEventListener("scroll",i),window.addEventListener("resize",p);var w={open:z,close:p,toggle:T,update:m,clone:C,attach:L,detach:b,on:h,off:H,getOptions:$,getImages:Y,getZoomedImage:G};return w};function ot(a,e){e===void 0&&(e={});var o=e.insertAt;if(!(!a||typeof document>"u")){var t=document.head||document.getElementsByTagName("head")[0],n=document.createElement("style");n.type="text/css",o==="top"&&t.firstChild?t.insertBefore(n,t.firstChild):t.appendChild(n),n.styleSheet?n.styleSheet.cssText=a:n.appendChild(document.createTextNode(a))}}var it=".medium-zoom-overlay{position:fixed;top:0;right:0;bottom:0;left:0;opacity:0;transition:opacity .3s;will-change:opacity}.medium-zoom--opened .medium-zoom-overlay{cursor:pointer;cursor:zoom-out;opacity:1}.medium-zoom-image{cursor:pointer;cursor:zoom-in;transition:transform .3s cubic-bezier(.2,0,.2,1)!important}.medium-zoom-image--hidden{visibility:hidden}.medium-zoom-image--opened{position:relative;cursor:pointer;cursor:zoom-out;will-change:transform}";ot(it);const at=nt;function Te(a,e,o){const t=a.slice();return t[17]=e[o],t[19]=o,t}function Se(a,e,o){const t=a.slice();return t[20]=e[o][0],t[21]=e[o][1],t}function Ae(a,e,o){const t=a.slice();return t[17]=e[o],t[19]=o,t}function rt(a){let e,o,t;return{c(){e=O("img"),this.h()},l(n){e=I(n,"IMG",{draggable:!0,itemprop:!0,class:!0,decoding:!0,loading:!0,src:!0,alt:!0,width:!0,height:!0}),this.h()},h(){s(e,"draggable","false"),s(e,"itemprop","image"),s(e,"class",o="z-50 m-auto md:rounded-2xl md:shadow-xl "+(a[2]??"h-full w-auto aspect-auto object-cover")),s(e,"decoding",a[7]),s(e,"loading",a[6]),ye(e.src,t=a[4])||s(e,"src",t),s(e,"alt",a[5]),s(e,"width",a[0]),s(e,"height",a[1])},m(n,i){V(n,e,i),a[15](e)},p(n,i){i&4&&o!==(o="z-50 m-auto md:rounded-2xl md:shadow-xl "+(n[2]??"h-full w-auto aspect-auto object-cover"))&&s(e,"class",o),i&128&&s(e,"decoding",n[7]),i&64&&s(e,"loading",n[6]),i&16&&!ye(e.src,t=n[4])&&s(e,"src",t),i&32&&s(e,"alt",n[5]),i&1&&s(e,"width",n[0]),i&2&&s(e,"height",n[1])},d(n){n&&j(e),a[15](null)}}}function lt(a){let e,o,t=re.ExtraResolutions&&Object.keys(re.ExtraResolutions).length,n,i,l,m,C=a[10]&&st(a),L=t&&dt(a);return{c(){e=O("picture"),C&&C.c(),o=M(),L&&L.c(),n=M(),i=O("img"),this.h()},l(b){e=I(b,"PICTURE",{});var h=fe(e);C&&C.l(h),o=x(h),L&&L.l(h),n=x(h),i=I(h,"IMG",{draggable:!0,itemprop:!0,class:!0,decoding:!0,loading:!0,src:!0,alt:!0,width:!0,height:!0}),h.forEach(j),this.h()},h(){s(i,"draggable","false"),s(i,"itemprop","image"),s(i,"class",l="z-50 m-auto md:rounded-2xl md:shadow-xl "+(a[2]??"h-full w-auto aspect-auto object-cover")),s(i,"decoding",a[7]),s(i,"loading",a[6]),ye(i.src,m=a[9].original)||s(i,"src",m),s(i,"alt",a[5]),s(i,"width",a[0]),s(i,"height",a[1])},m(b,h){V(b,e,h),C&&C.m(e,null),_(e,o),L&&L.m(e,null),_(e,n),_(e,i),a[14](i)},p(b,h){b[10]&&C.p(b,h),t&&L.p(b,h),h&4&&l!==(l="z-50 m-auto md:rounded-2xl md:shadow-xl "+(b[2]??"h-full w-auto aspect-auto object-cover"))&&s(i,"class",l),h&128&&s(i,"decoding",b[7]),h&64&&s(i,"loading",b[6]),h&32&&s(i,"alt",b[5]),h&1&&s(i,"width",b[0]),h&2&&s(i,"height",b[1])},d(b){b&&j(e),C&&C.d(),L&&L.d(),a[14](null)}}}function st(a){let e,o=le(a[10]),t=[];for(let n=0;n<o.length;n+=1)t[n]=Pe(Se(a,o,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=ae()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);e=ae()},m(n,i){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,i);V(n,e,i)},p(n,i){if(i&3072){o=le(n[10]);let l;for(l=0;l<o.length;l+=1){const m=Se(n,o,l);t[l]?t[l].p(m,i):(t[l]=Pe(m),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},d(n){n&&j(e),Ee(t,n)}}}function ke(a){let e,o;return{c(){e=O("source"),this.h()},l(t){e=I(t,"SOURCE",{media:!0,srcset:!0,width:!0,type:!0}),this.h()},h(){s(e,"media",`(min-width: ${a[21].minWidth})`),xe(e,o=`${a[11](a[20],a[19])}`.replace(/^\./,""))||s(e,"srcset",o),s(e,"width",a[21].width),s(e,"type",`image/${a[17]}`)},m(t,n){V(t,e,n)},p:Ce,d(t){t&&j(e)}}}function Pe(a){let e,o=le(a[21].format),t=[];for(let n=0;n<o.length;n+=1)t[n]=ke(Ae(a,o,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=ae()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);e=ae()},m(n,i){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,i);V(n,e,i)},p(n,i){if(i&3072){o=le(n[21].format);let l;for(l=0;l<o.length;l+=1){const m=Ae(n,o,l);t[l]?t[l].p(m,i):(t[l]=ke(m),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},d(n){n&&j(e),Ee(t,n)}}}function dt(a){let e,o=le(Object.entries(re.ExtraResolutions)),t=[];for(let n=0;n<o.length;n+=1)t[n]=Ne(Te(a,o,n));return{c(){for(let n=0;n<t.length;n+=1)t[n].c();e=ae()},l(n){for(let i=0;i<t.length;i+=1)t[i].l(n);e=ae()},m(n,i){for(let l=0;l<t.length;l+=1)t[l]&&t[l].m(n,i);V(n,e,i)},p(n,i){if(i&512){o=le(Object.entries(re.ExtraResolutions));let l;for(l=0;l<o.length;l+=1){const m=Te(n,o,l);t[l]?t[l].p(m,i):(t[l]=Ne(m),t[l].c(),t[l].m(e.parentNode,e))}for(;l<t.length;l+=1)t[l].d(1);t.length=o.length}},d(n){n&&j(e),Ee(t,n)}}}function Ne(a){let e,o;return{c(){e=O("source"),this.h()},l(t){e=I(t,"SOURCE",{type:!0,srcset:!0}),this.h()},h(){s(e,"type",`image/${a[17]}`),xe(e,o=`${Array.isArray(a[9].extraFormats)?a[9].extraFormats[a[19]]:a[9].extraFormats}`.replace(/^\./,""))||s(e,"srcset",o)},m(t,n){V(t,e,n)},p:Ce,d(t){t&&j(e)}}}function ct(a){let e,o,t,n,i,l,m;function C(z,p){return z[9]?lt:rt}let b=C(a)(a);const h=a[13].default,H=Be(h,a,a[12],null);return{c(){e=O("figure"),b.c(),o=M(),t=O("figcaption"),H&&H.c(),this.h()},l(z){e=I(z,"FIGURE",{class:!0});var p=fe(e);b.l(p),o=x(p),t=I(p,"FIGCAPTION",{class:!0});var T=fe(t);H&&H.l(T),T.forEach(j),p.forEach(j),this.h()},h(){s(t,"class",n=a[3]??"italic op70 text-center mt2"),s(e,"class","my6 select-none")},m(z,p){V(z,e,p),b.m(e,null),_(e,o),_(e,t),H&&H.m(t,null),m=!0},p(z,[p]){b.p(z,p),H&&H.p&&(!m||p&4096)&&Ue(H,h,z,z[12],m?De(h,z[12],p,null):Ye(z[12]),null),(!m||p&8&&n!==(n=z[3]??"italic op70 text-center mt2"))&&s(t,"class",n)},i(z){m||(oe(H,z),We(()=>{m&&(l&&l.end(1),i=Ve(e,He,{duration:300,delay:300}),i.start())}),m=!0)},o(z){ie(H,z),i&&i.invalidate(),l=Xe(e,He,{duration:300}),m=!1},d(z){z&&j(e),b.d(),H&&H.d(z),z&&l&&l.end()}}}function ut(a,e,o){let t;Ze(a,Qe,d=>o(16,t=d));let{$$slots:n={},$$scope:i}=e,l,{class:m=void 0}=e,{captionClass:C=void 0}=e,{src:L}=e,{alt:b=L}=e,{loading:h="lazy"}=e,{decoding:H="async"}=e,{width:z=void 0}=e,{height:p=void 0}=e,T=t.get(L);const $=re.ExtraResolutions&&Object.entries(re.ExtraResolutions).filter(d=>T&&T[d[0]]).sort((d,R)=>+R[0]-+d[0]),Y=function(d,R){if(!T)return;let B=T[d];return B&&Array.isArray(B)?B[R]:B};Ke(()=>{at(l,{scrollOffset:0,background:"rgba(25, 18, 25, .9)"})});function G(d){Le[d?"unshift":"push"](()=>{l=d,o(8,l)})}function S(d){Le[d?"unshift":"push"](()=>{l=d,o(8,l)})}return a.$$set=d=>{"class"in d&&o(2,m=d.class),"captionClass"in d&&o(3,C=d.captionClass),"src"in d&&o(4,L=d.src),"alt"in d&&o(5,b=d.alt),"loading"in d&&o(6,h=d.loading),"decoding"in d&&o(7,H=d.decoding),"width"in d&&o(0,z=d.width),"height"in d&&o(1,p=d.height),"$$scope"in d&&o(12,i=d.$$scope)},o(0,z=T==null?void 0:T.width),o(1,p=T==null?void 0:T.height),[z,p,m,C,L,b,h,H,l,T,$,Y,i,n,G,S]}class mt extends je{constructor(e){super(),Re(this,e,ut,ct,Me,{class:2,captionClass:3,src:4,alt:5,loading:6,decoding:7,width:0,height:1})}}function ft(a){let e,o,t='<a href="#agende-rosse">Agende Rosse</a>',n,i,l="Il Movimento Agende Rosse è costituito da cittadini che agiscono affinché sia fatta piena luce sulla strage di Via D’Amelio a Palermo del 19 luglio 1992 nella quale furono uccisi il Magistrato Paolo Borsellino e gli agenti di Polizia Emanuela Loi, Agostino Catalano, Claudio Traina, Eddie Walter Cosina e Vincenzo Li Muli.",m,C,L=`Il Movimento nasce su impulso di Salvatore Borsellino il quale il 15 luglio 2007 scrive la lettera intitolata “19 luglio 1992: una strage di Stato” nella quale afferma che la ragione principale della morte del fratello Paolo è da ricercarsi nell’accordo di non belligeranza stabilito tra pezzi dello Stato e Cosa Nostra in seguito ad una trattativa fondata sul tritolo delle stragi in Sicilia del 1992 ed in continente del 1993.
Salvatore Borsellino chiede di avere delle risposte sulle omissioni delle più elementari misure di sicurezza in via D’Amelio il giorno della strage e di sforzare la memoria ad alcuni rappresentanti delle Istituzioni che incontrarono Paolo Borsellino nelle sue ultime settimane di vita e che pertanto conoscono elementi fondamentali per ricostruire lo scenario in cui maturò l’accelerazione della fase esecutiva dell’eccidio.`,b,h,H='<a href="#gli-incontri">Gli incontri</a>',z,p,T="Durante gli incontri con il movimento, abbiamo avuto modo di immergerci nella ricerca della piena verità su moventi e mandanti della strage di via D’Amelio, avendo la possibilità di fare domande e ricevere risposte immediate e, soprattutto, che rispecchiassero la realtà.",$,Y,G,S,d,R='<a href="#30-anni-dalle-stragi-di-mafia">30 anni dalle stragi di mafia</a>',B,v,r="Il video sottostante affronta il tema degli omicidi di mafia in Italia.",X,w,P=`In particolare esplora la storia delle organizzazioni mafiose in Italia, tra cui Cosa Nostra, 'Ndrangheta e Camorra.
I magistrati Giovanni Falcole e paolo Borsellino hanno svolto un ruolo cruciale nelle indagini e nel perseguimento dei reati di mafia negli anni '80.
Il video parla proprio degli attentati che uccisero i due magistrati, mettendo in risalto il collegamento con le condanne del Maxi Processo.`,c,u,E,y,g='<a href="#strage-di-viale-lazio">Strage di viale Lazio</a>',A,N,D="Il video sottostante parla di uno degli omicidi mafiosi più brutali della storia di Cosa Nostra: la strage di Viale Lazio, includendo anche le testimonianze di tre collaboratori di giustizia: Tommaso Buscetta, Gaetano Grado e Rosario Naimo.",q,U,se,W,ge='<a href="#peppino-impastato">Peppino Impastato</a>',Z,J,he="Il video sottostante parla della vita di Giuseppe Impastato, detto Peppino, che ha combattuto contro la mafia in Sicilia negli anni '70.",Q,K,te;return G=new mt({props:{src:"/storia-della-mafia/foto-di-classe.jpg",alt:"Foto di Classe"}}),u=new be({props:{id:"CKy4xEEwGrc"}}),U=new be({props:{id:"OrEOgcF6f00"}}),K=new be({props:{id:"ag1_vfwzgFA"}}),{c(){e=O("article"),o=O("h2"),o.innerHTML=t,n=M(),i=O("p"),i.textContent=l,m=M(),C=O("p"),C.textContent=L,b=M(),h=O("h3"),h.innerHTML=H,z=M(),p=O("p"),p.textContent=T,$=M(),Y=O("p"),de(G.$$.fragment),S=M(),d=O("h2"),d.innerHTML=R,B=M(),v=O("p"),v.textContent=r,X=M(),w=O("p"),w.textContent=P,c=M(),de(u.$$.fragment),E=M(),y=O("h2"),y.innerHTML=g,A=M(),N=O("p"),N.textContent=D,q=M(),de(U.$$.fragment),se=M(),W=O("h2"),W.innerHTML=ge,Z=M(),J=O("p"),J.textContent=he,Q=M(),de(K.$$.fragment),this.h()},l(k){e=I(k,"ARTICLE",{slot:!0});var f=fe(e);o=I(f,"H2",{id:!0,"data-svelte-h":!0}),F(o)!=="svelte-1htgyhg"&&(o.innerHTML=t),n=x(f),i=I(f,"P",{"data-svelte-h":!0}),F(i)!=="svelte-nhoqn1"&&(i.textContent=l),m=x(f),C=I(f,"P",{"data-svelte-h":!0}),F(C)!=="svelte-13f0duy"&&(C.textContent=L),b=x(f),h=I(f,"H3",{id:!0,"data-svelte-h":!0}),F(h)!=="svelte-7i90fu"&&(h.innerHTML=H),z=x(f),p=I(f,"P",{"data-svelte-h":!0}),F(p)!=="svelte-q2auwv"&&(p.textContent=T),$=x(f),Y=I(f,"P",{});var pe=fe(Y);ce(G.$$.fragment,pe),pe.forEach(j),S=x(f),d=I(f,"H2",{id:!0,"data-svelte-h":!0}),F(d)!=="svelte-y0aofc"&&(d.innerHTML=R),B=x(f),v=I(f,"P",{"data-svelte-h":!0}),F(v)!=="svelte-4hvgyy"&&(v.textContent=r),X=x(f),w=I(f,"P",{"data-svelte-h":!0}),F(w)!=="svelte-kirkd0"&&(w.textContent=P),c=x(f),ce(u.$$.fragment,f),E=x(f),y=I(f,"H2",{id:!0,"data-svelte-h":!0}),F(y)!=="svelte-fe0ihb"&&(y.innerHTML=g),A=x(f),N=I(f,"P",{"data-svelte-h":!0}),F(N)!=="svelte-pzfdre"&&(N.textContent=D),q=x(f),ce(U.$$.fragment,f),se=x(f),W=I(f,"H2",{id:!0,"data-svelte-h":!0}),F(W)!=="svelte-1hp7czz"&&(W.innerHTML=ge),Z=x(f),J=I(f,"P",{"data-svelte-h":!0}),F(J)!=="svelte-1j1cuy0"&&(J.textContent=he),Q=x(f),ce(K.$$.fragment,f),f.forEach(j),this.h()},h(){s(o,"id","agende-rosse"),s(h,"id","gli-incontri"),s(d,"id","30-anni-dalle-stragi-di-mafia"),s(y,"id","strage-di-viale-lazio"),s(W,"id","peppino-impastato"),s(e,"slot","post_content")},m(k,f){V(k,e,f),_(e,o),_(e,n),_(e,i),_(e,m),_(e,C),_(e,b),_(e,h),_(e,z),_(e,p),_(e,$),_(e,Y),ue(G,Y,null),_(e,S),_(e,d),_(e,B),_(e,v),_(e,X),_(e,w),_(e,c),ue(u,e,null),_(e,E),_(e,y),_(e,A),_(e,N),_(e,q),ue(U,e,null),_(e,se),_(e,W),_(e,Z),_(e,J),_(e,Q),ue(K,e,null),te=!0},p:Ce,i(k){te||(oe(G.$$.fragment,k),oe(u.$$.fragment,k),oe(U.$$.fragment,k),oe(K.$$.fragment,k),te=!0)},o(k){ie(G.$$.fragment,k),ie(u.$$.fragment,k),ie(U.$$.fragment,k),ie(K.$$.fragment,k),te=!1},d(k){k&&j(e),me(G),me(u),me(U),me(K)}}}function gt(a){let e,o;return e=new Je({props:{$$slots:{post_content:[ft]},$$scope:{ctx:a}}}),{c(){de(e.$$.fragment)},l(t){ce(e.$$.fragment,t)},m(t,n){ue(e,t,n),o=!0},p(t,[n]){const i={};n&1&&(i.$$scope={dirty:n,ctx:t}),e.$set(i)},i(t){o||(oe(e.$$.fragment,t),o=!0)},o(t){ie(e.$$.fragment,t),o=!1},d(t){me(e,t)}}}class yt extends je{constructor(e){super(),Re(this,e,null,gt,Me,{})}}export{yt as component};