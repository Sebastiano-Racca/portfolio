import{s as k,f as h,g as _,h as w,d as y,R as E,j as s,i as I,u as R,v as b}from"./scheduler.e99bcb8c.js";import{S as Y,i as j}from"./index.f3b46ba6.js";import{s as q}from"./i18n-svelte.b4d985e2.js";function v(o){let a,t,n;return{c(){a=h("div"),t=h("iframe"),this.h()},l(e){a=_(e,"DIV",{class:!0});var i=w(a);t=_(i,"IFRAME",{src:!0,title:!0,allowtransparency:!0,loading:!0,allow:!0,class:!0}),w(t).forEach(y),i.forEach(y),this.h()},h(){E(t.src,n=o[0])||s(t,"src",n),s(t,"title","Youtube Player"),t.allowFullscreen=!0,s(t,"allowtransparency",""),s(t,"loading","lazy"),s(t,"allow","autoplay"),s(t,"class","w-full h-auto aspect-video"),s(a,"class","relative my4")},m(e,i){I(e,a,i),R(a,t)},p:b,i:b,o:b,d(e){e&&y(a)}}}function x(o,a,t){let{id:n=void 0}=a,{list:e=void 0}=a,{playlist:i=void 0}=a,{start:u=void 0}=a,{autoplay:r=!1}=a,{disablekb:f=!1}=a,{controls:c=!0}=a,{fs:m=!0}=a,{loop:d=!1}=a;const g=`https://www.youtube.com/embed/${n}?${e?`listType=playlist&amp;list=${e}&amp;`:""}${i?`playlist=${i}&amp;`:""}${u?`start=${u}&amp;`:""}${r?"autoplay=1&amp;":""}${f?"disablekb=1&amp;":""}${c?"":"controls=0&amp;"}${m?"":"fs=0&amp;"}${d?"loop=1&amp;":""}iv_load_policy=3&amp;modestbranding=1&amp;playsinline=1&amp;showinfo=0&amp;rel=0&amp;enablejsapi=1&amp;origin=${encodeURI(q.url)}`;return o.$$set=l=>{"id"in l&&t(1,n=l.id),"list"in l&&t(2,e=l.list),"playlist"in l&&t(3,i=l.playlist),"start"in l&&t(4,u=l.start),"autoplay"in l&&t(5,r=l.autoplay),"disablekb"in l&&t(6,f=l.disablekb),"controls"in l&&t(7,c=l.controls),"fs"in l&&t(8,m=l.fs),"loop"in l&&t(9,d=l.loop)},[g,n,e,i,u,r,f,c,m,d]}class z extends Y{constructor(a){super(),j(this,a,x,v,k,{id:1,list:2,playlist:3,start:4,autoplay:5,disablekb:6,controls:7,fs:8,loop:9})}}export{z as Y};
