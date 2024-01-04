import{s as M,r as W,p as Q,a as U,c as V,i as X,u as Y,d as Z,v as H,H as p,w,x as v,y as $,z as ee,A as te}from"./scheduler.2MOiW16C.js";import{S as re,i as ne,f as oe,b as q,d as L,m as N,a as x,t as z,e as P}from"./index.uDgcqgGv.js";import{c as se,E as fe,u as R,B as ie,g as le,a as ue,d as ge}from"./Box.m53wu71N.js";function G(n,s,e,o,f=!1){if(s==="dimmed")return f?n.fn.themeColor("dark",2):n.fn.themeColor("gray",6);if(e==="gradient"||o)return n.fn.themeColor(s,6);if(e==="link")return f?n.fn.themeColor("blue",4):n.fn.themeColor("blue",7);if(e==="text")return f?n.fn.themeColor(s,5):n.fn.themeColor(s,7)}const ae=se((n,{align:s,color:e,inherit:o,inline:f,lineClamp:l,size:a,tracking:d,transform:m,underline:t,weight:i,gradient:u,variant:g})=>({root:{focusRing:"auto",[`${n.dark} &`]:{color:e==="dark"?"$dark50":G(n,e,g,u,!0)},fontFamily:o?"inherit":"$standard",fontSize:o?"inherit":typeof a=="string"?`$${a}`:`${a}px`,fontWeight:o?"inherit":`$${i}`,letterSpacing:n.letterSpacings[d]?.value,lineHeight:o?"inherit":f?1:typeof a=="string"?`$${a}`:`${a}px`,textTransform:m,textDecoration:t?"underline":"none",textAlign:s,cursor:g==="link"?"pointer":"inherit",color:e==="green"?"Black":G(n,e,g,u),backgroundImage:g==="gradient"?`linear-gradient(${u?.deg}deg, $${u?.from}600 0%, $${u?.to}600 100%)`:null,WebkitBackgroundClip:g==="gradient"?"text":null,WebkitTextFillColor:g==="gradient"?"transparent":null,...l!==void 0?{overflow:"hidden",textOverflow:"ellipsis",display:"-webkit-box",WebkitLineClamp:l,WebkitBoxOrient:"vertical"}:{},"&:hover":g==="link"&&t===!0?{textDecoration:"underline"}:void 0}})),me=Object.freeze([{error:!0,message:"If using the 'gradient' prop, set 'variant' prop to 'gradient' to apply the gradient",solution:`
                If your component looks like this:

                &lt;Text gradient={{from: 'blue', to: 'red', deg: 45}}&gt;Text string &lt;/Text&gt;
                                                                    ^^^ - Try adding prop variant='gradient'
                `},{error:!0,message:"If using the 'link' variant, an href needs to be set and the root must be an anchor",solution:`
                If your component looks like this:

                &lt;Text variant='link'&gt;Text string &lt;/Text&gt;
                                    ^^^ - Try adding props href && root={'a'}'
                `}]);function ce(n){let s;const e=n[25].default,o=v(e,n,n[27],null);return{c(){o&&o.c()},l(f){o&&o.l(f)},m(f,l){o&&o.m(f,l),s=!0},p(f,l){o&&o.p&&(!s||l&134217728)&&$(o,e,f,f[27],s?te(e,f[27],l,null):ee(f[27]),null)},i(f){s||(x(o,f),s=!0)},o(f){z(o,f),s=!1},d(f){o&&o.d(f)}}}function de(n){let s,e,o,f,l;s=new fe({props:{observable:n[6],component:"Text",code:n[7]}});const a=[{root:n[4]},{use:[n[11],[R,n[1]]]},{class:n[10](n[2],n[9].root,n[8]({css:n[3]}))},{href:n[5]??void 0},n[12]];function d(t){n[26](t)}let m={$$slots:{default:[ce]},$$scope:{ctx:n}};for(let t=0;t<a.length;t+=1)m=W(m,a[t]);return n[0]!==void 0&&(m.element=n[0]),o=new ie({props:m}),Q.push(()=>oe(o,"element",d)),{c(){q(s.$$.fragment),e=U(),q(o.$$.fragment)},l(t){L(s.$$.fragment,t),e=V(t),L(o.$$.fragment,t)},m(t,i){N(s,t,i),X(t,e,i),N(o,t,i),l=!0},p(t,[i]){const u={};i&64&&(u.observable=t[6]),i&128&&(u.code=t[7]),s.$set(u);const g=i&7998?le(a,[i&16&&{root:t[4]},i&2050&&{use:[t[11],[R,t[1]]]},i&1804&&{class:t[10](t[2],t[9].root,t[8]({css:t[3]}))},i&32&&{href:t[5]??void 0},i&4096&&ue(t[12])]):{};i&134217728&&(g.$$scope={dirty:i,ctx:t}),!f&&i&1&&(f=!0,g.element=t[0],Y(()=>f=!1)),o.$set(g)},i(t){l||(x(s.$$.fragment,t),x(o.$$.fragment,t),l=!0)},o(t){z(s.$$.fragment,t),z(o.$$.fragment,t),l=!1},d(t){t&&Z(e),P(s,t),P(o,t)}}}function he(n,s,e){let o,f,l;const a=["use","element","class","override","align","color","root","transform","variant","size","weight","gradient","inline","lineClamp","underline","inherit","href","tracking"];let d=H(s,a),{$$slots:m={},$$scope:t}=s,{use:i=[],element:u=void 0,class:g="",override:A={},align:b="left",color:k="dark",root:F=void 0,transform:C="none",variant:h="text",size:T="md",weight:_="normal",gradient:c={from:"indigo",to:"cyan",deg:45},inline:y=!0,lineClamp:S=void 0,underline:B=!1,inherit:E=!1,href:O="",tracking:I="normal"}=s;const J=ge(p());let j=!1,D;c.from==="indigo"&&c.to==="cyan0"&&c.deg===45&&h!=="gradient"&&(j=!0,D=me[0]);function K(r){u=r,e(0,u)}return n.$$set=r=>{s=W(W({},s),w(r)),e(12,d=H(s,a)),"use"in r&&e(1,i=r.use),"element"in r&&e(0,u=r.element),"class"in r&&e(2,g=r.class),"override"in r&&e(3,A=r.override),"align"in r&&e(13,b=r.align),"color"in r&&e(14,k=r.color),"root"in r&&e(4,F=r.root),"transform"in r&&e(15,C=r.transform),"variant"in r&&e(16,h=r.variant),"size"in r&&e(17,T=r.size),"weight"in r&&e(18,_=r.weight),"gradient"in r&&e(19,c=r.gradient),"inline"in r&&e(20,y=r.inline),"lineClamp"in r&&e(21,S=r.lineClamp),"underline"in r&&e(22,B=r.underline),"inherit"in r&&e(23,E=r.inherit),"href"in r&&e(5,O=r.href),"tracking"in r&&e(24,I=r.tracking),"$$scope"in r&&e(27,t=r.$$scope)},n.$$.update=()=>{n.$$.dirty&33546240&&e(10,{cx:o,classes:f,getStyles:l}=ae({lineClamp:S,underline:B,inline:y,inherit:E,gradient:c,variant:h,align:b,color:k,transform:C,size:T,weight:_,tracking:I},{name:"Text"}),o,(e(9,f),e(21,S),e(22,B),e(20,y),e(23,E),e(19,c),e(16,h),e(13,b),e(14,k),e(15,C),e(17,T),e(18,_),e(24,I)),(e(8,l),e(21,S),e(22,B),e(20,y),e(23,E),e(19,c),e(16,h),e(13,b),e(14,k),e(15,C),e(17,T),e(18,_),e(24,I)))},[u,i,g,A,F,O,j,D,l,f,o,J,d,b,k,C,h,T,_,c,y,S,B,E,I,m,K,t]}class Te extends re{constructor(s){super(),ne(this,s,he,de,M,{use:1,element:0,class:2,override:3,align:13,color:14,root:4,transform:15,variant:16,size:17,weight:18,gradient:19,inline:20,lineClamp:21,underline:22,inherit:23,href:5,tracking:24})}}export{Te as T};
