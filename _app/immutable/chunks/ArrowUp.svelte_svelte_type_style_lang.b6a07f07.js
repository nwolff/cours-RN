import{S as C,i as D,s as L,k as d,l as m,m as w,h as c,n as z,p as i,b as S,I as r,L as A,M as u}from"./index.2f543cb9.js";const g=/[a-zA-Z]/,f=(n,e=0)=>[...Array(n).keys()].map(t=>t+e);function h(n,e,t){const l=n.slice();return l[7]=e[t],l}function p(n){let e;return{c(){e=d("div"),this.h()},l(t){e=m(t,"DIV",{class:!0,style:!0}),w(e).forEach(c),this.h()},h(){z(e,"class","bar svelte-1vzsw15"),i(e,"left",n[7]*(+n[3]/5+(+n[3]/15-+n[3]/100))+n[1]),i(e,"animation-delay",n[7]*(+n[6]/8.3)+n[5]),u(e,"pause-animation",n[4])},m(t,l){S(t,e,l)},p(t,l){l&10&&i(e,"left",t[7]*(+t[3]/5+(+t[3]/15-+t[3]/100))+t[1]),l&16&&u(e,"pause-animation",t[4])},d(t){t&&c(e)}}}function E(n){let e,t=f(10,0),l=[];for(let s=0;s<t.length;s+=1)l[s]=p(h(n,t,s));return{c(){e=d("div");for(let s=0;s<l.length;s+=1)l[s].c();this.h()},l(s){e=m(s,"DIV",{class:!0,style:!0});var a=w(e);for(let _=0;_<l.length;_+=1)l[_].l(a);a.forEach(c),this.h()},h(){z(e,"class","wrapper svelte-1vzsw15"),i(e,"--size",n[3]+n[1]),i(e,"--color",n[0]),i(e,"--duration",n[2])},m(s,a){S(s,e,a);for(let _=0;_<l.length;_+=1)l[_]&&l[_].m(e,null)},p(s,[a]){if(a&122){t=f(10,0);let _;for(_=0;_<t.length;_+=1){const v=h(s,t,_);l[_]?l[_].p(v,a):(l[_]=p(v),l[_].c(),l[_].m(e,null))}for(;_<l.length;_+=1)l[_].d(1);l.length=t.length}a&10&&i(e,"--size",s[3]+s[1]),a&1&&i(e,"--color",s[0]),a&4&&i(e,"--duration",s[2])},i:r,o:r,d(s){s&&c(e),A(l,s)}}}function F(n,e,t){var y;let{color:l="#FF3E00"}=e,{unit:s="px"}=e,{duration:a="1.25s"}=e,{size:_="60"}=e,{pause:v=!1}=e,b=((y=a.match(g))==null?void 0:y[0])??"s",k=a.replace(g,"");return n.$$set=o=>{"color"in o&&t(0,l=o.color),"unit"in o&&t(1,s=o.unit),"duration"in o&&t(2,a=o.duration),"size"in o&&t(3,_=o.size),"pause"in o&&t(4,v=o.pause)},[l,s,a,_,v,b,k]}class P extends C{constructor(e){super(),D(this,e,F,E,L,{color:0,unit:1,duration:2,size:3,pause:4})}}export{P as W};
