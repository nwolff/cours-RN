import{S as ze,i as ve,s as Re,e as V,b as he,W as ae,h as xe,a3 as Ie,a4 as We,a5 as se,a6 as Ce,a7 as Ee,a8 as Te,a9 as je}from"./index.ebc08152.js";import{w as Me}from"./paths.c42eb611.js";function le(e){let t,n=de(e[1],e[2])+"",r;return{c(){t=new Ie(!1),r=V(),this.h()},l(i){t=We(i,!1),r=V(),this.h()},h(){t.a=r},m(i,o){t.m(n,i,o),he(i,r,o)},p(i,o){o&6&&n!==(n=de(i[1],i[2])+"")&&t.p(n)},d(i){i&&xe(r),i&&t.d()}}}function Ae(e){let t,n=e[0]&&le(e);return{c(){n&&n.c(),t=V()},l(r){n&&n.l(r),t=V()},m(r,i){n&&n.m(r,i),he(r,t,i)},p(r,[i]){r[0]?n?n.p(r,i):(n=le(r),n.c(),n.m(t.parentNode,t)):n&&(n.d(1),n=null)},i:ae,o:ae,d(r){n&&n.d(r),r&&xe(t)}}}function Oe(e,t,n){let{observable:r=!1}=t,{component:i}=t,{code:o}=t;return e.$$set=a=>{"observable"in a&&n(0,r=a.observable),"component"in a&&n(1,i=a.component),"code"in a&&n(2,o=a.code)},[r,i,o]}let Pe=class extends ze{constructor(t){super(),ve(this,t,Oe,Ae,Re,{observable:0,component:1,code:2})}};const At=Pe,Le=()=>typeof window<"u",ne=Le(),He=".modal-header{padding: 2px 16px;background-color: #339af0;color: white;}.modal-body{padding: 2px 16px;}.modal-footer{padding: 2px 16px;background-color: #339af0;color: white;}.modal-content{position: relative;background-color: #fefefe;margin: auto;padding: 0;border: 1px solid #888;width: 80%;box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2),0 6px 20px 0 rgba(0,0,0,0.19);animation-name: animateTop;animation-duration: 0.4s;}@keyframes animateTop {from {top: -300px; opacity: 0}to {top: 0; opacity: 1}}",ye=ne?document.createElement("style"):void 0;if(ne){const e=ye;e.textContent=He,e.id="svelteui-inject"}function ce(e,t,n){return ne&&document.head.appendChild(ye),`
    <div class="modal-content">
        <div class="modal-header">
            <h2>[${e} Component Error]:</h2>
            <h3>${t}</h3>
        </div>
        <div class="modal-body">
            <pre>
                ${n||""}
            </pre>
        </div>
        <div class="modal-footer">
            <h3>Fix the code to dismiss this error.</h3>
        </div>
    </div>        
    `}function de(e,t){const{message:n,solution:r}=t;return r?ce(e,n,r):ce(e,n)}function Ot(e,t){const n=[];if(t)for(let r=0;r<t.length;r++){const i=t[r],o=Array.isArray(i)?i[0]:i;Array.isArray(i)&&i.length>1?n.push(o(e,i[1])):n.push(o(e))}return{update(r){if((r&&r.length||0)!=n.length)throw new Error("You must not change the length of an actions array.");if(r)for(let i=0;i<r.length;i++){const o=n[i];if(o&&o.update){const a=r[i];Array.isArray(a)&&a.length>1?o.update(a[1]):o.update()}}},destroy(){for(let r=0;r<n.length;r++){const i=n[r];i&&i.destroy&&i.destroy()}}}}const ee="!",De=new RegExp(`^[^${ee}]+(?:${ee}(?:preventDefault|stopPropagation|passive|nonpassive|capture|once|self))+$`);function Pt(e,t=[]){let n;const r=[];e.$on=(o,a)=>{const l=o;let s=()=>{};for(const f of t){if(typeof f=="string"&&f===l){const p=e.$$.callbacks[l]||(e.$$.callbacks[l]=[]);return p.push(a),()=>{const m=p.indexOf(a);m!==-1&&p.splice(m,1)}}if(typeof f=="object"&&f.name===l){const p=a;a=(...m)=>{typeof f=="object"&&f.shouldExclude()||p(...m)}}}return n?s=n(l,a):r.push([l,a]),()=>{s()}};function i(o){Ce(e,o)}return o=>{const a=[],l={};n=(s,f)=>{let p=s,m=f,c=!1;if(p.match(De)){const S=p.split(ee);p=S[0];const u=Object.fromEntries(S.slice(1).map(x=>[x,!0]));u.passive&&(c=c||{},c.passive=!0),u.nonpassive&&(c=c||{},c.passive=!1),u.capture&&(c=c||{},c.capture=!0),u.once&&(c=c||{},c.once=!0),u.preventDefault&&(m=Ee(m)),u.stopPropagation&&(m=Te(m))}const b=se(o,p,m,c),k=()=>{b();const S=a.indexOf(k);S>-1&&a.splice(S,1)};return a.push(k),p in l||(l[p]=se(o,p,i)),k};for(let s=0;s<r.length;s++)n(r[s][0],r[s][1]);return{destroy:()=>{for(let s=0;s<a.length;s++)a[s]();for(const s of Object.entries(l))s[1]()}}}}const _e={};function X(){return je(_e)}const q=Me("light");function Y(){let e;return q==null||q.subscribe(n=>{e=n}),{...Ct,colorNames:Ze,colorScheme:e,dark:G==null?void 0:G.selector,fn:{themeColor:L.themeColor,size:L.size,radius:L.radius,rgba:L.rgba,variant:L.variant}}}function h(e,t=0){var i,o;const n=((i=X())==null?void 0:i.theme)||Y();let r="50";return Fe(e)?(t!==0&&(r=`${t.toString()}00`),(o=n.colors[`${e}${r}`])==null?void 0:o.value):e}function Fe(e){let t=!1;switch(e){case"dark":t=!0;break;case"gray":t=!0;break;case"red":t=!0;break;case"pink":t=!0;break;case"grape":t=!0;break;case"violet":t=!0;break;case"indigo":t=!0;break;case"blue":t=!0;break;case"cyan":t=!0;break;case"teal":t=!0;break;case"green":t=!0;break;case"lime":t=!0;break;case"yellow":t=!0;break;case"orange":t=!0;break;default:t=!1;break}return t}function Ne(e){var t,n;return typeof e.size=="number"?e.size:typeof e.sizes[e.size]=="number"?e.sizes[e.size]:+((t=e.sizes[e.size])==null?void 0:t.value)||+((n=e.sizes.md)==null?void 0:n.value)}function Ue(e){var n;const t=((n=X())==null?void 0:n.theme)||Y();return typeof e=="number"?e:t.radii[e].value}function Ge(e){const t=e.replace("#","");return typeof t=="string"&&t.length===6&&!Number.isNaN(+`0x${t}`)}function Ve(e){const t=e.replace("#",""),n=parseInt(t,16),r=n>>16&255,i=n>>8&255,o=n&255;return{r,g:i,b:o,a:1}}function Xe(e){const[t,n,r,i]=e.replace(/[^0-9,.]/g,"").split(",").map(Number);return{r:t,g:n,b:r,a:i||1}}function Ye(e){return Ge(e)?Ve(e):e.startsWith("rgb")?Xe(e):{r:0,g:0,b:0,a:1}}function E(e,t=1){if(typeof e!="string"||t>1||t<0)return"rgba(0, 0, 0, 1)";const{r:n,g:r,b:i}=Ye(e);return`rgba(${n}, ${r}, ${i}, ${t})`}const K={from:"indigo",to:"cyan",deg:45};function Je({variant:e,color:t,gradient:n}){var o;const r=((o=X())==null?void 0:o.theme)||Y(),i=6;if(e==="light")return{border:"transparent",background:[E(h(t,8),.35),E(h(t,0),1)],color:[t==="dark"?h("dark",0):h(t,2),t==="dark"?h("dark",9):h(t,i)],hover:[E(h(t,7),.45),E(h(t,1),.65)]};if(e==="default")return{border:[h("dark",5),h("gray",4)],background:[h("dark",5),r.colors.white.value],color:[r.colors.white.value,r.colors.black.value],hover:[h("dark",4),h("gray",0)]};if(e==="white")return{border:"transparent",background:r.colors.white.value,color:h(t,i),hover:null};if(e==="outline")return{border:[h(t,4),h(t,i)],background:"transparent",color:[h(t,4),h(t,i)],hover:[E(h(t,4),.05),E(h(t,0),.35)]};if(e==="gradient"){const a={from:(n==null?void 0:n.from)||K.from,to:(n==null?void 0:n.to)||K.to,deg:(n==null?void 0:n.deg)||K.deg};return{background:`linear-gradient(${a.deg}deg, ${h(a.from,i)} 0%, ${h(a.to,i)} 100%)`,color:r.colors.white.value,border:"transparent",hover:null}}return e==="subtle"?{border:"transparent",background:"transparent",color:[t==="dark"?h("dark",0):h(t,2),t==="dark"?h("dark",9):h(t,i)],hover:[E(h(t,8),.35),E(h(t,0),1)]}:{border:"transparent",background:[h(t,8),h(t,i)],color:r.colors.white.value,hover:h(t,7)}}const L={size:Ne,radius:Ue,themeColor:h,variant:Je,rgba:E},ke={primary:"#228be6",white:"#ffffff",black:"#000000",dark50:"#C1C2C5",dark100:"#A6A7AB",dark200:"#909296",dark300:"#5c5f66",dark400:"#373A40",dark500:"#2C2E33",dark600:"#25262b",dark700:"#1A1B1E",dark800:"#141517",dark900:"#101113",gray50:"#f8f9fa",gray100:"#f1f3f5",gray200:"#e9ecef",gray300:"#dee2e6",gray400:"#ced4da",gray500:"#adb5bd",gray600:"#868e96",gray700:"#495057",gray800:"#343a40",gray900:"#212529",red50:"#fff5f5",red100:"#ffe3e3",red200:"#ffc9c9",red300:"#ffa8a8",red400:"#ff8787",red500:"#ff6b6b",red600:"#fa5252",red700:"#f03e3e",red800:"#e03131",red900:"#c92a2a",pink50:"#fff0f6",pink100:"#ffdeeb",pink200:"#fcc2d7",pink300:"#faa2c1",pink400:"#f783ac",pink500:"#f06595",pink600:"#e64980",pink700:"#d6336c",pink800:"#c2255c",pink900:"#a61e4d",grape50:"#f8f0fc",grape100:"#f3d9fa",grape200:"#eebefa",grape300:"#e599f7",grape400:"#da77f2",grape500:"#cc5de8",grape600:"#be4bdb",grape700:"#ae3ec9",grape800:"#9c36b5",grape900:"#862e9c",violet50:"#f3f0ff",violet100:"#e5dbff",violet200:"#d0bfff",violet300:"#b197fc",violet400:"#9775fa",violet500:"#845ef7",violet600:"#7950f2",violet700:"#7048e8",violet800:"#6741d9",violet900:"#5f3dc4",indigo50:"#edf2ff",indigo100:"#dbe4ff",indigo200:"#bac8ff",indigo300:"#91a7ff",indigo400:"#748ffc",indigo500:"#5c7cfa",indigo600:"#4c6ef5",indigo700:"#4263eb",indigo800:"#3b5bdb",indigo900:"#364fc7",blue50:"#e7f5ff",blue100:"#d0ebff",blue200:"#a5d8ff",blue300:"#74c0fc",blue400:"#4dabf7",blue500:"#339af0",blue600:"#228be6",blue700:"#1c7ed6",blue800:"#1971c2",blue900:"#1864ab",cyan50:"#e3fafc",cyan100:"#c5f6fa",cyan200:"#99e9f2",cyan300:"#66d9e8",cyan400:"#3bc9db",cyan500:"#22b8cf",cyan600:"#15aabf",cyan700:"#1098ad",cyan800:"#0c8599",cyan900:"#0b7285",teal50:"#e6fcf5",teal100:"#c3fae8",teal200:"#96f2d7",teal300:"#63e6be",teal400:"#38d9a9",teal500:"#20c997",teal600:"#12b886",teal700:"#0ca678",teal800:"#099268",teal900:"#087f5b",green50:"#ebfbee",green100:"#d3f9d8",green200:"#b2f2bb",green300:"#8ce99a",green400:"#69db7c",green500:"#51cf66",green600:"#40c057",green700:"#37b24d",green800:"#2f9e44",green900:"#2b8a3e",lime50:"#f4fce3",lime100:"#e9fac8",lime200:"#d8f5a2",lime300:"#c0eb75",lime400:"#a9e34b",lime500:"#94d82d",lime600:"#82c91e",lime700:"#74b816",lime800:"#66a80f",lime900:"#5c940d",yellow50:"#fff9db",yellow100:"#fff3bf",yellow200:"#ffec99",yellow300:"#ffe066",yellow400:"#ffd43b",yellow500:"#fcc419",yellow600:"#fab005",yellow700:"#f59f00",yellow800:"#f08c00",yellow900:"#e67700",orange50:"#fff4e6",orange100:"#ffe8cc",orange200:"#ffd8a8",orange300:"#ffc078",orange400:"#ffa94d",orange500:"#ff922b",orange600:"#fd7e14",orange700:"#f76707",orange800:"#e8590c",orange900:"#d9480f"},Ze={blue:"blue",cyan:"cyan",dark:"dark",grape:"grape",gray:"gray",green:"green",indigo:"indigo",lime:"lime",orange:"orange",pink:"pink",red:"red",teal:"teal",violet:"violet",yellow:"yellow"},qe={}.hasOwnProperty;function Ke(...e){const t=[];for(let n=0;n<e.length;n++){const r=e[n];if(!r)continue;const i=typeof r;if(i==="string"||i==="number")t.push(r);else if(Array.isArray(r)){if(r.length){const o={...r};o&&t.push(o)}}else if(i==="object")if(r.toString===Object.prototype.toString)for(const o in r)qe.call(r,o)&&r[o]&&t.push(o);else t.push(r.toString())}return t.join(" ")}function Qe(){return{cx:Ke}}function et(e){const t={};return Object.keys(e).forEach(n=>{const[r,i]=e[n];t[r]=i}),t}const fe="svelteui";function tt(e){return`__svelteui-ref-${e||""}`}function rt(e,t){const n=[],r={},i=o=>{Object.keys(o).map(a=>{if(a!=="variants"&&(a==="ref"&&n.push(o.ref),a==="darkMode"&&(o[`${t.dark} &`]=o.darkMode),!(o[a]===null||typeof o[a]!="object"))){if(i(o[a]),a==="darkMode")delete o[a];else if(!a.startsWith("@media")){if(!a.startsWith("&")&&!a.startsWith(t.dark)){const l=re(o[a]);r[a]=l().toString(),o[`& .${l().toString()}`]=o[a],delete o[a]}}}})};return i(e),delete e["& .root"],{classMap:r,refs:Array.from(new Set(n))}}function Lt(e){const t=typeof e=="function"?e:()=>e;function n(r={},i){var u;const o=((u=X())==null?void 0:u.theme)||Y(),{cx:a}=Qe(),{override:l,name:s}=i||{},f=t(o,r,tt),p=Object.assign({},f),{classMap:m,refs:c}=rt(p,o),g=f.root??void 0,b=g!==void 0?{...g,...p}:f,k=re(b),S=et(Object.keys(f).map(x=>{const v=c.find(W=>W.includes(x))??"",z=(v==null?void 0:v.split("-"))??[],j=(v==null?void 0:v.split("-")[(z==null?void 0:z.length)-1])===x,$=x.toString();let w=m[$]??$;v&&j&&(w=`${w} ${v}`),x==="root"&&(w=k({css:l}).toString());let R=`${fe}-${x.toString()}`;return s&&(R=`${fe}-${s}-${x.toString()}`,w=`${w} ${R}`),[x,w]}));return{cx:a,theme:o,classes:S,getStyles:re(b)}}return n}var y="colors",B="sizes",d="space",Se={gap:d,gridGap:d,columnGap:d,gridColumnGap:d,rowGap:d,gridRowGap:d,inset:d,insetBlock:d,insetBlockEnd:d,insetBlockStart:d,insetInline:d,insetInlineEnd:d,insetInlineStart:d,margin:d,marginTop:d,marginRight:d,marginBottom:d,marginLeft:d,marginBlock:d,marginBlockEnd:d,marginBlockStart:d,marginInline:d,marginInlineEnd:d,marginInlineStart:d,padding:d,paddingTop:d,paddingRight:d,paddingBottom:d,paddingLeft:d,paddingBlock:d,paddingBlockEnd:d,paddingBlockStart:d,paddingInline:d,paddingInlineEnd:d,paddingInlineStart:d,top:d,right:d,bottom:d,left:d,scrollMargin:d,scrollMarginTop:d,scrollMarginRight:d,scrollMarginBottom:d,scrollMarginLeft:d,scrollMarginX:d,scrollMarginY:d,scrollMarginBlock:d,scrollMarginBlockEnd:d,scrollMarginBlockStart:d,scrollMarginInline:d,scrollMarginInlineEnd:d,scrollMarginInlineStart:d,scrollPadding:d,scrollPaddingTop:d,scrollPaddingRight:d,scrollPaddingBottom:d,scrollPaddingLeft:d,scrollPaddingX:d,scrollPaddingY:d,scrollPaddingBlock:d,scrollPaddingBlockEnd:d,scrollPaddingBlockStart:d,scrollPaddingInline:d,scrollPaddingInlineEnd:d,scrollPaddingInlineStart:d,fontSize:"fontSizes",background:y,backgroundColor:y,backgroundImage:y,borderImage:y,border:y,borderBlock:y,borderBlockEnd:y,borderBlockStart:y,borderBottom:y,borderBottomColor:y,borderColor:y,borderInline:y,borderInlineEnd:y,borderInlineStart:y,borderLeft:y,borderLeftColor:y,borderRight:y,borderRightColor:y,borderTop:y,borderTopColor:y,caretColor:y,color:y,columnRuleColor:y,fill:y,outline:y,outlineColor:y,stroke:y,textDecorationColor:y,fontFamily:"fonts",fontWeight:"fontWeights",lineHeight:"lineHeights",letterSpacing:"letterSpacings",blockSize:B,minBlockSize:B,maxBlockSize:B,inlineSize:B,minInlineSize:B,maxInlineSize:B,width:B,minWidth:B,maxWidth:B,height:B,minHeight:B,maxHeight:B,flexBasis:B,gridTemplateColumns:B,gridTemplateRows:B,borderWidth:"borderWidths",borderTopWidth:"borderWidths",borderRightWidth:"borderWidths",borderBottomWidth:"borderWidths",borderLeftWidth:"borderWidths",borderStyle:"borderStyles",borderTopStyle:"borderStyles",borderRightStyle:"borderStyles",borderBottomStyle:"borderStyles",borderLeftStyle:"borderStyles",borderRadius:"radii",borderTopLeftRadius:"radii",borderTopRightRadius:"radii",borderBottomRightRadius:"radii",borderBottomLeftRadius:"radii",boxShadow:"shadows",textShadow:"shadows",transition:"transitions",zIndex:"zIndices"},nt=(e,t)=>typeof t=="function"?{"()":Function.prototype.toString.call(t)}:t,_=()=>{const e=Object.create(null);return(t,n,...r)=>{const i=(o=>JSON.stringify(o,nt))(t);return i in e?e[i]:e[i]=n(t,...r)}},U=Symbol.for("sxs.internal"),ie=(e,t)=>Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)),pe=e=>{for(const t in e)return!0;return!1},{hasOwnProperty:it}=Object.prototype,te=e=>e.includes("-")?e:e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()),ot=/\s+(?![^()]*\))/,O=e=>t=>e(...typeof t=="string"?String(t).split(ot):[t]),ge={appearance:e=>({WebkitAppearance:e,appearance:e}),backfaceVisibility:e=>({WebkitBackfaceVisibility:e,backfaceVisibility:e}),backdropFilter:e=>({WebkitBackdropFilter:e,backdropFilter:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),boxDecorationBreak:e=>({WebkitBoxDecorationBreak:e,boxDecorationBreak:e}),clipPath:e=>({WebkitClipPath:e,clipPath:e}),content:e=>({content:e.includes('"')||e.includes("'")||/^([A-Za-z]+\([^]*|[^]*-quote|inherit|initial|none|normal|revert|unset)$/.test(e)?e:`"${e}"`}),hyphens:e=>({WebkitHyphens:e,hyphens:e}),maskImage:e=>({WebkitMaskImage:e,maskImage:e}),maskSize:e=>({WebkitMaskSize:e,maskSize:e}),tabSize:e=>({MozTabSize:e,tabSize:e}),textSizeAdjust:e=>({WebkitTextSizeAdjust:e,textSizeAdjust:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),marginBlock:O((e,t)=>({marginBlockStart:e,marginBlockEnd:t||e})),marginInline:O((e,t)=>({marginInlineStart:e,marginInlineEnd:t||e})),maxSize:O((e,t)=>({maxBlockSize:e,maxInlineSize:t||e})),minSize:O((e,t)=>({minBlockSize:e,minInlineSize:t||e})),paddingBlock:O((e,t)=>({paddingBlockStart:e,paddingBlockEnd:t||e})),paddingInline:O((e,t)=>({paddingInlineStart:e,paddingInlineEnd:t||e}))},Q=/([\d.]+)([^]*)/,at=(e,t)=>e.length?e.reduce((n,r)=>(n.push(...t.map(i=>i.includes("&")?i.replace(/&/g,/[ +>|~]/.test(r)&&/&.*&/.test(i)?`:is(${r})`:r):r+" "+i)),n),[]):t,st=(e,t)=>e in lt&&typeof t=="string"?t.replace(/^((?:[^]*[^\w-])?)(fit-content|stretch)((?:[^\w-][^]*)?)$/,(n,r,i,o)=>r+(i==="stretch"?`-moz-available${o};${te(e)}:${r}-webkit-fill-available`:`-moz-fit-content${o};${te(e)}:${r}fit-content`)+o):String(t),lt={blockSize:1,height:1,inlineSize:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,width:1},T=e=>e?e+"-":"",we=(e,t,n)=>e.replace(/([+-])?((?:\d+(?:\.\d*)?|\.\d+)(?:[Ee][+-]?\d+)?)?(\$|--)([$\w-]+)/g,(r,i,o,a,l)=>a=="$"==!!o?r:(i||a=="--"?"calc(":"")+"var(--"+(a==="$"?T(t)+(l.includes("$")?"":T(n))+l.replace(/\$/g,"-"):l)+")"+(i||a=="--"?"*"+(i||"")+(o||"1")+")":"")),ct=/\s*,\s*(?![^()]*\))/,dt=Object.prototype.toString,P=(e,t,n,r,i)=>{let o,a,l;const s=(f,p,m)=>{let c,g;const b=k=>{for(c in k){const x=c.charCodeAt(0)===64,v=x&&Array.isArray(k[c])?k[c]:[k[c]];for(g of v){const z=/[A-Z]/.test(u=c)?u:u.replace(/-[^]/g,$=>$[1].toUpperCase()),j=typeof g=="object"&&g&&g.toString===dt&&(!r.utils[z]||!p.length);if(z in r.utils&&!j){const $=r.utils[z];if($!==a){a=$,b($(g)),a=null;continue}}else if(z in ge){const $=ge[z];if($!==l){l=$,b($(g)),l=null;continue}}if(x&&(S=c.slice(1)in r.media?"@media "+r.media[c.slice(1)]:c,c=S.replace(/\(\s*([\w-]+)\s*(=|<|<=|>|>=)\s*([\w-]+)\s*(?:(<|<=|>|>=)\s*([\w-]+)\s*)?\)/g,($,w,R,W,I,C)=>{const A=Q.test(w),F=.0625*(A?-1:1),[N,oe]=A?[W,w]:[w,W];return"("+(R[0]==="="?"":R[0]===">"===A?"max-":"min-")+N+":"+(R[0]!=="="&&R.length===1?oe.replace(Q,(Be,J,Z)=>Number(J)+F*(R===">"?1:-1)+Z):oe)+(I?") and ("+(I[0]===">"?"min-":"max-")+N+":"+(I.length===1?C.replace(Q,(Be,J,Z)=>Number(J)+F*(I===">"?-1:1)+Z):C):"")+")"})),j){const $=x?m.concat(c):[...m],w=x?[...p]:at(p,c.split(ct));o!==void 0&&i(ue(...o)),o=void 0,s(g,w,$)}else o===void 0&&(o=[[],p,m]),c=x||c.charCodeAt(0)!==36?c:`--${T(r.prefix)}${c.slice(1).replace(/\$/g,"-")}`,g=j?g:typeof g=="number"?g&&z in ft?String(g)+"px":String(g):we(st(z,g??""),r.prefix,r.themeMap[z]),o[0].push(`${x?`${c} `:`${te(c)}:`}${g}`)}}var S,u};b(f),o!==void 0&&i(ue(...o)),o=void 0};s(e,t,n)},ue=(e,t,n)=>`${n.map(r=>`${r}{`).join("")}${t.length?`${t.join(",")}{`:""}${e.join(";")}${t.length?"}":""}${Array(n.length?n.length+1:0).join("}")}`,ft={animationDelay:1,animationDuration:1,backgroundSize:1,blockSize:1,border:1,borderBlock:1,borderBlockEnd:1,borderBlockEndWidth:1,borderBlockStart:1,borderBlockStartWidth:1,borderBlockWidth:1,borderBottom:1,borderBottomLeftRadius:1,borderBottomRightRadius:1,borderBottomWidth:1,borderEndEndRadius:1,borderEndStartRadius:1,borderInlineEnd:1,borderInlineEndWidth:1,borderInlineStart:1,borderInlineStartWidth:1,borderInlineWidth:1,borderLeft:1,borderLeftWidth:1,borderRadius:1,borderRight:1,borderRightWidth:1,borderSpacing:1,borderStartEndRadius:1,borderStartStartRadius:1,borderTop:1,borderTopLeftRadius:1,borderTopRightRadius:1,borderTopWidth:1,borderWidth:1,bottom:1,columnGap:1,columnRule:1,columnRuleWidth:1,columnWidth:1,containIntrinsicSize:1,flexBasis:1,fontSize:1,gap:1,gridAutoColumns:1,gridAutoRows:1,gridTemplateColumns:1,gridTemplateRows:1,height:1,inlineSize:1,inset:1,insetBlock:1,insetBlockEnd:1,insetBlockStart:1,insetInline:1,insetInlineEnd:1,insetInlineStart:1,left:1,letterSpacing:1,margin:1,marginBlock:1,marginBlockEnd:1,marginBlockStart:1,marginBottom:1,marginInline:1,marginInlineEnd:1,marginInlineStart:1,marginLeft:1,marginRight:1,marginTop:1,maxBlockSize:1,maxHeight:1,maxInlineSize:1,maxWidth:1,minBlockSize:1,minHeight:1,minInlineSize:1,minWidth:1,offsetDistance:1,offsetRotate:1,outline:1,outlineOffset:1,outlineWidth:1,overflowClipMargin:1,padding:1,paddingBlock:1,paddingBlockEnd:1,paddingBlockStart:1,paddingBottom:1,paddingInline:1,paddingInlineEnd:1,paddingInlineStart:1,paddingLeft:1,paddingRight:1,paddingTop:1,perspective:1,right:1,rowGap:1,scrollMargin:1,scrollMarginBlock:1,scrollMarginBlockEnd:1,scrollMarginBlockStart:1,scrollMarginBottom:1,scrollMarginInline:1,scrollMarginInlineEnd:1,scrollMarginInlineStart:1,scrollMarginLeft:1,scrollMarginRight:1,scrollMarginTop:1,scrollPadding:1,scrollPaddingBlock:1,scrollPaddingBlockEnd:1,scrollPaddingBlockStart:1,scrollPaddingBottom:1,scrollPaddingInline:1,scrollPaddingInlineEnd:1,scrollPaddingInlineStart:1,scrollPaddingLeft:1,scrollPaddingRight:1,scrollPaddingTop:1,shapeMargin:1,textDecoration:1,textDecorationThickness:1,textIndent:1,textUnderlineOffset:1,top:1,transitionDelay:1,transitionDuration:1,verticalAlign:1,width:1,wordSpacing:1},me=e=>String.fromCharCode(e+(e>25?39:97)),M=e=>(t=>{let n,r="";for(n=Math.abs(t);n>52;n=n/52|0)r=me(n%52)+r;return me(n%52)+r})(((t,n)=>{let r=n.length;for(;r;)t=33*t^n.charCodeAt(--r);return t})(5381,JSON.stringify(e))>>>0),D=["themed","global","styled","onevar","resonevar","allvar","inline"],pt=e=>{if(e.href&&!e.href.startsWith(location.origin))return!1;try{return!!e.cssRules}catch{return!1}},gt=e=>{let t;const n=()=>{const{cssRules:i}=t.sheet;return[].map.call(i,(o,a)=>{const{cssText:l}=o;let s="";if(l.startsWith("--sxs"))return"";if(i[a-1]&&(s=i[a-1].cssText).startsWith("--sxs")){if(!o.cssRules.length)return"";for(const f in t.rules)if(t.rules[f].group===o)return`--sxs{--sxs:${[...t.rules[f].cache].join(" ")}}${l}`;return o.cssRules.length?`${s}${l}`:""}return l}).join("")},r=()=>{if(t){const{rules:l,sheet:s}=t;if(!s.deleteRule){for(;Object(Object(s.cssRules)[0]).type===3;)s.cssRules.splice(0,1);s.cssRules=[]}for(const f in l)delete l[f]}const i=Object(e).styleSheets||[];for(const l of i)if(pt(l)){for(let s=0,f=l.cssRules;f[s];++s){const p=Object(f[s]);if(p.type!==1)continue;const m=Object(f[s+1]);if(m.type!==4)continue;++s;const{cssText:c}=p;if(!c.startsWith("--sxs"))continue;const g=c.slice(14,-3).trim().split(/\s+/),b=D[g[0]];b&&(t||(t={sheet:l,reset:r,rules:{},toString:n}),t.rules[b]={group:m,index:s,cache:new Set(g)})}if(t)break}if(!t){const l=(s,f)=>({type:f,cssRules:[],insertRule(p,m){this.cssRules.splice(m,0,l(p,{import:3,undefined:1}[(p.toLowerCase().match(/^@([a-z]+)/)||[])[1]]||4))},get cssText(){return s==="@media{}"?`@media{${[].map.call(this.cssRules,p=>p.cssText).join("")}}`:s}});t={sheet:e?(e.head||e).appendChild(document.createElement("style")).sheet:l("","text/css"),rules:{},reset:r,toString:n}}const{sheet:o,rules:a}=t;for(let l=D.length-1;l>=0;--l){const s=D[l];if(!a[s]){const f=D[l+1],p=a[f]?a[f].index:o.cssRules.length;o.insertRule("@media{}",p),o.insertRule(`--sxs{--sxs:${l}}`,p),a[s]={group:o.cssRules[p+1],index:p,cache:new Set([l])}}ut(a[s])}};return r(),t},ut=e=>{const t=e.group;let n=t.cssRules.length;e.apply=r=>{try{t.insertRule(r,n),++n}catch{}}},H=Symbol(),mt=_(),bt=(e,t)=>mt(e,()=>(...n)=>{let r={type:null,composers:new Set};for(const i of n)if(i!=null)if(i[U]){r.type==null&&(r.type=i[U].type);for(const o of i[U].composers)r.composers.add(o)}else i.constructor!==Object||i.$$typeof?r.type==null&&(r.type=i):r.composers.add(ht(i,e));return r.type==null&&(r.type="span"),r.composers.size||r.composers.add(["PJLV",{},[],[],{},[]]),xt(e,r,t)}),ht=({variants:e,compoundVariants:t,defaultVariants:n,...r},i)=>{const o=`${T(i.prefix)}c-${M(r)}`,a=[],l=[],s=Object.create(null),f=[];for(const c in n)s[c]=String(n[c]);if(typeof e=="object"&&e)for(const c in e){p=s,m=c,it.call(p,m)||(s[c]="undefined");const g=e[c];for(const b in g){const k={[c]:String(b)};String(b)==="undefined"&&f.push(c);const S=g[b],u=[k,S,!pe(S)];a.push(u)}}var p,m;if(typeof t=="object"&&t)for(const c of t){let{css:g,...b}=c;g=typeof g=="object"&&g||{};for(const S in b)b[S]=String(b[S]);const k=[b,g,!pe(g)];l.push(k)}return[o,r,a,l,s,f]},xt=(e,t,n)=>{const[r,i,o,a]=yt(t.composers),l=typeof t.type=="function"||t.type.$$typeof?(m=>{function c(){for(let g=0;g<c[H].length;g++){const[b,k]=c[H][g];m.rules[b].apply(k)}return c[H]=[],null}return c[H]=[],c.rules={},D.forEach(g=>c.rules[g]={apply:b=>c[H].push([g,b])}),c})(n):null,s=(l||n).rules,f=`.${r}${i.length>1?`:where(.${i.slice(1).join(".")})`:""}`,p=m=>{m=typeof m=="object"&&m||kt;const{css:c,...g}=m,b={};for(const u in o)if(delete g[u],u in m){let x=m[u];typeof x=="object"&&x?b[u]={"@initial":o[u],...x}:(x=String(x),b[u]=x!=="undefined"||a.has(u)?x:o[u])}else b[u]=o[u];const k=new Set([...i]);for(const[u,x,v,z]of t.composers){n.rules.styled.cache.has(u)||(n.rules.styled.cache.add(u),P(x,[`.${u}`],[],e,w=>{s.styled.apply(w)}));const j=be(v,b,e.media),$=be(z,b,e.media,!0);for(const w of j)if(w!==void 0)for(const[R,W,I]of w){const C=`${u}-${M(W)}-${R}`;k.add(C);const A=(I?n.rules.resonevar:n.rules.onevar).cache,F=I?s.resonevar:s.onevar;A.has(C)||(A.add(C),P(W,[`.${C}`],[],e,N=>{F.apply(N)}))}for(const w of $)if(w!==void 0)for(const[R,W]of w){const I=`${u}-${M(W)}-${R}`;k.add(I),n.rules.allvar.cache.has(I)||(n.rules.allvar.cache.add(I),P(W,[`.${I}`],[],e,C=>{s.allvar.apply(C)}))}}if(typeof c=="object"&&c){const u=`${r}-i${M(c)}-css`;k.add(u),n.rules.inline.cache.has(u)||(n.rules.inline.cache.add(u),P(c,[`.${u}`],[],e,x=>{s.inline.apply(x)}))}for(const u of String(m.className||"").trim().split(/\s+/))u&&k.add(u);const S=g.className=[...k].join(" ");return{type:t.type,className:S,selector:f,props:g,toString:()=>S,deferredInjector:l}};return ie(p,{className:r,selector:f,[U]:t,toString:()=>(n.rules.styled.cache.has(r)||p(),r)})},yt=e=>{let t="";const n=[],r={},i=[];for(const[o,,,,a,l]of e){t===""&&(t=o),n.push(o),i.push(...l);for(const s in a){const f=a[s];(r[s]===void 0||f!=="undefined"||l.includes(f))&&(r[s]=f)}}return[t,n,r,new Set(i)]},be=(e,t,n,r)=>{const i=[];e:for(let[o,a,l]of e){if(l)continue;let s,f=0,p=!1;for(s in o){const m=o[s];let c=t[s];if(c!==m){if(typeof c!="object"||!c)continue e;{let g,b,k=0;for(const S in c){if(m===String(c[S])){if(S!=="@initial"){const u=S.slice(1);(b=b||[]).push(u in n?n[u]:S.replace(/^@media ?/,"")),p=!0}f+=k,g=!0}++k}if(b&&b.length&&(a={["@media "+b.join(", ")]:a}),!g)continue e}}}(i[f]=i[f]||[]).push([r?"cv":`${s}-${o[s]}`,a,p])}return i},kt={},St=_(),wt=(e,t)=>St(e,()=>(...n)=>{const r=()=>{for(let i of n){i=typeof i=="object"&&i||{};let o=M(i);if(!t.rules.global.cache.has(o)){if(t.rules.global.cache.add(o),"@import"in i){let a=[].indexOf.call(t.sheet.cssRules,t.rules.themed.group)-1;for(let l of[].concat(i["@import"]))l=l.includes('"')||l.includes("'")?l:`"${l}"`,t.sheet.insertRule(`@import ${l};`,a++);delete i["@import"]}P(i,[],[],e,a=>{t.rules.global.apply(a)})}}return""};return ie(r,{toString:r})}),$t=_(),Bt=(e,t)=>$t(e,()=>n=>{const r=`${T(e.prefix)}k-${M(n)}`,i=()=>{if(!t.rules.global.cache.has(r)){t.rules.global.cache.add(r);const o=[];P(n,[],[],e,l=>o.push(l));const a=`@keyframes ${r}{${o.join("")}}`;t.rules.global.apply(a)}return r};return ie(i,{get name(){return i()},toString:i})}),zt=class{constructor(e,t,n,r){this.token=e==null?"":String(e),this.value=t==null?"":String(t),this.scale=n==null?"":String(n),this.prefix=r==null?"":String(r)}get computedValue(){return"var("+this.variable+")"}get variable(){return"--"+T(this.prefix)+T(this.scale)+this.token}toString(){return this.computedValue}},vt=_(),Rt=(e,t)=>vt(e,()=>(n,r)=>{r=typeof n=="object"&&n||Object(r);const i=`.${n=(n=typeof n=="string"?n:"")||`${T(e.prefix)}t-${M(r)}`}`,o={},a=[];for(const s in r){o[s]={};for(const f in r[s]){const p=`--${T(e.prefix)}${s}-${f}`,m=we(String(r[s][f]),e.prefix,s);o[s][f]=new zt(f,m,s,e.prefix),a.push(`${p}:${m}`)}}const l=()=>{if(a.length&&!t.rules.themed.cache.has(n)){t.rules.themed.cache.add(n);const s=`${r===e.theme?":root,":""}.${n}{${a.join(";")}}`;t.rules.themed.apply(s)}return n};return{...o,get className(){return l()},selector:i,toString:l}}),It=_(),Wt=e=>{let t=!1;const n=It(e,r=>{t=!0;const i="prefix"in(r=typeof r=="object"&&r||{})?String(r.prefix):"",o=typeof r.media=="object"&&r.media||{},a=typeof r.root=="object"?r.root||null:globalThis.document||null,l=typeof r.theme=="object"&&r.theme||{},s={prefix:i,media:o,theme:l,themeMap:typeof r.themeMap=="object"&&r.themeMap||{...Se},utils:typeof r.utils=="object"&&r.utils||{}},f=gt(a),p={css:bt(s,f),globalCss:wt(s,f),keyframes:Bt(s,f),createTheme:Rt(s,f),reset(){f.reset(),p.theme.toString()},theme:{},sheet:f,config:s,prefix:i,getCssText:f.toString,toString:f.toString};return String(p.theme=p.createTheme(l)),p});return t||n.reset(),n};const{css:re,globalCss:$e,keyframes:Ht,getCssText:Dt,theme:Ct,createTheme:Et,config:_t,reset:Ft}=Wt({prefix:"svelteui",theme:{colors:ke,space:{0:"0rem",xs:10,sm:12,md:16,lg:20,xl:24,xsPX:"10px",smPX:"12px",mdPX:"16px",lgPX:"20px",xlPX:"24px",1:"0.125rem",2:"0.25rem",3:"0.375rem",4:"0.5rem",5:"0.625rem",6:"0.75rem",7:"0.875rem",8:"1rem",9:"1.25rem",10:"1.5rem",11:"1.75rem",12:"2rem",13:"2.25rem",14:"2.5rem",15:"2.75rem",16:"3rem",17:"3.5rem",18:"4rem",20:"5rem",24:"6rem",28:"7rem",32:"8rem",36:"9rem",40:"10rem",44:"11rem",48:"12rem",52:"13rem",56:"14rem",60:"15rem",64:"16rem",72:"18rem",80:"20rem",96:"24rem"},fontSizes:{xs:"12px",sm:"14px",md:"16px",lg:"18px",xl:"20px"},fonts:{standard:"-apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Helvetica, Arial, sans-serif, Apple Color Emoji, Segoe UI Emoji",mono:"ui-monospace, SFMono-Regular, Menlo, Monaco, Consolas, Liberation Mono, Courier New, monospace",fallback:"Segoe UI, system-ui, sans-serif"},fontWeights:{thin:100,extralight:200,light:300,normal:400,medium:500,semibold:600,bold:700,extrabold:800},lineHeights:{xs:1,sm:1.25,md:1.5,lg:1.625,xl:1.75},letterSpacings:{tighter:"-0.05em",tight:"-0.025em",normal:"0",wide:"0.025em",wider:"0.05em",widest:"0.1em"},sizes:{},radii:{xs:"2px",sm:"4px",md:"8px",lg:"16px",xl:"32px",squared:"33%",rounded:"50%",pill:"9999px"},shadows:{xs:"0 1px 3px rgba(0, 0, 0, 0.05), 0 1px 2px rgba(0, 0, 0, 0.1)",sm:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 10px 15px -5px, rgba(0, 0, 0, 0.04) 0px 7px 7px -5px",md:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 20px 25px -5px, rgba(0, 0, 0, 0.04) 0px 10px 10px -5px",lg:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 28px 23px -7px, rgba(0, 0, 0, 0.04) 0px 12px 12px -7px",xl:"0 1px 3px rgba(0, 0, 0, 0.05), rgba(0, 0, 0, 0.05) 0px 36px 28px -7px, rgba(0, 0, 0, 0.04) 0px 17px 17px -7px"},zIndices:{1:"100",2:"200",3:"300",4:"400",5:"500",10:"1000",max:"9999"},borderWidths:{light:"1px",normal:"2px",bold:"3px",extrabold:"4px",black:"5px",xs:"1px",sm:"2px",md:"3px",lg:"4px",xl:"5px"},breakpoints:{xs:576,sm:768,md:992,lg:1200,xl:1400},borderStyles:{},transitions:{}},media:{xs:"(min-width: 576px)",sm:"(min-width: 768px)",md:"(min-width: 992px)",lg:"(min-width: 1200px)",xl:"(min-width: 1400px)"},utils:{focusRing:e=>({WebkitTapHighlightColor:"transparent","&:focus":{outlineOffset:2,outline:e==="always"||e==="auto"?"2px solid $primary":"none"},"&:focus:not(:focus-visible)":{outline:e==="auto"||e==="never"?"none":void 0}}),p:e=>({padding:e}),pt:e=>({paddingTop:e}),pr:e=>({paddingRight:e}),pb:e=>({paddingBottom:e}),pl:e=>({paddingLeft:e}),px:e=>({paddingLeft:e,paddingRight:e}),py:e=>({paddingTop:e,paddingBottom:e}),m:e=>({margin:e}),mt:e=>({marginTop:e}),mr:e=>({marginRight:e}),mb:e=>({marginBottom:e}),ml:e=>({marginLeft:e}),mx:e=>({marginLeft:e,marginRight:e}),my:e=>({marginTop:e,marginBottom:e}),ta:e=>({textAlign:e}),tt:e=>({textTransform:e}),to:e=>({textOverflow:e}),d:e=>({display:e}),dflex:e=>({display:"flex",alignItems:e,justifyContent:e}),fd:e=>({flexDirection:e}),fw:e=>({flexWrap:e}),ai:e=>({alignItems:e}),ac:e=>({alignContent:e}),jc:e=>({justifyContent:e}),as:e=>({alignSelf:e}),fg:e=>({flexGrow:e}),fs:e=>({fontSize:e}),fb:e=>({flexBasis:e}),bc:e=>({backgroundColor:e}),bf:e=>({backdropFilter:e}),bg:e=>({background:e}),bgBlur:e=>({bf:"saturate(180%) blur(10px)",bg:e}),bgColor:e=>({backgroundColor:e}),backgroundClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),bgClip:e=>({WebkitBackgroundClip:e,backgroundClip:e}),br:e=>({borderRadius:e}),bw:e=>({borderWidth:e}),btrr:e=>({borderTopRightRadius:e}),bbrr:e=>({borderBottomRightRadius:e}),bblr:e=>({borderBottomLeftRadius:e}),btlr:e=>({borderTopLeftRadius:e}),bs:e=>({boxShadow:e}),normalShadow:e=>({boxShadow:`0 4px 14px 0 $${e}`}),lh:e=>({lineHeight:e}),ov:e=>({overflow:e}),ox:e=>({overflowX:e}),oy:e=>({overflowY:e}),pe:e=>({pointerEvents:e}),events:e=>({pointerEvents:e}),us:e=>({WebkitUserSelect:e,userSelect:e}),userSelect:e=>({WebkitUserSelect:e,userSelect:e}),w:e=>({width:e}),h:e=>({height:e}),minW:e=>({minWidth:e}),minH:e=>({minWidth:e}),mw:e=>({maxWidth:e}),maxW:e=>({maxWidth:e}),mh:e=>({maxHeight:e}),maxH:e=>({maxHeight:e}),size:e=>({width:e,height:e}),minSize:e=>({minWidth:e,minHeight:e,width:e,height:e}),sizeMin:e=>({minWidth:e,minHeight:e,width:e,height:e}),maxSize:e=>({maxWidth:e,maxHeight:e}),sizeMax:e=>({maxWidth:e,maxHeight:e}),appearance:e=>({WebkitAppearance:e,appearance:e}),scale:e=>({transform:`scale(${e})`}),linearGradient:e=>({backgroundImage:`linear-gradient(${e})`}),tdl:e=>({textDecorationLine:e}),textGradient:e=>({backgroundImage:`linear-gradient(${e})`,WebkitBackgroundClip:"text",WebkitTextFillColor:"transparent"})},themeMap:{...Se,width:"space",height:"space",minWidth:"space",maxWidth:"space",minHeight:"space",maxHeight:"space",flexBasis:"space",gridTemplateColumns:"space",gridTemplateRows:"space",blockSize:"space",minBlockSize:"space",maxBlockSize:"space",inlineSize:"space",minInlineSize:"space",maxInlineSize:"space",borderWidth:"borderWeights"}}),G=Et("dark-theme",{colors:ke,shadows:{xs:"-4px 0 15px rgb(0 0 0 / 50%)",sm:"0 5px 20px -5px rgba(20, 20, 20, 0.1)",md:"0 8px 30px rgba(20, 20, 20, 0.15)",lg:"0 30px 60px rgba(20, 20, 20, 0.15)",xl:"0 40px 80px rgba(20, 20, 20, 0.25)"}});$e({a:{focusRing:"auto"},body:{[`${G.selector} &`]:{backgroundColor:"$dark700",color:"$dark50"},backgroundColor:"$white",color:"$black"}});$e({html:{fontFamily:"sans-serif",lineHeight:"1.15",textSizeAdjust:"100%",margin:0},body:{margin:0},"article, aside, footer, header, nav, section, figcaption, figure, main":{display:"block"},h1:{fontSize:"2em",margin:0},hr:{boxSizing:"content-box",height:0,overflow:"visible"},pre:{fontFamily:"monospace, monospace",fontSize:"1em"},a:{background:"transparent",textDecorationSkip:"objects"},"a:active, a:hover":{outlineWidth:0},"abbr[title]":{borderBottom:"none",textDecoration:"underline"},"b, strong":{fontWeight:"bolder"},"code, kbp, samp":{fontFamily:"monospace, monospace",fontSize:"1em"},dfn:{fontStyle:"italic"},mark:{backgroundColor:"#ff0",color:"#000"},small:{fontSize:"80%"},"sub, sup":{fontSize:"75%",lineHeight:0,position:"relative",verticalAlign:"baseline"},sup:{top:"-0.5em"},sub:{bottom:"-0.25em"},"audio, video":{display:"inline-block"},"audio:not([controls])":{display:"none",height:0},img:{borderStyle:"none",verticalAlign:"middle"},"svg:not(:root)":{overflow:"hidden"},"button, input, optgroup, select, textarea":{fontFamily:"sans-serif",fontSize:"100%",lineHeight:"1.15",margin:0},"button, input":{overflow:"visible"},"button, select":{textTransform:"none"},"button, [type=reset], [type=submit]":{WebkitAppearance:"button"},"button::-moz-focus-inner, [type=button]::-moz-focus-inner, [type=reset]::-moz-focus-inner, [type=submit]::-moz-focus-inner":{borderStyle:"none",padding:0},"button:-moz-focusring, [type=button]:-moz-focusring, [type=reset]:-moz-focusring, [type=submit]:-moz-focusring":{outline:"1px dotted ButtonText"},legend:{boxSizing:"border-box",color:"inherit",display:"table",maxWidth:"100%",padding:0,whiteSpace:"normal"},progress:{display:"inline-block",verticalAlign:"baseline"},textarea:{overflow:"auto"},"[type=checkbox], [type=radio]":{boxSizing:"border-box",padding:0},"[type=number]::-webkit-inner-spin-button, [type=number]::-webkit-outer-spin-button":{height:"auto"},"[type=search]":{appearance:"textfield",outlineOffset:"-2px"},"[type=search]::-webkit-search-cancel-button, [type=search]::-webkit-search-decoration":{appearance:"none"},"::-webkit-file-upload-button":{appearance:"button",font:"inherit"},"details, menu":{display:"block"},summary:{display:"list-item"},canvas:{display:"inline-block"},template:{display:"none"},"[hidden]":{display:"none"}});export{At as E,Y as a,re as b,Pt as c,Ot as d,Lt as e,L as f,$e as g,Ct as t,X as u};
