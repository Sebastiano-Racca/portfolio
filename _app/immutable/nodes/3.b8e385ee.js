import{s as K,f as c,e as Q,g as d,h as F,d as y,j as o,i as T,u as m,v as I,R as M,a as b,c as _,N as L,k as j}from"../chunks/scheduler.e99bcb8c.js";import{S as W,i as X,b as Y,d as Z,m as x,a as $,t as tt,e as et}from"../chunks/index.f3b46ba6.js";import{P as it}from"../chunks/post.c56720ea.js";import"../chunks/image_banner.18f1d746.js";function z(n){let t,i;return{c(){t=c("source"),this.h()},l(e){t=d(e,"SOURCE",{title:!0,src:!0,type:!0}),this.h()},h(){o(t,"title",n[6]),M(t.src,i=n[9])||o(t,"src",i),o(t,"type","video/mp4")},m(e,r){T(e,t,r)},p(e,r){r&64&&o(t,"title",e[6]),r&512&&!M(t.src,i=e[9])&&o(t,"src",i)},d(e){e&&y(t)}}}function J(n){let t,i;return{c(){t=c("source"),this.h()},l(e){t=d(e,"SOURCE",{title:!0,src:!0,type:!0}),this.h()},h(){o(t,"title",n[6]),M(t.src,i=n[8])||o(t,"src",i),o(t,"type","video/webm")},m(e,r){T(e,t,r)},p(e,r){r&64&&o(t,"title",e[6]),r&256&&!M(t.src,i=e[8])&&o(t,"src",i)},d(e){e&&y(t)}}}function lt(n){let t,i,e,r,l=n[9]&&z(n),f=n[8]&&J(n);return{c(){t=c("video"),l&&l.c(),i=Q(),f&&f.c(),e=c("track"),this.h()},l(a){t=d(a,"VIDEO",{id:!0,width:!0,height:!0,class:!0,poster:!0,"data-poster":!0});var s=F(t);l&&l.l(s),i=Q(),f&&f.l(s),e=d(s,"TRACK",{kind:!0}),s.forEach(y),this.h()},h(){o(e,"kind","captions"),o(t,"id",n[7]),t.autoplay=n[1],t.loop=n[2],o(t,"width",n[4]),o(t,"height",n[5]),o(t,"class",r="!h-full !w-auto m-auto "+(n[0]??"")),t.controls=!0,o(t,"poster",n[3]),o(t,"data-poster",n[3])},m(a,s){T(a,t,s),l&&l.m(t,null),m(t,i),f&&f.m(t,null),m(t,e)},p(a,[s]){a[9]?l?l.p(a,s):(l=z(a),l.c(),l.m(t,i)):l&&(l.d(1),l=null),a[8]?f?f.p(a,s):(f=J(a),f.c(),f.m(t,e)):f&&(f.d(1),f=null),s&128&&o(t,"id",a[7]),s&2&&(t.autoplay=a[1]),s&4&&(t.loop=a[2]),s&16&&o(t,"width",a[4]),s&32&&o(t,"height",a[5]),s&1&&r!==(r="!h-full !w-auto m-auto "+(a[0]??""))&&o(t,"class",r),s&8&&o(t,"poster",a[3]),s&8&&o(t,"data-poster",a[3])},i:I,o:I,d(a){a&&y(t),l&&l.d(),f&&f.d()}}}function at(n,t,i){let{class:e=void 0}=t,{autoplay:r=!0}=t,{loop:l=!0}=t,{poster:f=void 0}=t,{width:a=void 0}=t,{height:s=void 0}=t,{title:H=void 0}=t,{id:S=void 0}=t,{webm:C=void 0}=t,{mp4:k=void 0}=t;return n.$$set=h=>{"class"in h&&i(0,e=h.class),"autoplay"in h&&i(1,r=h.autoplay),"loop"in h&&i(2,l=h.loop),"poster"in h&&i(3,f=h.poster),"width"in h&&i(4,a=h.width),"height"in h&&i(5,s=h.height),"title"in h&&i(6,H=h.title),"id"in h&&i(7,S=h.id),"webm"in h&&i(8,C=h.webm),"mp4"in h&&i(9,k=h.mp4)},[e,r,l,f,a,s,H,S,C,k]}class st extends W{constructor(t){super(),X(this,t,at,lt,K,{class:0,autoplay:1,loop:2,poster:3,width:4,height:5,title:6,id:7,webm:8,mp4:9})}}function ot(n){let t,i,e,r,l,f='<a href="#ciao-sono-sebastiano">Ciao, sono Sebastiano</a>',a,s,H="<li>👨‍💻 Sviluppatore full-time di 18 anni;</li> <li>⚜️ Scout Entusiasta;</li> <li>⚖️ Sostenitore della Parità di Diritti e Opportunità.</li>",S,C,k,h,O,w,V='<br/> <br/> <img src="https://quotes-github-readme.vercel.app/api?type=horizontal&amp;theme=radical" alt="Random Dev Quote"/>',G,E,R,D,B,v,U='<a href="#tech-stack">Tech Stack</a>',q,g,A='<a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/php-%23777BB4.svg?style=flat&amp;logo=php&amp;logoColor=white" alt="PHP"/></a> <a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/css3-%231572B6.svg?style=flat&amp;logo=css3&amp;logoColor=white" alt="CSS3"/></a> <a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/html5-%23E34F26.svg?style=flat&amp;logo=html5&amp;logoColor=white" alt="HTML5"/></a> <a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/javascript-%23323330.svg?style=flat&amp;logo=javascript&amp;logoColor=%23F7DF1E" alt="JavaScript"/></a> <a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/mysql-%252307405e.svg?style=flat&amp;logo=sqlite&amp;logoColor=white" alt="MySQL"/></a> <a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/MariaDB-003545?style=flat&amp;logo=mariadb&amp;logoColor=white" alt="MariaDB"/></a> <a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/Git-fc6d26?style=flat&amp;logo=git&amp;logoColor=white" alt="Git"/></a> <a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/Linux-FCC624?style=flat&amp;logo=linux&amp;logoColor=black" alt="Linux"/></a> <a href="https://github.com/SebaOfficial" title="Profilo di Github" style="min-width: 50px"><img src="https://img.shields.io/badge/shell_script-%23121011.svg?style=flat&amp;logo=gnu-bash&amp;logoColor=white" alt="Shell Script"/></a>',P;return e=new st({props:{mp4:"/about/monkey.mp4",id:"Monkey"}}),{c(){t=c("article"),i=c("p"),Y(e.$$.fragment),r=b(),l=c("h2"),l.innerHTML=f,a=b(),s=c("ul"),s.innerHTML=H,S=b(),C=c("hr"),k=b(),h=c("br"),O=b(),w=c("div"),w.innerHTML=V,G=b(),E=c("br"),R=b(),D=c("hr"),B=b(),v=c("h2"),v.innerHTML=U,q=b(),g=c("div"),g.innerHTML=A,this.h()},l(p){t=d(p,"ARTICLE",{slot:!0});var u=F(t);i=d(u,"P",{});var N=F(i);Z(e.$$.fragment,N),N.forEach(y),r=_(u),l=d(u,"H2",{id:!0,"data-svelte-h":!0}),L(l)!=="svelte-1xhrp90"&&(l.innerHTML=f),a=_(u),s=d(u,"UL",{"data-svelte-h":!0}),L(s)!=="svelte-17rgn2d"&&(s.innerHTML=H),S=_(u),C=d(u,"HR",{}),k=_(u),h=d(u,"BR",{}),O=_(u),w=d(u,"DIV",{align:!0,"data-svelte-h":!0}),L(w)!=="svelte-ppjl79"&&(w.innerHTML=V),G=_(u),E=d(u,"BR",{}),R=_(u),D=d(u,"HR",{}),B=_(u),v=d(u,"H2",{id:!0,"data-svelte-h":!0}),L(v)!=="svelte-ll3owc"&&(v.innerHTML=U),q=_(u),g=d(u,"DIV",{style:!0,"data-svelte-h":!0}),L(g)!=="svelte-l5s637"&&(g.innerHTML=A),u.forEach(y),this.h()},h(){o(l,"id","ciao-sono-sebastiano"),o(w,"align","center"),o(v,"id","tech-stack"),j(g,"display","flex"),j(g,"gap","1em"),j(g,"flex-wrap","wrap"),o(t,"slot","post_content")},m(p,u){T(p,t,u),m(t,i),x(e,i,null),m(t,r),m(t,l),m(t,a),m(t,s),m(t,S),m(t,C),m(t,k),m(t,h),m(t,O),m(t,w),m(t,G),m(t,E),m(t,R),m(t,D),m(t,B),m(t,v),m(t,q),m(t,g),P=!0},p:I,i(p){P||($(e.$$.fragment,p),P=!0)},o(p){tt(e.$$.fragment,p),P=!1},d(p){p&&y(t),et(e)}}}function rt(n){let t,i;return t=new it({props:{$$slots:{post_content:[ot]},$$scope:{ctx:n}}}),{c(){Y(t.$$.fragment)},l(e){Z(t.$$.fragment,e)},m(e,r){x(t,e,r),i=!0},p(e,[r]){const l={};r&1&&(l.$$scope={dirty:r,ctx:e}),t.$set(l)},i(e){i||($(t.$$.fragment,e),i=!0)},o(e){tt(t.$$.fragment,e),i=!1},d(e){et(t,e)}}}class mt extends W{constructor(t){super(),X(this,t,null,rt,K,{})}}export{mt as component};