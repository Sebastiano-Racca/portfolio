import{s as U,a as k,f as g,l as C,r as z,d as p,c as q,g as d,h as b,m as H,j as a,R as D,G as M,i as S,u as s,n as I,v as x,y as T}from"../chunks/scheduler.e99bcb8c.js";import{S as J,i as K}from"../chunks/index.f3b46ba6.js";import{s as O,p as Q,L as V}from"../chunks/i18n-svelte.b4d985e2.js";const W=""+new URL("../assets/404.9de340c4.webp",import.meta.url).href;function X(r){var R;let h,o,e,n,c=(r[0].status??"404")+"",L,y,f,_=(r[0].status===404?r[1].Page404NotFound():(R=r[0].error)==null?void 0:R.message)+"",P,A,l,N,B,i,v=r[1].Page404BackHome()+"",w;return document.title="404 | "+O.title,{c(){h=k(),o=g("main"),e=g("article"),n=g("h1"),L=C(c),y=k(),f=g("p"),P=C(_),A=k(),l=g("img"),B=k(),i=g("a"),w=C(v),this.h()},l(t){z("svelte-uqtufk",document.head).forEach(p),h=q(t),o=d(t,"MAIN",{});var E=b(o);e=d(E,"ARTICLE",{itemscope:!0,itemtype:!0,class:!0});var m=b(e);n=d(m,"H1",{class:!0});var j=b(n);L=H(j,c),j.forEach(p),y=q(m),f=d(m,"P",{class:!0});var F=b(f);P=H(F,_),F.forEach(p),A=q(m),l=d(m,"IMG",{draggable:!0,class:!0,src:!0,alt:!0}),B=q(m),i=d(m,"A",{href:!0,class:!0,target:!0});var G=b(i);w=H(G,v),G.forEach(p),m.forEach(p),E.forEach(p),this.h()},h(){a(n,"class","text-6xl"),a(f,"class","text-lg"),a(l,"draggable","false"),a(l,"class","select-none max-w-lg w-full h-auto"),D(l.src,N=W)||a(l,"src",N),a(l,"alt","404.webp"),M(l,"hidden",r[0].status!==404),a(i,"href","/"),a(i,"class","btn btn-ghost underline text-lg !p4"),a(i,"target","_self"),a(e,"itemscope",""),a(e,"itemtype","https://schema.org/BlogPosting"),a(e,"class","pt-[4rem] relative flex flex-col items-center gap-4 justify-center")},m(t,u){S(t,h,u),S(t,o,u),s(o,e),s(e,n),s(n,L),s(e,y),s(e,f),s(f,P),s(e,A),s(e,l),s(e,B),s(e,i),s(i,w)},p(t,[u]){var E;u&1&&c!==(c=(t[0].status??"404")+"")&&I(L,c),u&3&&_!==(_=(t[0].status===404?t[1].Page404NotFound():(E=t[0].error)==null?void 0:E.message)+"")&&I(P,_),u&1&&M(l,"hidden",t[0].status!==404),u&2&&v!==(v=t[1].Page404BackHome()+"")&&I(w,v)},i:x,o:x,d(t){t&&(p(h),p(o))}}}function Y(r,h,o){let e,n;return T(r,Q,c=>o(0,e=c)),T(r,V,c=>o(1,n=c)),[e,n]}class te extends J{constructor(h){super(),K(this,h,Y,X,U,{})}}export{te as component};
