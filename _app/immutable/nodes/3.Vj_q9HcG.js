import{_ as b}from"../chunks/preload-helper.0HuHagjb.js";import{s as y,a as w,c as h,i as v,F as x,d as S,G as D,o as C}from"../chunks/scheduler.2MOiW16C.js";import{S as E,i as I,b as i,d as l,m as c,a as u,t as p,e as f}from"../chunks/index.uDgcqgGv.js";import{m as P}from"../chunks/stores.Aefb-7Ni.js";import{D as M,a as O}from"../chunks/DrawBox.Vn969ssn.js";const j=!1,L=Object.freeze(Object.defineProperty({__proto__:null,ssr:j},Symbol.toStringTag,{value:"Module"}));function z(n){let t,r,a,o;return t=new M({}),t.$on("imageData",F),a=new O({props:{labels:n[0],values:n[1],color:"orange"}}),{c(){i(t.$$.fragment),r=w(),i(a.$$.fragment)},l(e){l(t.$$.fragment,e),r=h(e),l(a.$$.fragment,e)},m(e,s){c(t,e,s),v(e,r,s),c(a,e,s),o=!0},p:x,i(e){o||(u(t.$$.fragment,e),u(a.$$.fragment,e),o=!0)},o(e){p(t.$$.fragment,e),p(a.$$.fragment,e),o=!1},d(e){e&&S(r),f(t,e),f(a,e)}}}function F(n){console.log("handleDrawnImage",n.detail.image)}function R(n,t,r){let a;D(n,P,m=>r(3,a=m));let o;const e=["z","1","t","F","5","six"],s=[0,.1,.2,.3,.5,.6];C(async()=>{o=await b(()=>import("../chunks/index.9yn0OLfu.js").then(m=>m.i),__vite__mapDeps([0,1,2,3,4,5,6,7,8]),import.meta.url),_()});async function _(){const m={name:"Résumé du modèle",tab:"Inspection"};o.show.modelSummary(m,a);for(const[$,d]of a.layers.entries()){const g={name:"Couche "+$,tab:"Inspection"};o.show.layer(g,d)}}return[e,s]}class V extends E{constructor(t){super(),I(this,t,R,z,y,{})}}export{V as component,L as universal};
function __vite__mapDeps(indexes) {
  if (!__vite__mapDeps.viteFileDeps) {
    __vite__mapDeps.viteFileDeps = ["../chunks/index.9yn0OLfu.js","../chunks/stores.Aefb-7Ni.js","../chunks/scheduler.2MOiW16C.js","../chunks/index.uDgcqgGv.js","../chunks/Box.m53wu71N.js","../chunks/index.kcPVqbvy.js","../chunks/paths.8HzEkBRI.js","../assets/stores.GbjrmX59.css","../chunks/vega-themes.module.1yMuycnE.js"]
  }
  return indexes.map((i) => __vite__mapDeps.viteFileDeps[i])
}