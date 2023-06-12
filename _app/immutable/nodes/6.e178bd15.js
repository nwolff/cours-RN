import{_ as Rl}from"../chunks/preload-helper.41c905a7.js";import{a2 as Te,a3 as Ml,S as ye,i as Ce,s as Re,k as y,a as X,l as C,m as R,c as Y,h as c,n as v,a4 as E,b as P,O,R as ke,X as M,Z as ue,a5 as ge,_ as pe,q as T,r as I,u as Z,e as oe,a6 as ul,g as F,v as ol,d as z,f as ml,$ as zl,y as L,z as j,A as G,B as K,a7 as Hl,w as Me,T as Ol,o as Tl,D as Il,G as Bl}from"../chunks/index.bfa0a56d.js";import{a as Ll,m as Ve,g as jl,S as Gl,b as Ie}from"../chunks/stores.492409ec.js";import{S as Kl,N as Xl}from"../chunks/NetworkGraph.54215c24.js";import{w as Yl}from"../chunks/index.cf65f726.js";import{T as ql,D as Ul}from"../chunks/Title.aa4b3733.js";import{G as De,L as Zl,B as ce}from"../chunks/combinator.eb0d1d06.js";import{S as Jl}from"../chunks/Stack.0109b032.js";import{T as Ql}from"../chunks/Text.8d71f0ec.js";function Be(l){return Object.prototype.toString.call(l)==="[object Date]"}function Fe(l,e,i,n){if(typeof i=="number"||Be(i)){const s=n-i,f=(i-e)/(l.dt||1/60),t=l.opts.stiffness*s,a=l.opts.damping*f,u=(t-a)*l.inv_mass,k=(f+u)*l.dt;return Math.abs(k)<l.opts.precision&&Math.abs(s)<l.opts.precision?n:(l.settled=!1,Be(i)?new Date(i.getTime()+k):i+k)}else{if(Array.isArray(i))return i.map((s,f)=>Fe(l,e[f],i[f],n[f]));if(typeof i=="object"){const s={};for(const f in i)s[f]=Fe(l,e[f],i[f],n[f]);return s}else throw new Error(`Cannot spring ${typeof i} values`)}}function Wl(l,e={}){const i=Yl(l),{stiffness:n=.15,damping:s=.8,precision:f=.01}=e;let t,a,u,k=l,p=l,m=1,o=0,h=!1;function d(_,g={}){p=_;const B=u={};return l==null||g.hard||S.stiffness>=1&&S.damping>=1?(h=!0,t=Te(),k=_,i.set(l=p),Promise.resolve()):(g.soft&&(o=1/((g.soft===!0?.5:+g.soft)*60),m=0),a||(t=Te(),h=!1,a=Ml(A=>{if(h)return h=!1,a=null,!1;m=Math.min(m+o,1);const D={inv_mass:m,opts:S,settled:!0,dt:(A-t)*60/1e3},U=Fe(D,k,l,p);return t=A,k=l,i.set(l=U),D.settled&&(a=null),!D.settled})),new Promise(A=>{a.promise.then(()=>{B===u&&A()})}))}const S={set:d,update:(_,g)=>d(_(p,l),g),subscribe:i.subscribe,stiffness:n,damping:s,precision:f};return S}const $l=!1,yn=Object.freeze(Object.defineProperty({__proto__:null,ssr:$l},Symbol.toStringTag,{value:"Module"}));function Le(l,e,i){const n=l.slice();return n[28]=e[i],n[30]=i,n}function je(l){let e,i,n,s,f=(l[6]==="label"||l[7]==="label")&&Ge(l);return{c(){e=y("span"),f&&f.c(),this.h()},l(t){e=C(t,"SPAN",{class:!0,style:!0});var a=R(e);f&&f.l(a),a.forEach(c),this.h()},h(){v(e,"class","pip first"),v(e,"style",i=l[14]+": 0%;"),E(e,"selected",l[18](l[0])),E(e,"in-range",l[17](l[0]))},m(t,a){P(t,e,a),f&&f.m(e,null),n||(s=[M(e,"click",function(){ue(l[21](l[0]))&&l[21](l[0]).apply(this,arguments)}),M(e,"touchend",ge(function(){ue(l[21](l[0]))&&l[21](l[0]).apply(this,arguments)}))],n=!0)},p(t,a){l=t,l[6]==="label"||l[7]==="label"?f?f.p(l,a):(f=Ge(l),f.c(),f.m(e,null)):f&&(f.d(1),f=null),a&16384&&i!==(i=l[14]+": 0%;")&&v(e,"style",i),a&262145&&E(e,"selected",l[18](l[0])),a&131073&&E(e,"in-range",l[17](l[0]))},d(t){t&&c(e),f&&f.d(),n=!1,pe(s)}}}function Ge(l){let e,i=l[12](l[16](l[0]),0,0)+"",n,s=l[10]&&Ke(l),f=l[11]&&Xe(l);return{c(){e=y("span"),s&&s.c(),n=T(i),f&&f.c(),this.h()},l(t){e=C(t,"SPAN",{class:!0});var a=R(e);s&&s.l(a),n=I(a,i),f&&f.l(a),a.forEach(c),this.h()},h(){v(e,"class","pipVal")},m(t,a){P(t,e,a),s&&s.m(e,null),O(e,n),f&&f.m(e,null)},p(t,a){t[10]?s?s.p(t,a):(s=Ke(t),s.c(),s.m(e,n)):s&&(s.d(1),s=null),a&69633&&i!==(i=t[12](t[16](t[0]),0,0)+"")&&Z(n,i),t[11]?f?f.p(t,a):(f=Xe(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&c(e),s&&s.d(),f&&f.d()}}}function Ke(l){let e,i;return{c(){e=y("span"),i=T(l[10]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var s=R(e);i=I(s,l[10]),s.forEach(c),this.h()},h(){v(e,"class","pipVal-prefix")},m(n,s){P(n,e,s),O(e,i)},p(n,s){s&1024&&Z(i,n[10])},d(n){n&&c(e)}}}function Xe(l){let e,i;return{c(){e=y("span"),i=T(l[11]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var s=R(e);i=I(s,l[11]),s.forEach(c),this.h()},h(){v(e,"class","pipVal-suffix")},m(n,s){P(n,e,s),O(e,i)},p(n,s){s&2048&&Z(i,n[11])},d(n){n&&c(e)}}}function Ye(l){let e,i=Array(l[20]+1),n=[];for(let s=0;s<i.length;s+=1)n[s]=Qe(Le(l,i,s));return{c(){for(let s=0;s<n.length;s+=1)n[s].c();e=oe()},l(s){for(let f=0;f<n.length;f+=1)n[f].l(s);e=oe()},m(s,f){for(let t=0;t<n.length;t+=1)n[t]&&n[t].m(s,f);P(s,e,f)},p(s,f){if(f&4120131){i=Array(s[20]+1);let t;for(t=0;t<i.length;t+=1){const a=Le(s,i,t);n[t]?n[t].p(a,f):(n[t]=Qe(a),n[t].c(),n[t].m(e.parentNode,e))}for(;t<n.length;t+=1)n[t].d(1);n.length=i.length}},d(s){ul(n,s),s&&c(e)}}}function qe(l){let e,i,n,s,f,t=(l[6]==="label"||l[9]==="label")&&Ue(l);return{c(){e=y("span"),t&&t.c(),i=X(),this.h()},l(a){e=C(a,"SPAN",{class:!0,style:!0});var u=R(e);t&&t.l(u),i=Y(u),u.forEach(c),this.h()},h(){v(e,"class","pip"),v(e,"style",n=l[14]+": "+l[15](l[19](l[30]))+"%;"),E(e,"selected",l[18](l[19](l[30]))),E(e,"in-range",l[17](l[19](l[30])))},m(a,u){P(a,e,u),t&&t.m(e,null),O(e,i),s||(f=[M(e,"click",function(){ue(l[21](l[19](l[30])))&&l[21](l[19](l[30])).apply(this,arguments)}),M(e,"touchend",ge(function(){ue(l[21](l[19](l[30])))&&l[21](l[19](l[30])).apply(this,arguments)}))],s=!0)},p(a,u){l=a,l[6]==="label"||l[9]==="label"?t?t.p(l,u):(t=Ue(l),t.c(),t.m(e,i)):t&&(t.d(1),t=null),u&573440&&n!==(n=l[14]+": "+l[15](l[19](l[30]))+"%;")&&v(e,"style",n),u&786432&&E(e,"selected",l[18](l[19](l[30]))),u&655360&&E(e,"in-range",l[17](l[19](l[30])))},d(a){a&&c(e),t&&t.d(),s=!1,pe(f)}}}function Ue(l){let e,i=l[12](l[19](l[30]),l[30],l[15](l[19](l[30])))+"",n,s=l[10]&&Ze(l),f=l[11]&&Je(l);return{c(){e=y("span"),s&&s.c(),n=T(i),f&&f.c(),this.h()},l(t){e=C(t,"SPAN",{class:!0});var a=R(e);s&&s.l(a),n=I(a,i),f&&f.l(a),a.forEach(c),this.h()},h(){v(e,"class","pipVal")},m(t,a){P(t,e,a),s&&s.m(e,null),O(e,n),f&&f.m(e,null)},p(t,a){t[10]?s?s.p(t,a):(s=Ze(t),s.c(),s.m(e,n)):s&&(s.d(1),s=null),a&561152&&i!==(i=t[12](t[19](t[30]),t[30],t[15](t[19](t[30])))+"")&&Z(n,i),t[11]?f?f.p(t,a):(f=Je(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&c(e),s&&s.d(),f&&f.d()}}}function Ze(l){let e,i;return{c(){e=y("span"),i=T(l[10]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var s=R(e);i=I(s,l[10]),s.forEach(c),this.h()},h(){v(e,"class","pipVal-prefix")},m(n,s){P(n,e,s),O(e,i)},p(n,s){s&1024&&Z(i,n[10])},d(n){n&&c(e)}}}function Je(l){let e,i;return{c(){e=y("span"),i=T(l[11]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var s=R(e);i=I(s,l[11]),s.forEach(c),this.h()},h(){v(e,"class","pipVal-suffix")},m(n,s){P(n,e,s),O(e,i)},p(n,s){s&2048&&Z(i,n[11])},d(n){n&&c(e)}}}function Qe(l){let e=l[19](l[30])!==l[0]&&l[19](l[30])!==l[1],i,n=e&&qe(l);return{c(){n&&n.c(),i=oe()},l(s){n&&n.l(s),i=oe()},m(s,f){n&&n.m(s,f),P(s,i,f)},p(s,f){f&524291&&(e=s[19](s[30])!==s[0]&&s[19](s[30])!==s[1]),e?n?n.p(s,f):(n=qe(s),n.c(),n.m(i.parentNode,i)):n&&(n.d(1),n=null)},d(s){n&&n.d(s),s&&c(i)}}}function We(l){let e,i,n,s,f=(l[6]==="label"||l[8]==="label")&&$e(l);return{c(){e=y("span"),f&&f.c(),this.h()},l(t){e=C(t,"SPAN",{class:!0,style:!0});var a=R(e);f&&f.l(a),a.forEach(c),this.h()},h(){v(e,"class","pip last"),v(e,"style",i=l[14]+": 100%;"),E(e,"selected",l[18](l[1])),E(e,"in-range",l[17](l[1]))},m(t,a){P(t,e,a),f&&f.m(e,null),n||(s=[M(e,"click",function(){ue(l[21](l[1]))&&l[21](l[1]).apply(this,arguments)}),M(e,"touchend",ge(function(){ue(l[21](l[1]))&&l[21](l[1]).apply(this,arguments)}))],n=!0)},p(t,a){l=t,l[6]==="label"||l[8]==="label"?f?f.p(l,a):(f=$e(l),f.c(),f.m(e,null)):f&&(f.d(1),f=null),a&16384&&i!==(i=l[14]+": 100%;")&&v(e,"style",i),a&262146&&E(e,"selected",l[18](l[1])),a&131074&&E(e,"in-range",l[17](l[1]))},d(t){t&&c(e),f&&f.d(),n=!1,pe(s)}}}function $e(l){let e,i=l[12](l[16](l[1]),l[20],100)+"",n,s=l[10]&&xe(l),f=l[11]&&el(l);return{c(){e=y("span"),s&&s.c(),n=T(i),f&&f.c(),this.h()},l(t){e=C(t,"SPAN",{class:!0});var a=R(e);s&&s.l(a),n=I(a,i),f&&f.l(a),a.forEach(c),this.h()},h(){v(e,"class","pipVal")},m(t,a){P(t,e,a),s&&s.m(e,null),O(e,n),f&&f.m(e,null)},p(t,a){t[10]?s?s.p(t,a):(s=xe(t),s.c(),s.m(e,n)):s&&(s.d(1),s=null),a&1118210&&i!==(i=t[12](t[16](t[1]),t[20],100)+"")&&Z(n,i),t[11]?f?f.p(t,a):(f=el(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&c(e),s&&s.d(),f&&f.d()}}}function xe(l){let e,i;return{c(){e=y("span"),i=T(l[10]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var s=R(e);i=I(s,l[10]),s.forEach(c),this.h()},h(){v(e,"class","pipVal-prefix")},m(n,s){P(n,e,s),O(e,i)},p(n,s){s&1024&&Z(i,n[10])},d(n){n&&c(e)}}}function el(l){let e,i;return{c(){e=y("span"),i=T(l[11]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var s=R(e);i=I(s,l[11]),s.forEach(c),this.h()},h(){v(e,"class","pipVal-suffix")},m(n,s){P(n,e,s),O(e,i)},p(n,s){s&2048&&Z(i,n[11])},d(n){n&&c(e)}}}function xl(l){let e,i,n,s=(l[6]&&l[7]!==!1||l[7])&&je(l),f=(l[6]&&l[9]!==!1||l[9])&&Ye(l),t=(l[6]&&l[8]!==!1||l[8])&&We(l);return{c(){e=y("div"),s&&s.c(),i=X(),f&&f.c(),n=X(),t&&t.c(),this.h()},l(a){e=C(a,"DIV",{class:!0});var u=R(e);s&&s.l(u),i=Y(u),f&&f.l(u),n=Y(u),t&&t.l(u),u.forEach(c),this.h()},h(){v(e,"class","rangePips"),E(e,"disabled",l[5]),E(e,"hoverable",l[4]),E(e,"vertical",l[2]),E(e,"reversed",l[3]),E(e,"focus",l[13])},m(a,u){P(a,e,u),s&&s.m(e,null),O(e,i),f&&f.m(e,null),O(e,n),t&&t.m(e,null)},p(a,[u]){a[6]&&a[7]!==!1||a[7]?s?s.p(a,u):(s=je(a),s.c(),s.m(e,i)):s&&(s.d(1),s=null),a[6]&&a[9]!==!1||a[9]?f?f.p(a,u):(f=Ye(a),f.c(),f.m(e,n)):f&&(f.d(1),f=null),a[6]&&a[8]!==!1||a[8]?t?t.p(a,u):(t=We(a),t.c(),t.m(e,null)):t&&(t.d(1),t=null),u&32&&E(e,"disabled",a[5]),u&16&&E(e,"hoverable",a[4]),u&4&&E(e,"vertical",a[2]),u&8&&E(e,"reversed",a[3]),u&8192&&E(e,"focus",a[13])},i:ke,o:ke,d(a){a&&c(e),s&&s.d(),f&&f.d(),t&&t.d()}}}function en(l,e,i){let n,s,f,t,a,{range:u=!1}=e,{min:k=0}=e,{max:p=100}=e,{step:m=1}=e,{values:o=[(p+k)/2]}=e,{vertical:h=!1}=e,{reversed:d=!1}=e,{hoverable:S=!0}=e,{disabled:_=!1}=e,{pipstep:g=void 0}=e,{all:B=!0}=e,{first:A=void 0}=e,{last:D=void 0}=e,{rest:U=void 0}=e,{prefix:H=""}=e,{suffix:J=""}=e,{formatter:x=(b,q)=>b}=e,{focus:le=void 0}=e,{orientationStart:ne=void 0}=e,{percentOf:ie=void 0}=e,{moveHandle:ee=void 0}=e,{fixFloat:W=void 0}=e;function fe(b){_||ee(void 0,b)}return l.$$set=b=>{"range"in b&&i(22,u=b.range),"min"in b&&i(0,k=b.min),"max"in b&&i(1,p=b.max),"step"in b&&i(23,m=b.step),"values"in b&&i(24,o=b.values),"vertical"in b&&i(2,h=b.vertical),"reversed"in b&&i(3,d=b.reversed),"hoverable"in b&&i(4,S=b.hoverable),"disabled"in b&&i(5,_=b.disabled),"pipstep"in b&&i(25,g=b.pipstep),"all"in b&&i(6,B=b.all),"first"in b&&i(7,A=b.first),"last"in b&&i(8,D=b.last),"rest"in b&&i(9,U=b.rest),"prefix"in b&&i(10,H=b.prefix),"suffix"in b&&i(11,J=b.suffix),"formatter"in b&&i(12,x=b.formatter),"focus"in b&&i(13,le=b.focus),"orientationStart"in b&&i(14,ne=b.orientationStart),"percentOf"in b&&i(15,ie=b.percentOf),"moveHandle"in b&&i(26,ee=b.moveHandle),"fixFloat"in b&&i(16,W=b.fixFloat)},l.$$.update=()=>{l.$$.dirty&41943047&&i(27,n=g||((p-k)/m>=(h?50:100)?(p-k)/(h?10:20):1)),l.$$.dirty&142606339&&i(20,s=parseInt((p-k)/(m*n),10)),l.$$.dirty&142671873&&i(19,f=function(b){return W(k+b*m*n)}),l.$$.dirty&16842752&&i(18,t=function(b){return o.some(q=>W(q)===W(b))}),l.$$.dirty&20971520&&i(17,a=function(b){if(u==="min")return o[0]>b;if(u==="max")return o[0]<b;if(u)return o[0]<b&&o[1]>b})},[k,p,h,d,S,_,B,A,D,U,H,J,x,le,ne,ie,W,a,t,f,s,fe,u,m,o,g,ee,n]}class ln extends ye{constructor(e){super(),Ce(this,e,en,xl,Re,{range:22,min:0,max:1,step:23,values:24,vertical:2,reversed:3,hoverable:4,disabled:5,pipstep:25,all:6,first:7,last:8,rest:9,prefix:10,suffix:11,formatter:12,focus:13,orientationStart:14,percentOf:15,moveHandle:26,fixFloat:16})}}function ll(l,e,i){const n=l.slice();return n[64]=e[i],n[66]=i,n}function nl(l){let e,i=l[21](l[64],l[66],l[23](l[64]))+"",n,s=l[18]&&il(l),f=l[19]&&sl(l);return{c(){e=y("span"),s&&s.c(),n=T(i),f&&f.c(),this.h()},l(t){e=C(t,"SPAN",{class:!0});var a=R(e);s&&s.l(a),n=I(a,i),f&&f.l(a),a.forEach(c),this.h()},h(){v(e,"class","rangeFloat")},m(t,a){P(t,e,a),s&&s.m(e,null),O(e,n),f&&f.m(e,null)},p(t,a){t[18]?s?s.p(t,a):(s=il(t),s.c(),s.m(e,n)):s&&(s.d(1),s=null),a[0]&10485761&&i!==(i=t[21](t[64],t[66],t[23](t[64]))+"")&&Z(n,i),t[19]?f?f.p(t,a):(f=sl(t),f.c(),f.m(e,null)):f&&(f.d(1),f=null)},d(t){t&&c(e),s&&s.d(),f&&f.d()}}}function il(l){let e,i;return{c(){e=y("span"),i=T(l[18]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var s=R(e);i=I(s,l[18]),s.forEach(c),this.h()},h(){v(e,"class","rangeFloat-prefix")},m(n,s){P(n,e,s),O(e,i)},p(n,s){s[0]&262144&&Z(i,n[18])},d(n){n&&c(e)}}}function sl(l){let e,i;return{c(){e=y("span"),i=T(l[19]),this.h()},l(n){e=C(n,"SPAN",{class:!0});var s=R(e);i=I(s,l[19]),s.forEach(c),this.h()},h(){v(e,"class","rangeFloat-suffix")},m(n,s){P(n,e,s),O(e,i)},p(n,s){s[0]&524288&&Z(i,n[19])},d(n){n&&c(e)}}}function fl(l){let e,i,n,s,f,t,a,u,k,p,m,o,h=l[7]&&nl(l);return{c(){e=y("span"),i=y("span"),n=X(),h&&h.c(),this.h()},l(d){e=C(d,"SPAN",{role:!0,class:!0,"data-handle":!0,style:!0,"aria-valuemin":!0,"aria-valuemax":!0,"aria-valuenow":!0,"aria-valuetext":!0,"aria-orientation":!0,"aria-disabled":!0,disabled:!0,tabindex:!0});var S=R(e);i=C(S,"SPAN",{class:!0}),R(i).forEach(c),n=Y(S),h&&h.l(S),S.forEach(c),this.h()},h(){v(i,"class","rangeNub"),v(e,"role","slider"),v(e,"class","rangeHandle"),v(e,"data-handle",l[66]),v(e,"style",s=l[28]+": "+l[29][l[66]]+"%; z-index: "+(l[26]===l[66]?3:2)+";"),v(e,"aria-valuemin",f=l[2]===!0&&l[66]===1?l[0][0]:l[3]),v(e,"aria-valuemax",t=l[2]===!0&&l[66]===0?l[0][1]:l[4]),v(e,"aria-valuenow",a=l[64]),v(e,"aria-valuetext",u=""+(l[18]+l[21](l[64],l[66],l[23](l[64]))+l[19])),v(e,"aria-orientation",k=l[6]?"vertical":"horizontal"),v(e,"aria-disabled",l[10]),v(e,"disabled",l[10]),v(e,"tabindex",p=l[10]?-1:0),E(e,"active",l[24]&&l[26]===l[66]),E(e,"press",l[25]&&l[26]===l[66])},m(d,S){P(d,e,S),O(e,i),O(e,n),h&&h.m(e,null),m||(o=[M(e,"blur",l[34]),M(e,"focus",l[35]),M(e,"keydown",l[36])],m=!0)},p(d,S){d[7]?h?h.p(d,S):(h=nl(d),h.c(),h.m(e,null)):h&&(h.d(1),h=null),S[0]&872415232&&s!==(s=d[28]+": "+d[29][d[66]]+"%; z-index: "+(d[26]===d[66]?3:2)+";")&&v(e,"style",s),S[0]&13&&f!==(f=d[2]===!0&&d[66]===1?d[0][0]:d[3])&&v(e,"aria-valuemin",f),S[0]&21&&t!==(t=d[2]===!0&&d[66]===0?d[0][1]:d[4])&&v(e,"aria-valuemax",t),S[0]&1&&a!==(a=d[64])&&v(e,"aria-valuenow",a),S[0]&11272193&&u!==(u=""+(d[18]+d[21](d[64],d[66],d[23](d[64]))+d[19]))&&v(e,"aria-valuetext",u),S[0]&64&&k!==(k=d[6]?"vertical":"horizontal")&&v(e,"aria-orientation",k),S[0]&1024&&v(e,"aria-disabled",d[10]),S[0]&1024&&v(e,"disabled",d[10]),S[0]&1024&&p!==(p=d[10]?-1:0)&&v(e,"tabindex",p),S[0]&83886080&&E(e,"active",d[24]&&d[26]===d[66]),S[0]&100663296&&E(e,"press",d[25]&&d[26]===d[66])},d(d){d&&c(e),h&&h.d(),m=!1,pe(o)}}}function tl(l){let e,i;return{c(){e=y("span"),this.h()},l(n){e=C(n,"SPAN",{class:!0,style:!0}),R(e).forEach(c),this.h()},h(){v(e,"class","rangeBar"),v(e,"style",i=l[28]+": "+l[32](l[29])+"%; "+l[27]+": "+l[33](l[29])+"%;")},m(n,s){P(n,e,s)},p(n,s){s[0]&939524096&&i!==(i=n[28]+": "+n[32](n[29])+"%; "+n[27]+": "+n[33](n[29])+"%;")&&v(e,"style",i)},d(n){n&&c(e)}}}function al(l){let e,i;return e=new ln({props:{values:l[0],min:l[3],max:l[4],step:l[5],range:l[2],vertical:l[6],reversed:l[8],orientationStart:l[28],hoverable:l[9],disabled:l[10],all:l[13],first:l[14],last:l[15],rest:l[16],pipstep:l[12],prefix:l[18],suffix:l[19],formatter:l[20],focus:l[24],percentOf:l[23],moveHandle:l[31],fixFloat:l[30]}}),{c(){L(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,s){G(e,n,s),i=!0},p(n,s){const f={};s[0]&1&&(f.values=n[0]),s[0]&8&&(f.min=n[3]),s[0]&16&&(f.max=n[4]),s[0]&32&&(f.step=n[5]),s[0]&4&&(f.range=n[2]),s[0]&64&&(f.vertical=n[6]),s[0]&256&&(f.reversed=n[8]),s[0]&268435456&&(f.orientationStart=n[28]),s[0]&512&&(f.hoverable=n[9]),s[0]&1024&&(f.disabled=n[10]),s[0]&8192&&(f.all=n[13]),s[0]&16384&&(f.first=n[14]),s[0]&32768&&(f.last=n[15]),s[0]&65536&&(f.rest=n[16]),s[0]&4096&&(f.pipstep=n[12]),s[0]&262144&&(f.prefix=n[18]),s[0]&524288&&(f.suffix=n[19]),s[0]&1048576&&(f.formatter=n[20]),s[0]&16777216&&(f.focus=n[24]),s[0]&8388608&&(f.percentOf=n[23]),e.$set(f)},i(n){i||(F(e.$$.fragment,n),i=!0)},o(n){z(e.$$.fragment,n),i=!1},d(n){K(e,n)}}}function nn(l){let e,i,n,s,f,t,a=l[0],u=[];for(let m=0;m<a.length;m+=1)u[m]=fl(ll(l,a,m));let k=l[2]&&tl(l),p=l[11]&&al(l);return{c(){e=y("div");for(let m=0;m<u.length;m+=1)u[m].c();i=X(),k&&k.c(),n=X(),p&&p.c(),this.h()},l(m){e=C(m,"DIV",{id:!0,class:!0});var o=R(e);for(let h=0;h<u.length;h+=1)u[h].l(o);i=Y(o),k&&k.l(o),n=Y(o),p&&p.l(o),o.forEach(c),this.h()},h(){v(e,"id",l[17]),v(e,"class","rangeSlider"),E(e,"range",l[2]),E(e,"disabled",l[10]),E(e,"hoverable",l[9]),E(e,"vertical",l[6]),E(e,"reversed",l[8]),E(e,"focus",l[24]),E(e,"min",l[2]==="min"),E(e,"max",l[2]==="max"),E(e,"pips",l[11]),E(e,"pip-labels",l[13]==="label"||l[14]==="label"||l[15]==="label"||l[16]==="label")},m(m,o){P(m,e,o);for(let h=0;h<u.length;h+=1)u[h]&&u[h].m(e,null);O(e,i),k&&k.m(e,null),O(e,n),p&&p.m(e,null),l[50](e),s=!0,f||(t=[M(window,"mousedown",l[39]),M(window,"touchstart",l[39]),M(window,"mousemove",l[40]),M(window,"touchmove",l[40]),M(window,"mouseup",l[41]),M(window,"touchend",l[42]),M(window,"keydown",l[43]),M(e,"mousedown",l[37]),M(e,"mouseup",l[38]),M(e,"touchstart",ge(l[37])),M(e,"touchend",ge(l[38]))],f=!0)},p(m,o){if(o[0]&934020317|o[1]&56){a=m[0];let h;for(h=0;h<a.length;h+=1){const d=ll(m,a,h);u[h]?u[h].p(d,o):(u[h]=fl(d),u[h].c(),u[h].m(e,i))}for(;h<u.length;h+=1)u[h].d(1);u.length=a.length}m[2]?k?k.p(m,o):(k=tl(m),k.c(),k.m(e,n)):k&&(k.d(1),k=null),m[11]?p?(p.p(m,o),o[0]&2048&&F(p,1)):(p=al(m),p.c(),F(p,1),p.m(e,null)):p&&(ol(),z(p,1,1,()=>{p=null}),ml()),(!s||o[0]&131072)&&v(e,"id",m[17]),(!s||o[0]&4)&&E(e,"range",m[2]),(!s||o[0]&1024)&&E(e,"disabled",m[10]),(!s||o[0]&512)&&E(e,"hoverable",m[9]),(!s||o[0]&64)&&E(e,"vertical",m[6]),(!s||o[0]&256)&&E(e,"reversed",m[8]),(!s||o[0]&16777216)&&E(e,"focus",m[24]),(!s||o[0]&4)&&E(e,"min",m[2]==="min"),(!s||o[0]&4)&&E(e,"max",m[2]==="max"),(!s||o[0]&2048)&&E(e,"pips",m[11]),(!s||o[0]&122880)&&E(e,"pip-labels",m[13]==="label"||m[14]==="label"||m[15]==="label"||m[16]==="label")},i(m){s||(F(p),s=!0)},o(m){z(p),s=!1},d(m){m&&c(e),ul(u,m),k&&k.d(),p&&p.d(),l[50](null),f=!1,pe(t)}}}function rl(l){if(!l)return-1;for(var e=0;l=l.previousElementSibling;)e++;return e}function Ne(l){return l.type.includes("touch")?l.touches[0]:l}function sn(l,e,i){let n,s,f,t,a,u,k=ke,p=()=>(k(),k=Hl(he,r=>i(29,u=r)),he);l.$$.on_destroy.push(()=>k());let{slider:m=void 0}=e,{range:o=!1}=e,{pushy:h=!1}=e,{min:d=0}=e,{max:S=100}=e,{step:_=1}=e,{values:g=[(S+d)/2]}=e,{vertical:B=!1}=e,{float:A=!1}=e,{reversed:D=!1}=e,{hoverable:U=!0}=e,{disabled:H=!1}=e,{pips:J=!1}=e,{pipstep:x=void 0}=e,{all:le=void 0}=e,{first:ne=void 0}=e,{last:ie=void 0}=e,{rest:ee=void 0}=e,{id:W=void 0}=e,{prefix:fe=""}=e,{suffix:b=""}=e,{formatter:q=(r,w,N)=>r}=e,{handleFormatter:be=q}=e,{precision:we=2}=e,{springValues:ve={stiffness:.15,damping:.4}}=e;const Se=zl();let Ee=0,se=!1,te=!1,ae=!1,Pe=!1,Q=g.length-1,me,_e,he;const de=r=>parseFloat(r.toFixed(we));function _l(r){const w=m.querySelectorAll(".handle"),N=Array.prototype.includes.call(w,r),V=Array.prototype.some.call(w,$=>$.contains(r));return N||V}function hl(r){return o==="min"||o==="max"?r.slice(0,1):o?r.slice(0,2):r}function ze(){return m.getBoundingClientRect()}function dl(r){const w=ze();let N=0,V=0,$=0;B?(N=r.clientY-w.top,V=N/w.height*100,V=D?V:100-V):(N=r.clientX-w.left,V=N/w.width*100,V=D?100-V:V),$=(S-d)/100*V+d;let Oe;return o===!0&&g[0]===g[1]?$>g[1]?1:0:(Oe=g.indexOf([...g].sort((yl,Cl)=>Math.abs($-yl)-Math.abs($-Cl))[0]),Oe)}function Ae(r){const w=ze();let N=0,V=0,$=0;B?(N=r.clientY-w.top,V=N/w.height*100,V=D?V:100-V):(N=r.clientX-w.left,V=N/w.width*100,V=D?100-V:V),$=(S-d)/100*V+d,re(Q,$)}function re(r,w){return w=f(w),typeof r>"u"&&(r=Q),o&&(r===0&&w>g[1]?h?i(0,g[1]=w,g):w=g[1]:r===1&&w<g[0]&&(h?i(0,g[0]=w,g):w=g[0])),g[r]!==w&&i(0,g[r]=w,g),_e!==w&&(Dl(),_e=w),w}function gl(r){return o==="min"?0:r[0]}function pl(r){return o==="max"?0:o==="min"?100-r[0]:100-r[1]}function bl(r){Pe&&(i(24,se=!1),te=!1,i(25,ae=!1))}function cl(r){H||(i(26,Q=rl(r.target)),i(24,se=!0))}function kl(r){if(!H){const w=rl(r.target);let N=r.ctrlKey||r.metaKey||r.shiftKey?_*10:_,V=!1;switch(r.key){case"PageDown":N*=10;case"ArrowRight":case"ArrowUp":re(w,g[w]+N),V=!0;break;case"PageUp":N*=10;case"ArrowLeft":case"ArrowDown":re(w,g[w]-N),V=!0;break;case"Home":re(w,d),V=!0;break;case"End":re(w,S),V=!0;break}V&&(r.preventDefault(),r.stopPropagation())}}function wl(r){if(!H){const w=r.target,N=Ne(r);i(24,se=!0),te=!0,i(25,ae=!0),i(26,Q=dl(N)),me=_e=f(g[Q]),Nl(),r.type==="touchstart"&&!w.matches(".pipVal")&&Ae(N)}}function vl(r){r.type==="touchend"&&He(),i(25,ae=!1)}function Sl(r){Pe=!1,se&&r.target!==m&&!m.contains(r.target)&&i(24,se=!1)}function El(r){H||te&&Ae(Ne(r))}function Pl(r){if(!H){const w=r.target;te&&((w===m||m.contains(w))&&(i(24,se=!0),!_l(w)&&!w.matches(".pipVal")&&Ae(Ne(r))),He())}te=!1,i(25,ae=!1)}function Al(r){te=!1,i(25,ae=!1)}function Vl(r){H||(r.target===m||m.contains(r.target))&&(Pe=!0)}function Nl(){!H&&Se("start",{activeHandle:Q,value:me,values:g.map(r=>f(r))})}function He(){!H&&Se("stop",{activeHandle:Q,startValue:me,value:g[Q],values:g.map(r=>f(r))})}function Dl(){!H&&Se("change",{activeHandle:Q,startValue:me,previousValue:typeof _e>"u"?me:_e,value:g[Q],values:g.map(r=>f(r))})}function Fl(r){Me[r?"unshift":"push"](()=>{m=r,i(1,m)})}return l.$$set=r=>{"slider"in r&&i(1,m=r.slider),"range"in r&&i(2,o=r.range),"pushy"in r&&i(44,h=r.pushy),"min"in r&&i(3,d=r.min),"max"in r&&i(4,S=r.max),"step"in r&&i(5,_=r.step),"values"in r&&i(0,g=r.values),"vertical"in r&&i(6,B=r.vertical),"float"in r&&i(7,A=r.float),"reversed"in r&&i(8,D=r.reversed),"hoverable"in r&&i(9,U=r.hoverable),"disabled"in r&&i(10,H=r.disabled),"pips"in r&&i(11,J=r.pips),"pipstep"in r&&i(12,x=r.pipstep),"all"in r&&i(13,le=r.all),"first"in r&&i(14,ne=r.first),"last"in r&&i(15,ie=r.last),"rest"in r&&i(16,ee=r.rest),"id"in r&&i(17,W=r.id),"prefix"in r&&i(18,fe=r.prefix),"suffix"in r&&i(19,b=r.suffix),"formatter"in r&&i(20,q=r.formatter),"handleFormatter"in r&&i(21,be=r.handleFormatter),"precision"in r&&i(45,we=r.precision),"springValues"in r&&i(46,ve=r.springValues)},l.$$.update=()=>{l.$$.dirty[0]&24&&i(49,s=function(r){return r<=d?d:r>=S?S:r}),l.$$.dirty[0]&56|l.$$.dirty[1]&262144&&i(48,f=function(r){if(r<=d)return de(d);if(r>=S)return de(S);let w=(r-d)%_,N=r-w;return Math.abs(w)*2>=_&&(N+=w>0?_:-_),N=s(N),de(N)}),l.$$.dirty[0]&24&&i(23,n=function(r){let w=(r-d)/(S-d)*100;return isNaN(w)||w<=0?0:w>=100?100:de(w)}),l.$$.dirty[0]&12582937|l.$$.dirty[1]&229376&&(Array.isArray(g)||(i(0,g=[(S+d)/2]),console.error("'values' prop should be an Array (https://github.com/simeydotme/svelte-range-slider-pips#slider-props)")),i(0,g=hl(g.map(r=>f(r)))),Ee!==g.length?p(i(22,he=Wl(g.map(r=>n(r)),ve))):he.set(g.map(r=>n(r))),i(47,Ee=g.length)),l.$$.dirty[0]&320&&i(28,t=B?D?"top":"bottom":D?"right":"left"),l.$$.dirty[0]&320&&i(27,a=B?D?"bottom":"top":D?"left":"right")},[g,m,o,d,S,_,B,A,D,U,H,J,x,le,ne,ie,ee,W,fe,b,q,be,he,n,se,ae,Q,a,t,u,de,re,gl,pl,bl,cl,kl,wl,vl,Sl,El,Pl,Al,Vl,h,we,ve,Ee,f,s,Fl]}class fn extends ye{constructor(e){super(),Ce(this,e,sn,nn,Re,{slider:1,range:2,pushy:44,min:3,max:4,step:5,values:0,vertical:6,float:7,reversed:8,hoverable:9,disabled:10,pips:11,pipstep:12,all:13,first:14,last:15,rest:16,id:17,prefix:18,suffix:19,formatter:20,handleFormatter:21,precision:45,springValues:46},null,[-1,-1,-1])}}function tn(l){let e;return{c(){e=T("Entraîner le réseau avec des images")},l(i){e=I(i,"Entraîner le réseau avec des images")},m(i,n){P(i,e,n)},d(i){i&&c(e)}}}function an(l){let e,i;return e=new De({props:{cols:4,$$slots:{default:[bn]},$$scope:{ctx:l}}}),{c(){L(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,s){G(e,n,s),i=!0},p(n,s){const f={};s&65549&&(f.$$scope={dirty:s,ctx:n}),e.$set(f)},i(n){i||(F(e.$$.fragment,n),i=!0)},o(n){z(e.$$.fragment,n),i=!1},d(n){K(e,n)}}}function rn(l){let e,i;return e=new Zl({props:{size:"xl"}}),{c(){L(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,s){G(e,n,s),i=!0},p:ke,i(n){i||(F(e.$$.fragment,n),i=!0)},o(n){z(e.$$.fragment,n),i=!1},d(n){K(e,n)}}}function un(l){let e;return{c(){e=T("Taux d'apprentissage")},l(i){e=I(i,"Taux d'apprentissage")},m(i,n){P(i,e,n)},d(i){i&&c(e)}}}function on(l){let e;return{c(){e=T("Entraîner avec 100 images")},l(i){e=I(i,"Entraîner avec 100 images")},m(i,n){P(i,e,n)},d(i){i&&c(e)}}}function mn(l){let e;return{c(){e=T("Entraîner avec 1000 images")},l(i){e=I(i,"Entraîner avec 1000 images")},m(i,n){P(i,e,n)},d(i){i&&c(e)}}}function _n(l){let e;return{c(){e=T("Entraîner avec 5000 images, 8 fois")},l(i){e=I(i,"Entraîner avec 5000 images, 8 fois")},m(i,n){P(i,e,n)},d(i){i&&c(e)}}}function hn(l){let e;return{c(){e=T("Réinitialiser le réseau")},l(i){e=I(i,"Réinitialiser le réseau")},m(i,n){P(i,e,n)},d(i){i&&c(e)}}}function dn(l){let e,i,n,s,f,t,a,u,k,p,m,o,h;e=new Ql({props:{$$slots:{default:[un]},$$scope:{ctx:l}}});function d(_){l[9](_)}let S={min:0,max:1,step:.2,pips:!0,all:"label",float:!0};return l[0]!==void 0&&(S.values=l[0]),n=new fn({props:S}),Me.push(()=>Il(n,"values",d)),t=new ce({props:{$$slots:{default:[on]},$$scope:{ctx:l}}}),t.$on("click",l[4]),u=new ce({props:{$$slots:{default:[mn]},$$scope:{ctx:l}}}),u.$on("click",l[5]),p=new ce({props:{$$slots:{default:[_n]},$$scope:{ctx:l}}}),p.$on("click",l[6]),o=new ce({props:{color:"Red",$$slots:{default:[hn]},$$scope:{ctx:l}}}),o.$on("click",l[7]),{c(){L(e.$$.fragment),i=X(),L(n.$$.fragment),f=X(),L(t.$$.fragment),a=X(),L(u.$$.fragment),k=X(),L(p.$$.fragment),m=X(),L(o.$$.fragment)},l(_){j(e.$$.fragment,_),i=Y(_),j(n.$$.fragment,_),f=Y(_),j(t.$$.fragment,_),a=Y(_),j(u.$$.fragment,_),k=Y(_),j(p.$$.fragment,_),m=Y(_),j(o.$$.fragment,_)},m(_,g){G(e,_,g),P(_,i,g),G(n,_,g),P(_,f,g),G(t,_,g),P(_,a,g),G(u,_,g),P(_,k,g),G(p,_,g),P(_,m,g),G(o,_,g),h=!0},p(_,g){const B={};g&65536&&(B.$$scope={dirty:g,ctx:_}),e.$set(B);const A={};!s&&g&1&&(s=!0,A.values=_[0],Bl(()=>s=!1)),n.$set(A);const D={};g&65536&&(D.$$scope={dirty:g,ctx:_}),t.$set(D);const U={};g&65536&&(U.$$scope={dirty:g,ctx:_}),u.$set(U);const H={};g&65536&&(H.$$scope={dirty:g,ctx:_}),p.$set(H);const J={};g&65536&&(J.$$scope={dirty:g,ctx:_}),o.$set(J)},i(_){h||(F(e.$$.fragment,_),F(n.$$.fragment,_),F(t.$$.fragment,_),F(u.$$.fragment,_),F(p.$$.fragment,_),F(o.$$.fragment,_),h=!0)},o(_){z(e.$$.fragment,_),z(n.$$.fragment,_),z(t.$$.fragment,_),z(u.$$.fragment,_),z(p.$$.fragment,_),z(o.$$.fragment,_),h=!1},d(_){K(e,_),_&&c(i),K(n,_),_&&c(f),K(t,_),_&&c(a),K(u,_),_&&c(k),K(p,_),_&&c(m),K(o,_)}}}function gn(l){let e,i,n,s,f,t;return e=new Kl({props:{h:"xl"}}),n=new Jl({props:{$$slots:{default:[dn]},$$scope:{ctx:l}}}),{c(){L(e.$$.fragment),i=X(),L(n.$$.fragment),s=X(),f=y("div")},l(a){j(e.$$.fragment,a),i=Y(a),j(n.$$.fragment,a),s=Y(a),f=C(a,"DIV",{}),R(f).forEach(c)},m(a,u){G(e,a,u),P(a,i,u),G(n,a,u),P(a,s,u),P(a,f,u),l[10](f),t=!0},p(a,u){const k={};u&65537&&(k.$$scope={dirty:u,ctx:a}),n.$set(k)},i(a){t||(F(e.$$.fragment,a),F(n.$$.fragment,a),t=!0)},o(a){z(e.$$.fragment,a),z(n.$$.fragment,a),t=!1},d(a){K(e,a),a&&c(i),K(n,a),a&&c(s),a&&c(f),l[10](null)}}}function pn(l){let e,i;return e=new Xl({props:{weights:l[3],linkFilter:kn}}),{c(){L(e.$$.fragment)},l(n){j(e.$$.fragment,n)},m(n,s){G(e,n,s),i=!0},p(n,s){const f={};s&8&&(f.weights=n[3]),e.$set(f)},i(n){i||(F(e.$$.fragment,n),i=!0)},o(n){z(e.$$.fragment,n),i=!1},d(n){K(e,n)}}}function bn(l){let e,i,n,s;return e=new De.Col({props:{span:1,$$slots:{default:[gn]},$$scope:{ctx:l}}}),n=new De.Col({props:{span:3,$$slots:{default:[pn]},$$scope:{ctx:l}}}),{c(){L(e.$$.fragment),i=X(),L(n.$$.fragment)},l(f){j(e.$$.fragment,f),i=Y(f),j(n.$$.fragment,f)},m(f,t){G(e,f,t),P(f,i,t),G(n,f,t),s=!0},p(f,t){const a={};t&65541&&(a.$$scope={dirty:t,ctx:f}),e.$set(a);const u={};t&65544&&(u.$$scope={dirty:t,ctx:f}),n.$set(u)},i(f){s||(F(e.$$.fragment,f),F(n.$$.fragment,f),s=!0)},o(f){z(e.$$.fragment,f),z(n.$$.fragment,f),s=!1},d(f){K(e,f),f&&c(i),K(n,f)}}}function cn(l){let e,i,n,s,f,t,a,u;e=new ql({props:{order:1,$$slots:{default:[tn]},$$scope:{ctx:l}}}),n=new Ul({});const k=[rn,an],p=[];function m(o,h){return o[1]?0:1}return f=m(l),t=p[f]=k[f](l),{c(){L(e.$$.fragment),i=X(),L(n.$$.fragment),s=X(),t.c(),a=oe()},l(o){j(e.$$.fragment,o),i=Y(o),j(n.$$.fragment,o),s=Y(o),t.l(o),a=oe()},m(o,h){G(e,o,h),P(o,i,h),G(n,o,h),P(o,s,h),p[f].m(o,h),P(o,a,h),u=!0},p(o,[h]){const d={};h&65536&&(d.$$scope={dirty:h,ctx:o}),e.$set(d);let S=f;f=m(o),f===S?p[f].p(o,h):(ol(),z(p[S],1,1,()=>{p[S]=null}),ml(),t=p[f],t?t.p(o,h):(t=p[f]=k[f](o),t.c()),F(t,1),t.m(a.parentNode,a))},i(o){u||(F(e.$$.fragment,o),F(n.$$.fragment,o),F(t),u=!0)},o(o){z(e.$$.fragment,o),z(n.$$.fragment,o),z(t),u=!1},d(o){K(e,o),o&&c(i),K(n,o),o&&c(s),p[f].d(o),o&&c(a)}}}function kn(l){const e=l.length;return e<=500?l:[...l].sort((n,s)=>Math.abs(s.weight)-Math.abs(n.weight)).slice(0,Math.min(500,.1*e))}function wn(l,e,i){let n,s,f;Ol(l,Ve,A=>i(8,f=A));let t,a=!0,u=[0],k,p;Tl(async()=>{k=await Rl(()=>import("../chunks/index.6cf9b212.js").then(A=>A.i),["../chunks/index.6cf9b212.js","../chunks/stores.492409ec.js","../chunks/index.cf65f726.js","../chunks/index.bfa0a56d.js","../chunks/paths.d14de161.js","../chunks/vega-themes.module.9b55819e.js"],import.meta.url),Ll.load().then(A=>{i(1,a=!1),t=A})});async function m({trainDataSize:A=5e3,batchSize:D=100,epochs:U=1,learningRate:H=.01}={}){const J=f;J.optimizer=new Gl(H);const x=A/5,[le,ne]=Ie(()=>{const q=t.nextTrainBatch(A);return[q.xs.reshape([A,28*28]),q.labels]}),[ie,ee]=Ie(()=>{const q=t.nextTestBatch(x);return[q.xs.reshape([x,28*28]),q.labels]}),W=["acc","val_acc"],fe=k.show.fitCallbacks(p,W);function b(q,be){return S(),fe.onBatchEnd(q,be)}return J.fit(le,ne,{validationData:[ie,ee],epochs:U,batchSize:D,shuffle:!0,callbacks:{onBatchEnd:b}})}async function o(){m({trainDataSize:100,batchSize:25,epochs:1,learningRate:n})}async function h(){m({trainDataSize:1e3,batchSize:50,epochs:1,learningRate:n})}async function d(){m({trainDataSize:5e3,batchSize:100,epochs:8,learningRate:n})}function S(){Ve.update(A=>A)}function _(){Ve.update(()=>jl())}function g(A){u=A,i(0,u)}function B(A){Me[A?"unshift":"push"](()=>{p=A,i(2,p)})}return l.$$.update=()=>{l.$$.dirty&1&&(n=u[0]),l.$$.dirty&256&&i(3,s=f==null?void 0:f.weights)},[u,a,p,s,o,h,d,_,f,g,B]}class Cn extends ye{constructor(e){super(),Ce(this,e,wn,cn,Re,{})}}export{Cn as component,yn as universal};
