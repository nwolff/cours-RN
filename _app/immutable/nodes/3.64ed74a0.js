import{_ as O}from"../chunks/preload-helper.41c905a7.js";import{S as y,i as N,s as z,y as d,a as E,e as C,z as g,c as T,A as b,b as c,d as p,f as G,g as m,B as v,h as f,T as I,o as R,q as x,r as S,v as V,w as H,R as B,k as q,l as D,m as P,n as Q,O as U}from"../chunks/index.70d9aeb1.js";import{T as Z,D as F,m as J,a as K,G as A,L as W,B as X}from"../chunks/stores.05de0ad0.js";import{T as Y}from"../chunks/Text.cfb29bed.js";import{S as ee}from"../chunks/Stack.0d74dd6b.js";const te=!1,be=Object.freeze(Object.defineProperty({__proto__:null,ssr:te},Symbol.toStringTag,{value:"Module"}));function se(l){let s;return{c(){s=x("Evaluer la précision du réseau")},l(n){s=S(n,"Evaluer la précision du réseau")},m(n,e){c(n,s,e)},d(n){n&&f(s)}}}function ne(l){let s,n;return s=new A({props:{cols:4,$$slots:{default:[fe]},$$scope:{ctx:l}}}),{c(){d(s.$$.fragment)},l(e){g(s.$$.fragment,e)},m(e,r){b(s,e,r),n=!0},p(e,r){const t={};r&514&&(t.$$scope={dirty:r,ctx:e}),s.$set(t)},i(e){n||(m(s.$$.fragment,e),n=!0)},o(e){p(s.$$.fragment,e),n=!1},d(e){v(s,e)}}}function re(l){let s,n;return s=new W({props:{size:"xl"}}),{c(){d(s.$$.fragment)},l(e){g(s.$$.fragment,e)},m(e,r){b(s,e,r),n=!0},p:B,i(e){n||(m(s.$$.fragment,e),n=!0)},o(e){p(s.$$.fragment,e),n=!1},d(e){v(s,e)}}}function oe(l){let s,n,e,r;return{c(){s=x("A chaque appui sur le bouton, on donne au réseau 1000 nouvelles images de "),n=q("b"),e=x("test"),r=x(` qu'il
					n'a jamais vues.`)},l(t){s=S(t,"A chaque appui sur le bouton, on donne au réseau 1000 nouvelles images de "),n=D(t,"B",{});var a=P(n);e=S(a,"test"),a.forEach(f),r=S(t,` qu'il
					n'a jamais vues.`)},m(t,a){c(t,s,a),c(t,n,a),U(n,e),c(t,r,a)},p:B,d(t){t&&f(s),t&&f(n),t&&f(r)}}}function ae(l){let s;return{c(){s=x("Evaluer la précision")},l(n){s=S(n,"Evaluer la précision")},m(n,e){c(n,s,e)},d(n){n&&f(s)}}}function le(l){let s,n,e,r;return s=new Y({props:{$$slots:{default:[oe]},$$scope:{ctx:l}}}),e=new X({props:{id:"show-accuracy",$$slots:{default:[ae]},$$scope:{ctx:l}}}),e.$on("click",l[2]),{c(){d(s.$$.fragment),n=E(),d(e.$$.fragment)},l(t){g(s.$$.fragment,t),n=T(t),g(e.$$.fragment,t)},m(t,a){b(s,t,a),c(t,n,a),b(e,t,a),r=!0},p(t,a){const u={};a&512&&(u.$$scope={dirty:a,ctx:t}),s.$set(u);const $={};a&512&&($.$$scope={dirty:a,ctx:t}),e.$set($)},i(t){r||(m(s.$$.fragment,t),m(e.$$.fragment,t),r=!0)},o(t){p(s.$$.fragment,t),p(e.$$.fragment,t),r=!1},d(t){v(s,t),t&&f(n),v(e,t)}}}function ie(l){let s,n;return s=new ee({props:{$$slots:{default:[le]},$$scope:{ctx:l}}}),{c(){d(s.$$.fragment)},l(e){g(s.$$.fragment,e)},m(e,r){b(s,e,r),n=!0},p(e,r){const t={};r&512&&(t.$$scope={dirty:r,ctx:e}),s.$set(t)},i(e){n||(m(s.$$.fragment,e),n=!0)},o(e){p(s.$$.fragment,e),n=!1},d(e){v(s,e)}}}function ue(l){let s,n,e;return{c(){s=q("p"),n=E(),e=q("div"),this.h()},l(r){s=D(r,"P",{}),P(s).forEach(f),n=T(r),e=D(r,"DIV",{id:!0}),P(e).forEach(f),this.h()},h(){Q(e,"id","confusion-matrix-container")},m(r,t){c(r,s,t),c(r,n,t),c(r,e,t),l[3](e)},p:B,d(r){r&&f(s),r&&f(n),r&&f(e),l[3](null)}}}function fe(l){let s,n,e,r;return s=new A.Col({props:{span:1,$$slots:{default:[ie]},$$scope:{ctx:l}}}),e=new A.Col({props:{span:3,$$slots:{default:[ue]},$$scope:{ctx:l}}}),{c(){d(s.$$.fragment),n=E(),d(e.$$.fragment)},l(t){g(s.$$.fragment,t),n=T(t),g(e.$$.fragment,t)},m(t,a){b(s,t,a),c(t,n,a),b(e,t,a),r=!0},p(t,a){const u={};a&512&&(u.$$scope={dirty:a,ctx:t}),s.$set(u);const $={};a&514&&($.$$scope={dirty:a,ctx:t}),e.$set($)},i(t){r||(m(s.$$.fragment,t),m(e.$$.fragment,t),r=!0)},o(t){p(s.$$.fragment,t),p(e.$$.fragment,t),r=!1},d(t){v(s,t),t&&f(n),v(e,t)}}}function ce(l){let s,n,e,r,t,a,u,$;s=new Z({props:{order:1,$$slots:{default:[se]},$$scope:{ctx:l}}}),e=new F({});const M=[re,ne],_=[];function h(o,i){return o[0]?0:1}return t=h(l),a=_[t]=M[t](l),{c(){d(s.$$.fragment),n=E(),d(e.$$.fragment),r=E(),a.c(),u=C()},l(o){g(s.$$.fragment,o),n=T(o),g(e.$$.fragment,o),r=T(o),a.l(o),u=C()},m(o,i){b(s,o,i),c(o,n,i),b(e,o,i),c(o,r,i),_[t].m(o,i),c(o,u,i),$=!0},p(o,[i]){const k={};i&512&&(k.$$scope={dirty:i,ctx:o}),s.$set(k);let w=t;t=h(o),t===w?_[t].p(o,i):(V(),p(_[w],1,1,()=>{_[w]=null}),G(),a=_[t],a?a.p(o,i):(a=_[t]=M[t](o),a.c()),m(a,1),a.m(u.parentNode,u))},i(o){$||(m(s.$$.fragment,o),m(e.$$.fragment,o),m(a),$=!0)},o(o){p(s.$$.fragment,o),p(e.$$.fragment,o),p(a),$=!1},d(o){v(s,o),o&&f(n),v(e,o),o&&f(r),_[t].d(o),o&&f(u)}}}function $e(l,s,n){let e;I(l,K,o=>n(6,e=o));let r,t=!0,a,u;R(async()=>{a=await O(()=>import("../chunks/index.ab6f17fd.js").then(o=>o.i),["../chunks/index.ab6f17fd.js","../chunks/stores.05de0ad0.js","../chunks/index.70d9aeb1.js","../chunks/Text.cfb29bed.js","../chunks/index.e26498a0.js","../chunks/paths.2582cda9.js","../assets/stores.bd53f61f.css","../chunks/vega-themes.module.e07c4d7c.js"],import.meta.url),J.load().then(o=>{n(0,t=!1),r=o})});const $=["Zero","Un","Deux","Trois","Quatre","Cinq","Six","Sept","Huit","Neuf"];function M(o,i=1e3){const k=r.nextTestBatch(i),w=k.xs.reshape([i,28*28]),L=k.labels.argMax([-1]),j=o.predict(w).argMax([-1]);return w.dispose(),[j,L]}async function _(){const[o,i]=M(e),k=await a.metrics.confusionMatrix(i,o);a.render.confusionMatrix(u,{values:k,tickLabels:$}),i.dispose()}function h(o){H[o?"unshift":"push"](()=>{u=o,n(1,u)})}return[t,u,_,h]}class ve extends y{constructor(s){super(),N(this,s,$e,ce,z,{})}}export{ve as component,be as universal};