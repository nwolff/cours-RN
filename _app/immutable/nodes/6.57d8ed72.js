import{_ as zn}from"../chunks/preload-helper.41c905a7.js";import{a2 as Te,a3 as Hn,S as ye,i as Re,s as Ce,k as y,a as X,l as R,m as C,c as Y,h as b,n as S,a4 as E,b as P,O,R as ke,X as M,Z as ue,a5 as ge,_ as pe,q as T,r as I,u as Z,e as oe,a6 as mn,g as F,v as _n,d as z,f as hn,$ as On,y as L,z as j,A as G,B as K,a7 as Tn,w as Me,T as In,o as Bn,a0 as Ln,D as jn,G as Gn}from"../chunks/index.bfa0a56d.js";import{g as Kn,a as Xn,l as Ie,m as Ve,n as Yn,S as qn,b as Be}from"../chunks/stores.e803257c.js";import{S as Un,N as Zn}from"../chunks/NetworkGraph.c6dd211f.js";import{w as Jn}from"../chunks/index.cf65f726.js";import{T as Qn,D as Wn}from"../chunks/Title.aa4b3733.js";import{G as De,L as $n,B as be}from"../chunks/combinator.eb0d1d06.js";import{S as xn}from"../chunks/Stack.0109b032.js";import{T as el}from"../chunks/Text.8d71f0ec.js";function Le(n){return Object.prototype.toString.call(n)==="[object Date]"}function Fe(n,e,i,l){if(typeof i=="number"||Le(i)){const s=l-i,f=(i-e)/(n.dt||1/60),t=n.opts.stiffness*s,a=n.opts.damping*f,u=(t-a)*n.inv_mass,k=(f+u)*n.dt;return Math.abs(k)<n.opts.precision&&Math.abs(s)<n.opts.precision?l:(n.settled=!1,Le(i)?new Date(i.getTime()+k):i+k)}else{if(Array.isArray(i))return i.map((s,f)=>Fe(n,e[f],i[f],l[f]));if(typeof i=="object"){const s={};for(const f in i)s[f]=Fe(n,e[f],i[f],l[f]);return s}else throw new Error(`Cannot spring ${typeof i} values`)}}function nl(n,e={}){const i=Jn(n),{stiffness:l=.15,damping:s=.8,precision:f=.01}=e;let t,a,u,k=n,p=n,m=1,o=0,h=!1;function d(_,g={}){p=_;const B=u={};return n==null||g.hard||v.stiffness>=1&&v.damping>=1?(h=!0,t=Te(),k=_,i.set(n=p),Promise.resolve()):(g.soft&&(o=1/((g.soft===!0?.5:+g.soft)*60),m=0),a||(t=Te(),h=!1,a=Hn(A=>{if(h)return h=!1,a=null,!1;m=Math.min(m+o,1);const D={inv_mass:m,opts:v,settled:!0,dt:(A-t)*60/1e3},U=Fe(D,k,n,p);return t=A,k=n,i.set(n=U),D.settled&&(a=null),!D.settled})),new Promise(A=>{a.promise.then(()=>{B===u&&A()})}))}const v={set:d,update:(_,g)=>d(_(p,n),g),subscribe:i.subscribe,stiffness:l,damping:s,precision:f};return v}const ll=!1,Ml=Object.freeze(Object.defineProperty({__proto__:null,ssr:ll},Symbol.toStringTag,{value:"Module"}));function je(n,e,i){const l=n.slice();return l[28]=e[i],l[30]=i,l}function Ge(n){let e,i,l,s,f=(n[6]==="label"||n[7]==="label")&&Ke(n);return{c(){e=y("span"),f&&f.c(),this.h()},l(t){e=R(t,"SPAN",{class:!0,style:!0});var a=C(e);f&&f.l(a),a.forEach(b),this.h()},h(){S(e,"class","pip first"),S(e,"style",i=n[14]+": 0%;"),E(e,"selected",n[18](n[0])),E(e,"in-range",n[17](n[0]))},m(t,a){P(t,e,a),f&&f.m(e,null),l||(s=[M(e,"click",function(){ue(n[21](n[0]))&&n[21](n[0]).apply(this,arguments)}),M(e,"touchend",ge(function(){ue(n[21](n[0]))&&n[21](n[0]).apply(this,arguments)}))],l=!0)},p(t,a){n=t,n[6]==="label"||n[7]==="label"?f?f.p(n,a):(f=Ke(n),f.c(),f.m(e,null)):f&&(f.d(1),f=null),a&16384&&i!==(i=n[14]+": 0%;")&&S(e,"style",i),a&262145&&E(e,"selected",n[18](n[0])),a&131073&&E(e,"in-range",n[17](n[0]))},d(t){t&&b(e),f&&f.d(),l=!1,pe(s)}}}function Ke(n){let e,i=n[12](n[16](n[0]),0,0)+"",l,s=n[10]&&Xe(n),f=n[11]&&Ye(n);return{c(){e=y("span"),s&&s.c(),l=T(i),f&&f.c(),this.h()},l(t){e=R(t,"SPAN",{class:!0});var a=C(e);s&&s.l(a),l=I(a,i),f&&f.l(a),a.forEach(b),this.h()},h(){S(e,"class","pipVal")},m(t,a){P(t,e,a),s&&s.m(e,null),O(e,l),f&&f.m(e,null)},p(t,a){t[10]?s?s.p(t,a):(s=Xe(t),s.c(),s.m(e,l)):s&&(s.d(1),s=null),a&69633&&i!==(i=t[12](t[16](t[0]),0,0)+"")&&Z(l,i),t[11]?f?f.p(t,a):(f=Ye(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&b(e),s&&s.d(),f&&f.d()}}}function Xe(n){let e,i;return{c(){e=y("span"),i=T(n[10]),this.h()},l(l){e=R(l,"SPAN",{class:!0});var s=C(e);i=I(s,n[10]),s.forEach(b),this.h()},h(){S(e,"class","pipVal-prefix")},m(l,s){P(l,e,s),O(e,i)},p(l,s){s&1024&&Z(i,l[10])},d(l){l&&b(e)}}}function Ye(n){let e,i;return{c(){e=y("span"),i=T(n[11]),this.h()},l(l){e=R(l,"SPAN",{class:!0});var s=C(e);i=I(s,n[11]),s.forEach(b),this.h()},h(){S(e,"class","pipVal-suffix")},m(l,s){P(l,e,s),O(e,i)},p(l,s){s&2048&&Z(i,l[11])},d(l){l&&b(e)}}}function qe(n){let e,i=Array(n[20]+1),l=[];for(let s=0;s<i.length;s+=1)l[s]=We(je(n,i,s));return{c(){for(let s=0;s<l.length;s+=1)l[s].c();e=oe()},l(s){for(let f=0;f<l.length;f+=1)l[f].l(s);e=oe()},m(s,f){for(let t=0;t<l.length;t+=1)l[t]&&l[t].m(s,f);P(s,e,f)},p(s,f){if(f&4120131){i=Array(s[20]+1);let t;for(t=0;t<i.length;t+=1){const a=je(s,i,t);l[t]?l[t].p(a,f):(l[t]=We(a),l[t].c(),l[t].m(e.parentNode,e))}for(;t<l.length;t+=1)l[t].d(1);l.length=i.length}},d(s){mn(l,s),s&&b(e)}}}function Ue(n){let e,i,l,s,f,t=(n[6]==="label"||n[9]==="label")&&Ze(n);return{c(){e=y("span"),t&&t.c(),i=X(),this.h()},l(a){e=R(a,"SPAN",{class:!0,style:!0});var u=C(e);t&&t.l(u),i=Y(u),u.forEach(b),this.h()},h(){S(e,"class","pip"),S(e,"style",l=n[14]+": "+n[15](n[19](n[30]))+"%;"),E(e,"selected",n[18](n[19](n[30]))),E(e,"in-range",n[17](n[19](n[30])))},m(a,u){P(a,e,u),t&&t.m(e,null),O(e,i),s||(f=[M(e,"click",function(){ue(n[21](n[19](n[30])))&&n[21](n[19](n[30])).apply(this,arguments)}),M(e,"touchend",ge(function(){ue(n[21](n[19](n[30])))&&n[21](n[19](n[30])).apply(this,arguments)}))],s=!0)},p(a,u){n=a,n[6]==="label"||n[9]==="label"?t?t.p(n,u):(t=Ze(n),t.c(),t.m(e,i)):t&&(t.d(1),t=null),u&573440&&l!==(l=n[14]+": "+n[15](n[19](n[30]))+"%;")&&S(e,"style",l),u&786432&&E(e,"selected",n[18](n[19](n[30]))),u&655360&&E(e,"in-range",n[17](n[19](n[30])))},d(a){a&&b(e),t&&t.d(),s=!1,pe(f)}}}function Ze(n){let e,i=n[12](n[19](n[30]),n[30],n[15](n[19](n[30])))+"",l,s=n[10]&&Je(n),f=n[11]&&Qe(n);return{c(){e=y("span"),s&&s.c(),l=T(i),f&&f.c(),this.h()},l(t){e=R(t,"SPAN",{class:!0});var a=C(e);s&&s.l(a),l=I(a,i),f&&f.l(a),a.forEach(b),this.h()},h(){S(e,"class","pipVal")},m(t,a){P(t,e,a),s&&s.m(e,null),O(e,l),f&&f.m(e,null)},p(t,a){t[10]?s?s.p(t,a):(s=Je(t),s.c(),s.m(e,l)):s&&(s.d(1),s=null),a&561152&&i!==(i=t[12](t[19](t[30]),t[30],t[15](t[19](t[30])))+"")&&Z(l,i),t[11]?f?f.p(t,a):(f=Qe(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&b(e),s&&s.d(),f&&f.d()}}}function Je(n){let e,i;return{c(){e=y("span"),i=T(n[10]),this.h()},l(l){e=R(l,"SPAN",{class:!0});var s=C(e);i=I(s,n[10]),s.forEach(b),this.h()},h(){S(e,"class","pipVal-prefix")},m(l,s){P(l,e,s),O(e,i)},p(l,s){s&1024&&Z(i,l[10])},d(l){l&&b(e)}}}function Qe(n){let e,i;return{c(){e=y("span"),i=T(n[11]),this.h()},l(l){e=R(l,"SPAN",{class:!0});var s=C(e);i=I(s,n[11]),s.forEach(b),this.h()},h(){S(e,"class","pipVal-suffix")},m(l,s){P(l,e,s),O(e,i)},p(l,s){s&2048&&Z(i,l[11])},d(l){l&&b(e)}}}function We(n){let e=n[19](n[30])!==n[0]&&n[19](n[30])!==n[1],i,l=e&&Ue(n);return{c(){l&&l.c(),i=oe()},l(s){l&&l.l(s),i=oe()},m(s,f){l&&l.m(s,f),P(s,i,f)},p(s,f){f&524291&&(e=s[19](s[30])!==s[0]&&s[19](s[30])!==s[1]),e?l?l.p(s,f):(l=Ue(s),l.c(),l.m(i.parentNode,i)):l&&(l.d(1),l=null)},d(s){l&&l.d(s),s&&b(i)}}}function $e(n){let e,i,l,s,f=(n[6]==="label"||n[8]==="label")&&xe(n);return{c(){e=y("span"),f&&f.c(),this.h()},l(t){e=R(t,"SPAN",{class:!0,style:!0});var a=C(e);f&&f.l(a),a.forEach(b),this.h()},h(){S(e,"class","pip last"),S(e,"style",i=n[14]+": 100%;"),E(e,"selected",n[18](n[1])),E(e,"in-range",n[17](n[1]))},m(t,a){P(t,e,a),f&&f.m(e,null),l||(s=[M(e,"click",function(){ue(n[21](n[1]))&&n[21](n[1]).apply(this,arguments)}),M(e,"touchend",ge(function(){ue(n[21](n[1]))&&n[21](n[1]).apply(this,arguments)}))],l=!0)},p(t,a){n=t,n[6]==="label"||n[8]==="label"?f?f.p(n,a):(f=xe(n),f.c(),f.m(e,null)):f&&(f.d(1),f=null),a&16384&&i!==(i=n[14]+": 100%;")&&S(e,"style",i),a&262146&&E(e,"selected",n[18](n[1])),a&131074&&E(e,"in-range",n[17](n[1]))},d(t){t&&b(e),f&&f.d(),l=!1,pe(s)}}}function xe(n){let e,i=n[12](n[16](n[1]),n[20],100)+"",l,s=n[10]&&en(n),f=n[11]&&nn(n);return{c(){e=y("span"),s&&s.c(),l=T(i),f&&f.c(),this.h()},l(t){e=R(t,"SPAN",{class:!0});var a=C(e);s&&s.l(a),l=I(a,i),f&&f.l(a),a.forEach(b),this.h()},h(){S(e,"class","pipVal")},m(t,a){P(t,e,a),s&&s.m(e,null),O(e,l),f&&f.m(e,null)},p(t,a){t[10]?s?s.p(t,a):(s=en(t),s.c(),s.m(e,l)):s&&(s.d(1),s=null),a&1118210&&i!==(i=t[12](t[16](t[1]),t[20],100)+"")&&Z(l,i),t[11]?f?f.p(t,a):(f=nn(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&b(e),s&&s.d(),f&&f.d()}}}function en(n){let e,i;return{c(){e=y("span"),i=T(n[10]),this.h()},l(l){e=R(l,"SPAN",{class:!0});var s=C(e);i=I(s,n[10]),s.forEach(b),this.h()},h(){S(e,"class","pipVal-prefix")},m(l,s){P(l,e,s),O(e,i)},p(l,s){s&1024&&Z(i,l[10])},d(l){l&&b(e)}}}function nn(n){let e,i;return{c(){e=y("span"),i=T(n[11]),this.h()},l(l){e=R(l,"SPAN",{class:!0});var s=C(e);i=I(s,n[11]),s.forEach(b),this.h()},h(){S(e,"class","pipVal-suffix")},m(l,s){P(l,e,s),O(e,i)},p(l,s){s&2048&&Z(i,l[11])},d(l){l&&b(e)}}}function il(n){let e,i,l,s=(n[6]&&n[7]!==!1||n[7])&&Ge(n),f=(n[6]&&n[9]!==!1||n[9])&&qe(n),t=(n[6]&&n[8]!==!1||n[8])&&$e(n);return{c(){e=y("div"),s&&s.c(),i=X(),f&&f.c(),l=X(),t&&t.c(),this.h()},l(a){e=R(a,"DIV",{class:!0});var u=C(e);s&&s.l(u),i=Y(u),f&&f.l(u),l=Y(u),t&&t.l(u),u.forEach(b),this.h()},h(){S(e,"class","rangePips"),E(e,"disabled",n[5]),E(e,"hoverable",n[4]),E(e,"vertical",n[2]),E(e,"reversed",n[3]),E(e,"focus",n[13])},m(a,u){P(a,e,u),s&&s.m(e,null),O(e,i),f&&f.m(e,null),O(e,l),t&&t.m(e,null)},p(a,[u]){a[6]&&a[7]!==!1||a[7]?s?s.p(a,u):(s=Ge(a),s.c(),s.m(e,i)):s&&(s.d(1),s=null),a[6]&&a[9]!==!1||a[9]?f?f.p(a,u):(f=qe(a),f.c(),f.m(e,l)):f&&(f.d(1),f=null),a[6]&&a[8]!==!1||a[8]?t?t.p(a,u):(t=$e(a),t.c(),t.m(e,null)):t&&(t.d(1),t=null),u&32&&E(e,"disabled",a[5]),u&16&&E(e,"hoverable",a[4]),u&4&&E(e,"vertical",a[2]),u&8&&E(e,"reversed",a[3]),u&8192&&E(e,"focus",a[13])},i:ke,o:ke,d(a){a&&b(e),s&&s.d(),f&&f.d(),t&&t.d()}}}function sl(n,e,i){let l,s,f,t,a,{range:u=!1}=e,{min:k=0}=e,{max:p=100}=e,{step:m=1}=e,{values:o=[(p+k)/2]}=e,{vertical:h=!1}=e,{reversed:d=!1}=e,{hoverable:v=!0}=e,{disabled:_=!1}=e,{pipstep:g=void 0}=e,{all:B=!0}=e,{first:A=void 0}=e,{last:D=void 0}=e,{rest:U=void 0}=e,{prefix:H=""}=e,{suffix:J=""}=e,{formatter:x=(c,q)=>c}=e,{focus:ne=void 0}=e,{orientationStart:le=void 0}=e,{percentOf:ie=void 0}=e,{moveHandle:ee=void 0}=e,{fixFloat:W=void 0}=e;function fe(c){_||ee(void 0,c)}return n.$$set=c=>{"range"in c&&i(22,u=c.range),"min"in c&&i(0,k=c.min),"max"in c&&i(1,p=c.max),"step"in c&&i(23,m=c.step),"values"in c&&i(24,o=c.values),"vertical"in c&&i(2,h=c.vertical),"reversed"in c&&i(3,d=c.reversed),"hoverable"in c&&i(4,v=c.hoverable),"disabled"in c&&i(5,_=c.disabled),"pipstep"in c&&i(25,g=c.pipstep),"all"in c&&i(6,B=c.all),"first"in c&&i(7,A=c.first),"last"in c&&i(8,D=c.last),"rest"in c&&i(9,U=c.rest),"prefix"in c&&i(10,H=c.prefix),"suffix"in c&&i(11,J=c.suffix),"formatter"in c&&i(12,x=c.formatter),"focus"in c&&i(13,ne=c.focus),"orientationStart"in c&&i(14,le=c.orientationStart),"percentOf"in c&&i(15,ie=c.percentOf),"moveHandle"in c&&i(26,ee=c.moveHandle),"fixFloat"in c&&i(16,W=c.fixFloat)},n.$$.update=()=>{n.$$.dirty&41943047&&i(27,l=g||((p-k)/m>=(h?50:100)?(p-k)/(h?10:20):1)),n.$$.dirty&142606339&&i(20,s=parseInt((p-k)/(m*l),10)),n.$$.dirty&142671873&&i(19,f=function(c){return W(k+c*m*l)}),n.$$.dirty&16842752&&i(18,t=function(c){return o.some(q=>W(q)===W(c))}),n.$$.dirty&20971520&&i(17,a=function(c){if(u==="min")return o[0]>c;if(u==="max")return o[0]<c;if(u)return o[0]<c&&o[1]>c})},[k,p,h,d,v,_,B,A,D,U,H,J,x,ne,le,ie,W,a,t,f,s,fe,u,m,o,g,ee,l]}class fl extends ye{constructor(e){super(),Re(this,e,sl,il,Ce,{range:22,min:0,max:1,step:23,values:24,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:25,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:26,fixFloat:16})}}function ln(n,e,i){const l=n.slice();return l[64]=e[i],l[66]=i,l}function sn(n){let e,i=n[21](n[64],n[66],n[23](n[64]))+"",l,s=n[18]&&fn(n),f=n[19]&&tn(n);return{c(){e=y("span"),s&&s.c(),l=T(i),f&&f.c(),this.h()},l(t){e=R(t,"SPAN",{class:!0});var a=C(e);s&&s.l(a),l=I(a,i),f&&f.l(a),a.forEach(b),this.h()},h(){S(e,"class","rangeFloat")},m(t,a){P(t,e,a),s&&s.m(e,null),O(e,l),f&&f.m(e,null)},p(t,a){t[18]?s?s.p(t,a):(s=fn(t),s.c(),s.m(e,l)):s&&(s.d(1),s=null),a[0]&10485761&&i!==(i=t[21](t[64],t[66],t[23](t[64]))+"")&&Z(l,i),t[19]?f?f.p(t,a):(f=tn(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&b(e),s&&s.d(),f&&f.d()}}}function fn(n){let e,i;return{c(){e=y("span"),i=T(n[18]),this.h()},l(l){e=R(l,"SPAN",{class:!0});var s=C(e);i=I(s,n[18]),s.forEach(b),this.h()},h(){S(e,"class","rangeFloat-prefix")},m(l,s){P(l,e,s),O(e,i)},p(l,s){s[0]&262144&&Z(i,l[18])},d(l){l&&b(e)}}}function tn(n){let e,i;return{c(){e=y("span"),i=T(n[19]),this.h()},l(l){e=R(l,"SPAN",{class:!0});var s=C(e);i=I(s,n[19]),s.forEach(b),this.h()},h(){S(e,"class","rangeFloat-suffix")},m(l,s){P(l,e,s),O(e,i)},p(l,s){s[0]&524288&&Z(i,l[19])},d(l){l&&b(e)}}}function an(n){let e,i,l,s,f,t,a,u,k,p,m,o,h=n[7]&&sn(n);return{c(){e=y("span"),i=y("span"),l=X(),h&&h.c(),this.h()},l(d){e=R(d,"SPAN",{role:!0,class:!0,"data-handle":!0,style:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-orientation":!0,"aria-disabled":!0,disabled:!0,tabindex:!0});var v=C(e);i=R(v,"SPAN",{class:!0}),C(i).forEach(b),l=Y(v),h&&h.l(v),v.forEach(b),this.h()},h(){S(i,"class","rangeNub"),S(e,"role","slider"),S(e,"class","rangeHandle"),S(e,"data-handle",n[66]),S(e,"style",s=n[28]+": "+n[29][n[66]]+"%; z-index: "+(n[26]===n[66]?3:2)+";"),S(e,"aria-valuemin",f=n[2]===!0&&n[66]===1?n[0][0]:n[3]),S(e,"aria-valuemax",t=n[2]===!0&&n[66]===0?n[0][1]:n[4]),S(e,"aria-valuenow",a=n[64]),S(e,"aria-valuetext",u=""+(n[18]+n[21](n[64],n[66],n[23](n[64]))+n[19])),S(e,"aria-orientation",k=n[6]?"vertical":"horizontal"),S(e,"aria-disabled",n[10]),S(e,"disabled",n[10]),S(e,"tabindex",p=n[10]?-1:0),E(e,"active",n[24]&&n[26]===n[66]),E(e,"press",n[25]&&n[26]===n[66])},m(d,v){P(d,e,v),O(e,i),O(e,l),h&&h.m(e,null),m||(o=[M(e,"blur",n[34]),M(e,"focus",n[35]),M(e,"keydown",n[36])],m=!0)},p(d,v){d[7]?h?h.p(d,v):(h=sn(d),h.c(),h.m(e,null)):h&&(h.d(1),h=null),v[0]&872415232&&s!==(s=d[28]+": "+d[29][d[66]]+"%; z-index: "+(d[26]===d[66]?3:2)+";")&&S(e,"style",s),v[0]&13&&f!==(f=d[2]===!0&&d[66]===1?d[0][0]:d[3])&&S(e,"aria-valuemin",f),v[0]&21&&t!==(t=d[2]===!0&&d[66]===0?d[0][1]:d[4])&&S(e,"aria-valuemax",t),v[0]&1&&a!==(a=d[64])&&S(e,"aria-valuenow",a),v[0]&11272193&&u!==(u=""+(d[18]+d[21](d[64],d[66],d[23](d[64]))+d[19]))&&S(e,"aria-valuetext",u),v[0]&64&&k!==(k=d[6]?"vertical":"horizontal")&&S(e,"aria-orientation",k),v[0]&1024&&S(e,"aria-disabled",d[10]),v[0]&1024&&S(e,"disabled",d[10]),v[0]&1024&&p!==(p=d[10]?-1:0)&&S(e,"tabindex",p),v[0]&83886080&&E(e,"active",d[24]&&d[26]===d[66]),v[0]&100663296&&E(e,"press",d[25]&&d[26]===d[66])},d(d){d&&b(e),h&&h.d(),m=!1,pe(o)}}}function rn(n){let e,i;return{c(){e=y("span"),this.h()},l(l){e=R(l,"SPAN",{class:!0,style:!0}),C(e).forEach(b),this.h()},h(){S(e,"class","rangeBar"),S(e,"style",i=n[28]+": "+n[32](n[29])+"%; "+n[27]+": "+n[33](n[29])+"%;")},m(l,s){P(l,e,s)},p(l,s){s[0]&939524096&&i!==(i=l[28]+": "+l[32](l[29])+"%; "+l[27]+": "+l[33](l[29])+"%;")&&S(e,"style",i)},d(l){l&&b(e)}}}function un(n){let e,i;return e=new fl({props:{values:n[0],min:n[3],max:n[4],step:n[5],range:n[2],vertical:n[6],reversed:n[8],orientationStart:n[28],hoverable:n[9],disabled:n[10],all:n[13],first:n[14],last:n[15],rest:n[16],pipstep:n[12],prefix:n[18],suffix:n[19],formatter:n[20],focus:n[24],percentOf:n[23],moveHandle:n[31],fixFloat:n[30]}}),{c(){L(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,s){G(e,l,s),i=!0},p(l,s){const f={};s[0]&1&&(f.values=l[0]),s[0]&8&&(f.min=l[3]),s[0]&16&&(f.max=l[4]),s[0]&32&&(f.step=l[5]),s[0]&4&&(f.range=l[2]),s[0]&64&&(f.vertical=l[6]),s[0]&256&&(f.reversed=l[8]),s[0]&268435456&&(f.orientationStart=l[28]),s[0]&512&&(f.hoverable=l[9]),s[0]&1024&&(f.disabled=l[10]),s[0]&8192&&(f.all=l[13]),s[0]&16384&&(f.first=l[14]),s[0]&32768&&(f.last=l[15]),s[0]&65536&&(f.rest=l[16]),s[0]&4096&&(f.pipstep=l[12]),s[0]&262144&&(f.prefix=l[18]),s[0]&524288&&(f.suffix=l[19]),s[0]&1048576&&(f.formatter=l[20]),s[0]&16777216&&(f.focus=l[24]),s[0]&8388608&&(f.percentOf=l[23]),e.$set(f)},i(l){i||(F(e.$$.fragment,l),i=!0)},o(l){z(e.$$.fragment,l),i=!1},d(l){K(e,l)}}}function tl(n){let e,i,l,s,f,t,a=n[0],u=[];for(let m=0;m<a.length;m+=1)u[m]=an(ln(n,a,m));let k=n[2]&&rn(n),p=n[11]&&un(n);return{c(){e=y("div");for(let m=0;m<u.length;m+=1)u[m].c();i=X(),k&&k.c(),l=X(),p&&p.c(),this.h()},l(m){e=R(m,"DIV",{id:!0,class:!0});var o=C(e);for(let h=0;h<u.length;h+=1)u[h].l(o);i=Y(o),k&&k.l(o),l=Y(o),p&&p.l(o),o.forEach(b),this.h()},h(){S(e,"id",n[17]),S(e,"class","rangeSlider"),E(e,"range",n[2]),E(e,"disabled",n[10]),E(e,"hoverable",n[9]),E(e,"vertical",n[6]),E(e,"reversed",n[8]),E(e,"focus",n[24]),E(e,"min",n[2]==="min"),E(e,"max",n[2]==="max"),E(e,"pips",n[11]),E(e,"pip-labels",n[13]==="label"||n[14]==="label"||n[15]==="label"||n[16]==="label")},m(m,o){P(m,e,o);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(e,null);O(e,i),k&&k.m(e,null),O(e,l),p&&p.m(e,null),n[50](e),s=!0,f||(t=[M(window,"mousedown",n[39]),M(window,"touchstart",n[39]),M(window,"mousemove",n[40]),M(window,"touchmove",n[40]),M(window,"mouseup",n[41]),M(window,"touchend",n[42]),M(window,"keydown",n[43]),M(e,"mousedown",n[37]),M(e,"mouseup",n[38]),M(e,"touchstart",ge(n[37])),M(e,"touchend",ge(n[38]))],f=!0)},p(m,o){if(o[0]&934020317|o[1]&56){a=m[0];let h;for(h=0;h<a.length;h+=1){const d=ln(m,a,h);u[h]?u[h].p(d,o):(u[h]=an(d),u[h].c(),u[h].m(e,i))}for(;h<u.length;h+=1)u[h].d(1);u.length=a.length}m[2]?k?k.p(m,o):(k=rn(m),k.c(),k.m(e,l)):k&&(k.d(1),k=null),m[11]?p?(p.p(m,o),o[0]&2048&&F(p,1)):(p=un(m),p.c(),F(p,1),p.m(e,null)):p&&(_n(),z(p,1,1,()=>{p=null}),hn()),(!s||o[0]&131072)&&S(e,"id",m[17]),(!s||o[0]&4)&&E(e,"range",m[2]),(!s||o[0]&1024)&&E(e,"disabled",m[10]),(!s||o[0]&512)&&E(e,"hoverable",m[9]),(!s||o[0]&64)&&E(e,"vertical",m[6]),(!s||o[0]&256)&&E(e,"reversed",m[8]),(!s||o[0]&16777216)&&E(e,"focus",m[24]),(!s||o[0]&4)&&E(e,"min",m[2]==="min"),(!s||o[0]&4)&&E(e,"max",m[2]==="max"),(!s||o[0]&2048)&&E(e,"pips",m[11]),(!s||o[0]&122880)&&E(e,"pip-labels",m[13]==="label"||m[14]==="label"||m[15]==="label"||m[16]==="label")},i(m){s||(F(p),s=!0)},o(m){z(p),s=!1},d(m){m&&b(e),mn(u,m),k&&k.d(),p&&p.d(),n[50](null),f=!1,pe(t)}}}function on(n){if(!n)return-1;for(var e=0;n=n.previousElementSibling;)e++;return e}function Ne(n){return n.type.includes("touch")?n.touches[0]:n}function al(n,e,i){let l,s,f,t,a,u,k=ke,p=()=>(k(),k=Tn(he,r=>i(29,u=r)),he);n.$$.on_destroy.push(()=>k());let{slider:m=void 0}=e,{range:o=!1}=e,{pushy:h=!1}=e,{min:d=0}=e,{max:v=100}=e,{step:_=1}=e,{values:g=[(v+d)/2]}=e,{vertical:B=!1}=e,{float:A=!1}=e,{reversed:D=!1}=e,{hoverable:U=!0}=e,{disabled:H=!1}=e,{pips:J=!1}=e,{pipstep:x=void 0}=e,{all:ne=void 0}=e,{first:le=void 0}=e,{last:ie=void 0}=e,{rest:ee=void 0}=e,{id:W=void 0}=e,{prefix:fe=""}=e,{suffix:c=""}=e,{formatter:q=(r,w,N)=>r}=e,{handleFormatter:ce=q}=e,{precision:we=2}=e,{springValues:Se={stiffness:.15,damping:.4}}=e;const ve=On();let Ee=0,se=!1,te=!1,ae=!1,Pe=!1,Q=g.length-1,me,_e,he;const de=r=>parseFloat(r.toFixed(we));function dn(r){const w=m.querySelectorAll(".handle"),N=Array.prototype.includes.call(w,r),V=Array.prototype.some.call(w,$=>$.contains(r));return N||V}function gn(r){return o==="min"||o==="max"?r.slice(0,1):o?r.slice(0,2):r}function ze(){return m.getBoundingClientRect()}function pn(r){const w=ze();let N=0,V=0,$=0;B?(N=r.clientY-w.top,V=N/w.height*100,V=D?V:100-V):(N=r.clientX-w.left,V=N/w.width*100,V=D?100-V:V),$=(v-d)/100*V+d;let Oe;return o===!0&&g[0]===g[1]?$>g[1]?1:0:(Oe=g.indexOf([...g].sort((Cn,Mn)=>Math.abs($-Cn)-Math.abs($-Mn))[0]),Oe)}function Ae(r){const w=ze();let N=0,V=0,$=0;B?(N=r.clientY-w.top,V=N/w.height*100,V=D?V:100-V):(N=r.clientX-w.left,V=N/w.width*100,V=D?100-V:V),$=(v-d)/100*V+d,re(Q,$)}function re(r,w){return w=f(w),typeof r>"u"&&(r=Q),o&&(r===0&&w>g[1]?h?i(0,g[1]=w,g):w=g[1]:r===1&&w<g[0]&&(h?i(0,g[0]=w,g):w=g[0])),g[r]!==w&&i(0,g[r]=w,g),_e!==w&&(yn(),_e=w),w}function cn(r){return o==="min"?0:r[0]}function bn(r){return o==="max"?0:o==="min"?100-r[0]:100-r[1]}function kn(r){Pe&&(i(24,se=!1),te=!1,i(25,ae=!1))}function wn(r){H||(i(26,Q=on(r.target)),i(24,se=!0))}function Sn(r){if(!H){const w=on(r.target);let N=r.ctrlKey||r.metaKey||r.shiftKey?_*10:_,V=!1;switch(r.key){case"PageDown":N*=10;case"ArrowRight":case"ArrowUp":re(w,g[w]+N),V=!0;break;case"PageUp":N*=10;case"ArrowLeft":case"ArrowDown":re(w,g[w]-N),V=!0;break;case"Home":re(w,d),V=!0;break;case"End":re(w,v),V=!0;break}V&&(r.preventDefault(),r.stopPropagation())}}function vn(r){if(!H){const w=r.target,N=Ne(r);i(24,se=!0),te=!0,i(25,ae=!0),i(26,Q=pn(N)),me=_e=f(g[Q]),Fn(),r.type==="touchstart"&&!w.matches(".pipVal")&&Ae(N)}}function En(r){r.type==="touchend"&&He(),i(25,ae=!1)}function Pn(r){Pe=!1,se&&r.target!==m&&!m.contains(r.target)&&i(24,se=!1)}function An(r){H||te&&Ae(Ne(r))}function Vn(r){if(!H){const w=r.target;te&&((w===m||m.contains(w))&&(i(24,se=!0),!dn(w)&&!w.matches(".pipVal")&&Ae(Ne(r))),He())}te=!1,i(25,ae=!1)}function Nn(r){te=!1,i(25,ae=!1)}function Dn(r){H||(r.target===m||m.contains(r.target))&&(Pe=!0)}function Fn(){!H&&ve("start",{activeHandle:Q,value:me,values:g.map(r=>f(r))})}function He(){!H&&ve("stop",{activeHandle:Q,startValue:me,value:g[Q],values:g.map(r=>f(r))})}function yn(){!H&&ve("change",{activeHandle:Q,startValue:me,previousValue:typeof _e>"u"?me:_e,value:g[Q],values:g.map(r=>f(r))})}function Rn(r){Me[r?"unshift":"push"](()=>{m=r,i(1,m)})}return n.$$set=r=>{"slider"in r&&i(1,m=r.slider),"range"in r&&i(2,o=r.range),"pushy"in r&&i(44,h=r.pushy),"min"in r&&i(3,d=r.min),"max"in r&&i(4,v=r.max),"step"in r&&i(5,_=r.step),"values"in r&&i(0,g=r.values),"vertical"in r&&i(6,B=r.vertical),"float"in r&&i(7,A=r.float),"reversed"in r&&i(8,D=r.reversed),"hoverable"in r&&i(9,U=r.hoverable),"disabled"in r&&i(10,H=r.disabled),"pips"in r&&i(11,J=r.pips),"pipstep"in r&&i(12,x=r.pipstep),"all"in r&&i(13,ne=r.all),"first"in r&&i(14,le=r.first),"last"in r&&i(15,ie=r.last),"rest"in r&&i(16,ee=r.rest),"id"in r&&i(17,W=r.id),"prefix"in r&&i(18,fe=r.prefix),"suffix"in r&&i(19,c=r.suffix),"formatter"in r&&i(20,q=r.formatter),"handleFormatter"in r&&i(21,ce=r.handleFormatter),"precision"in r&&i(45,we=r.precision),"springValues"in r&&i(46,Se=r.springValues)},n.$$.update=()=>{n.$$.dirty[0]&24&&i(49,s=function(r){return r<=d?d:r>=v?v:r}),n.$$.dirty[0]&56|n.$$.dirty[1]&262144&&i(48,f=function(r){if(r<=d)return de(d);if(r>=v)return de(v);let w=(r-d)%_,N=r-w;return Math.abs(w)*2>=_&&(N+=w>0?_:-_),N=s(N),de(N)}),n.$$.dirty[0]&24&&i(23,l=function(r){let w=(r-d)/(v-d)*100;return isNaN(w)||w<=0?0:w>=100?100:de(w)}),n.$$.dirty[0]&12582937|n.$$.dirty[1]&229376&&(Array.isArray(g)||(i(0,g=[(v+d)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")),i(0,g=gn(g.map(r=>f(r)))),Ee!==g.length?p(i(22,he=nl(g.map(r=>l(r)),Se))):he.set(g.map(r=>l(r))),i(47,Ee=g.length)),n.$$.dirty[0]&320&&i(28,t=B?D?"top":"bottom":D?"right":"left"),n.$$.dirty[0]&320&&i(27,a=B?D?"bottom":"top":D?"left":"right")},[g,m,o,d,v,_,B,A,D,U,H,J,x,ne,le,ie,ee,W,fe,c,q,ce,he,l,se,ae,Q,a,t,u,de,re,cn,bn,kn,wn,Sn,vn,En,Pn,An,Vn,Nn,Dn,h,we,Se,Ee,f,s,Rn]}class rl extends ye{constructor(e){super(),Re(this,e,al,tl,Ce,{slider:1,range:2,pushy:44,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,precision:45,springValues:46},null,[-1,-1,-1])}}function ul(n){let e;return{c(){e=T("Entraîner le réseau avec des images")},l(i){e=I(i,"Entraîner le réseau avec des images")},m(i,l){P(i,e,l)},d(i){i&&b(e)}}}function ol(n){let e,i;return e=new De({props:{cols:4,$$slots:{default:[wl]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,s){G(e,l,s),i=!0},p(l,s){const f={};s&65550&&(f.$$scope={dirty:s,ctx:l}),e.$set(f)},i(l){i||(F(e.$$.fragment,l),i=!0)},o(l){z(e.$$.fragment,l),i=!1},d(l){K(e,l)}}}function ml(n){let e,i;return e=new $n({props:{size:"xl"}}),{c(){L(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,s){G(e,l,s),i=!0},p:ke,i(l){i||(F(e.$$.fragment,l),i=!0)},o(l){z(e.$$.fragment,l),i=!1},d(l){K(e,l)}}}function _l(n){let e;return{c(){e=T("Taux d'apprentissage")},l(i){e=I(i,"Taux d'apprentissage")},m(i,l){P(i,e,l)},d(i){i&&b(e)}}}function hl(n){let e;return{c(){e=T("Entraîner avec 100 images")},l(i){e=I(i,"Entraîner avec 100 images")},m(i,l){P(i,e,l)},d(i){i&&b(e)}}}function dl(n){let e;return{c(){e=T("Entraîner avec 1000 images")},l(i){e=I(i,"Entraîner avec 1000 images")},m(i,l){P(i,e,l)},d(i){i&&b(e)}}}function gl(n){let e;return{c(){e=T("Entraîner avec 5000 images, 8 fois")},l(i){e=I(i,"Entraîner avec 5000 images, 8 fois")},m(i,l){P(i,e,l)},d(i){i&&b(e)}}}function pl(n){let e;return{c(){e=T("Réinitialiser le réseau")},l(i){e=I(i,"Réinitialiser le réseau")},m(i,l){P(i,e,l)},d(i){i&&b(e)}}}function cl(n){let e,i,l,s,f,t,a,u,k,p,m,o,h;e=new el({props:{$$slots:{default:[_l]},$$scope:{ctx:n}}});function d(_){n[10](_)}let v={min:0,max:1,step:.2,pips:!0,all:"label",springValues:{stiffness:.2,damping:.7}};return n[1]!==void 0&&(v.values=n[1]),l=new rl({props:v}),Me.push(()=>jn(l,"values",d)),t=new be({props:{$$slots:{default:[hl]},$$scope:{ctx:n}}}),t.$on("click",n[5]),u=new be({props:{$$slots:{default:[dl]},$$scope:{ctx:n}}}),u.$on("click",n[6]),p=new be({props:{$$slots:{default:[gl]},$$scope:{ctx:n}}}),p.$on("click",n[7]),o=new be({props:{color:"Red",$$slots:{default:[pl]},$$scope:{ctx:n}}}),o.$on("click",n[8]),{c(){L(e.$$.fragment),i=X(),L(l.$$.fragment),f=X(),L(t.$$.fragment),a=X(),L(u.$$.fragment),k=X(),L(p.$$.fragment),m=X(),L(o.$$.fragment)},l(_){j(e.$$.fragment,_),i=Y(_),j(l.$$.fragment,_),f=Y(_),j(t.$$.fragment,_),a=Y(_),j(u.$$.fragment,_),k=Y(_),j(p.$$.fragment,_),m=Y(_),j(o.$$.fragment,_)},m(_,g){G(e,_,g),P(_,i,g),G(l,_,g),P(_,f,g),G(t,_,g),P(_,a,g),G(u,_,g),P(_,k,g),G(p,_,g),P(_,m,g),G(o,_,g),h=!0},p(_,g){const B={};g&65536&&(B.$$scope={dirty:g,ctx:_}),e.$set(B);const A={};!s&&g&2&&(s=!0,A.values=_[1],Gn(()=>s=!1)),l.$set(A);const D={};g&65536&&(D.$$scope={dirty:g,ctx:_}),t.$set(D);const U={};g&65536&&(U.$$scope={dirty:g,ctx:_}),u.$set(U);const H={};g&65536&&(H.$$scope={dirty:g,ctx:_}),p.$set(H);const J={};g&65536&&(J.$$scope={dirty:g,ctx:_}),o.$set(J)},i(_){h||(F(e.$$.fragment,_),F(l.$$.fragment,_),F(t.$$.fragment,_),F(u.$$.fragment,_),F(p.$$.fragment,_),F(o.$$.fragment,_),h=!0)},o(_){z(e.$$.fragment,_),z(l.$$.fragment,_),z(t.$$.fragment,_),z(u.$$.fragment,_),z(p.$$.fragment,_),z(o.$$.fragment,_),h=!1},d(_){K(e,_),_&&b(i),K(l,_),_&&b(f),K(t,_),_&&b(a),K(u,_),_&&b(k),K(p,_),_&&b(m),K(o,_)}}}function bl(n){let e,i,l,s,f,t;return e=new Un({props:{h:"xl"}}),l=new xn({props:{$$slots:{default:[cl]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),i=X(),L(l.$$.fragment),s=X(),f=y("div")},l(a){j(e.$$.fragment,a),i=Y(a),j(l.$$.fragment,a),s=Y(a),f=R(a,"DIV",{}),C(f).forEach(b)},m(a,u){G(e,a,u),P(a,i,u),G(l,a,u),P(a,s,u),P(a,f,u),n[11](f),t=!0},p(a,u){const k={};u&65538&&(k.$$scope={dirty:u,ctx:a}),l.$set(k)},i(a){t||(F(e.$$.fragment,a),F(l.$$.fragment,a),t=!0)},o(a){z(e.$$.fragment,a),z(l.$$.fragment,a),t=!1},d(a){K(e,a),a&&b(i),K(l,a),a&&b(s),a&&b(f),n[11](null)}}}function kl(n){let e,i;return e=new Zn({props:{networkShape:n[4],weights:n[3],linkFilter:vl}}),{c(){L(e.$$.fragment)},l(l){j(e.$$.fragment,l)},m(l,s){G(e,l,s),i=!0},p(l,s){const f={};s&8&&(f.weights=l[3]),e.$set(f)},i(l){i||(F(e.$$.fragment,l),i=!0)},o(l){z(e.$$.fragment,l),i=!1},d(l){K(e,l)}}}function wl(n){let e,i,l,s;return e=new De.Col({props:{span:1,$$slots:{default:[bl]},$$scope:{ctx:n}}}),l=new De.Col({props:{span:3,$$slots:{default:[kl]},$$scope:{ctx:n}}}),{c(){L(e.$$.fragment),i=X(),L(l.$$.fragment)},l(f){j(e.$$.fragment,f),i=Y(f),j(l.$$.fragment,f)},m(f,t){G(e,f,t),P(f,i,t),G(l,f,t),s=!0},p(f,t){const a={};t&65542&&(a.$$scope={dirty:t,ctx:f}),e.$set(a);const u={};t&65544&&(u.$$scope={dirty:t,ctx:f}),l.$set(u)},i(f){s||(F(e.$$.fragment,f),F(l.$$.fragment,f),s=!0)},o(f){z(e.$$.fragment,f),z(l.$$.fragment,f),s=!1},d(f){K(e,f),f&&b(i),K(l,f)}}}function Sl(n){let e,i,l,s,f,t,a,u;e=new Qn({props:{order:1,$$slots:{default:[ul]},$$scope:{ctx:n}}}),l=new Wn({});const k=[ml,ol],p=[];function m(o,h){return o[0]?0:1}return f=m(n),t=p[f]=k[f](n),{c(){L(e.$$.fragment),i=X(),L(l.$$.fragment),s=X(),t.c(),a=oe()},l(o){j(e.$$.fragment,o),i=Y(o),j(l.$$.fragment,o),s=Y(o),t.l(o),a=oe()},m(o,h){G(e,o,h),P(o,i,h),G(l,o,h),P(o,s,h),p[f].m(o,h),P(o,a,h),u=!0},p(o,[h]){const d={};h&65536&&(d.$$scope={dirty:h,ctx:o}),e.$set(d);let v=f;f=m(o),f===v?p[f].p(o,h):(_n(),z(p[v],1,1,()=>{p[v]=null}),hn(),t=p[f],t?t.p(o,h):(t=p[f]=k[f](o),t.c()),F(t,1),t.m(a.parentNode,a))},i(o){u||(F(e.$$.fragment,o),F(l.$$.fragment,o),F(t),u=!0)},o(o){z(e.$$.fragment,o),z(l.$$.fragment,o),z(t),u=!1},d(o){K(e,o),o&&b(i),K(l,o),o&&b(s),p[f].d(o),o&&b(a)}}}function vl(n){const e=n.length;return e<=500?n:[...n].sort((l,s)=>Math.abs(s.weight)-Math.abs(l.weight)).slice(0,Math.min(500,.1*e))}function El(n,e,i){let l,s;In(n,Ve,A=>i(9,s=A));const f=Kn();let t,a=!0,u=[0],k,p;Bn(async()=>{k=await zn(()=>import("../chunks/index.79f88ccb.js").then(A=>A.i),["../chunks/index.79f88ccb.js","../chunks/stores.e803257c.js","../chunks/index.cf65f726.js","../chunks/index.bfa0a56d.js","../chunks/paths.ae247944.js","../chunks/vega-themes.module.af05f78d.js"],import.meta.url),Xn.load().then(A=>{i(0,a=!1),t=A}),Ie.load().then(A=>{console.log("loaded from store",A),i(1,u=[A])})}),Ln(async()=>{Ie.set(u[0])});async function m({trainDataSize:A=5e3,batchSize:D=100,epochs:U=1,learningRate:H=.01}={}){const J=s;J.optimizer=new qn(H);const x=A/5,[ne,le]=Be(()=>{const q=t.nextTrainBatch(A);return[q.xs.reshape([A,28*28]),q.labels]}),[ie,ee]=Be(()=>{const q=t.nextTestBatch(x);return[q.xs.reshape([x,28*28]),q.labels]}),W=["acc","val_acc"],fe=k.show.fitCallbacks(p,W);function c(q,ce){return v(),fe.onBatchEnd(q,ce)}return J.fit(ne,le,{validationData:[ie,ee],epochs:U,batchSize:D,shuffle:!0,callbacks:{onBatchEnd:c}})}async function o(){m({trainDataSize:100,batchSize:25,epochs:1,learningRate:u[0]})}async function h(){m({trainDataSize:1e3,batchSize:50,epochs:1,learningRate:u[0]})}async function d(){m({trainDataSize:5e3,batchSize:100,epochs:8,learningRate:u[0]})}function v(){Ve.update(A=>A)}function _(){Ve.update(()=>Yn())}function g(A){u=A,i(1,u)}function B(A){Me[A?"unshift":"push"](()=>{p=A,i(2,p)})}return n.$$.update=()=>{n.$$.dirty&512&&i(3,l=s==null?void 0:s.weights)},[a,u,p,l,f,o,h,d,_,s,g,B]}class zl extends ye{constructor(e){super(),Re(this,e,El,Sl,Ce,{})}}export{zl as component,Ml as universal};
